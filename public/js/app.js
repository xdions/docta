document.addEventListener('DOMContentLoaded', function() {
    const conditionsDropdown = document.getElementById('conditions');
    const conditionSubtypesDropdown = document.getElementById('condition-subtypes');
    const conditionSubtypesWrapper = document.getElementById('subtype-wrapper');
    const conditionExplanation = document.getElementById('condition-explanation');
    const conditionMedications = document.getElementById('condition-medications');
    const conditionDosage = document.getElementById('condition-dosage');
    const conditionDetails = document.getElementById('condition-details');

    const drugCategoriesDropdown = document.getElementById('drug-categories');
    const drugSubtypesDropdown = document.getElementById('drug-subtypes');
    const drugSubtypesWrapper = document.getElementById('drug-subtype-wrapper');
    const drugName = document.getElementById('drug-name');
    const drugCondition = document.getElementById('drug-condition');
    const drugDosage = document.getElementById('drug-dosage');
    const drugSideEffects = document.getElementById('drug-sideEffects');
    const drugDetails = document.getElementById('drug-details');

    const mseCategoriesDropdown = document.getElementById('mse-categories');
    const mseParameters = document.getElementById('mse-parameters');
    const mseDetails = document.getElementById('mse-details');
    const mseSubtypesWrapper = document.getElementById('mse-subtype-wrapper');

    const historyTakingDropdown = document.getElementById('history-taking');
    const historyTakingSubtypesDropdown = document.getElementById('history-taking-subtypes');
    const historyTakingSubtypesWrapper = document.getElementById('history-taking-subtype-wrapper');
    const historyTakingParameters = document.getElementById('history-taking-parameters');
    const historyTakingDetails = document.getElementById('history-taking-details');

    const diagnosisDropdown = document.getElementById('diagnosis');
    const diagnosisSubtypesDropdown = document.getElementById('diagnosis-subtypes');
    const diagnosisSubtypesWrapper = document.getElementById('diagnosis-subtype-wrapper');
    const diagnosisDetails = document.getElementById('diagnosis-details');
    const diagnosisDSM5 = document.getElementById('diagnosis-dsm5');
    const diagnosisICD11 = document.getElementById('diagnosis-icd11');

    let conditionsData = {};
    let drugsData = {};
    let mseData = {};
    let historyTakingData = {};
    let diagnosisData = {};

    // Function to toggle visibility
    function toggleDropdownVisibility(dropdownWrapper, detailsBox) {
        const dropdown = dropdownWrapper.querySelector('select');
        const icon = dropdownWrapper.querySelector('.dropdown-icon');
        if (dropdown.style.display === 'none' || dropdown.style.display === '') {
            dropdown.style.display = 'block';
            icon.textContent = '▲';
        } else {
            dropdown.style.display = 'none';
            icon.textContent = '▼';
            if (detailsBox) {
                detailsBox.style.display = 'none';
            }
            // Additional check for MSE subtypes wrapper
            if (dropdownWrapper.id === 'mse-categories-wrapper') {
                mseSubtypesWrapper.style.display = 'none';
                mseDetails.style.display = 'none';
            }
        }
    }

    // Fetch conditions data and populate the dropdown
    fetch('/api/conditions')
        .then(response => response.json())
        .then(data => {
            conditionsData = data;
            for (const key in data) {
                const option = document.createElement('option');
                option.value = key;
                option.textContent = key;
                conditionsDropdown.appendChild(option);
            }
        })
        .catch(error => console.error('Error fetching conditions:', error));

    // Fetch drugs data and populate the dropdown
    fetch('/api/drugs')
        .then(response => response.json())
        .then(data => {
            drugsData = data;
            for (const key in data) {
                const option = document.createElement('option');
                option.value = key;
                option.textContent = key;
                drugCategoriesDropdown.appendChild(option);
            }
        })
        .catch(error => console.error('Error fetching drugs:', error));

    // Fetch MSE data and populate the dropdown
    fetch('/api/mse')
        .then(response => response.json())
        .then(data => {
            mseData = data.MentalStateExamination.steps;
            for (const key in mseData) {
                const step = mseData[key];
                const option = document.createElement('option');
                option.value = step.name;
                option.textContent = step.name;
                mseCategoriesDropdown.appendChild(option);
            }
        })
        .catch(error => console.error('Error fetching mse:', error));

    // Fetch history taking data and populate the dropdown
    fetch('/api/historyTaking')
        .then(response => response.json())
        .then(data => {
            historyTakingData = data.ClinicalAssessment.sections;
            for (const key in historyTakingData) {
                const section = historyTakingData[key];
                const option = document.createElement('option');
                option.value = section.name;
                option.textContent = section.name;
                historyTakingDropdown.appendChild(option);
            }
        })
        .catch(error => console.error('Error fetching history taking:', error));

    // Fetch diagnosis data and populate the dropdown
    fetch('/api/diagnosis')
        .then(response => response.json())
        .then(data => {
            diagnosisData = data;
            for (const key in data) {
                const option = document.createElement('option');
                option.value = key;
                option.textContent = key;
                diagnosisDropdown.appendChild(option);
            }
        })
        .catch(error => console.error('Error fetching diagnosis:', error));

    // Handle condition selection and populate subtypes
    conditionsDropdown.addEventListener('change', function() {
        const selectedCondition = conditionsDropdown.value;
        conditionSubtypesDropdown.innerHTML = ''; // Clear previous options
        conditionExplanation.textContent = '';
        conditionMedications.textContent = '';
        conditionDosage.textContent = '';
        conditionDetails.style.display = 'none';

        if (selectedCondition && conditionsData[selectedCondition]) {
            const subtypes = conditionsData[selectedCondition];
            for (const subtype in subtypes) {
                const option = document.createElement('option');
                option.value = subtype;
                option.textContent = subtype;
                conditionSubtypesDropdown.appendChild(option);
            }
            conditionSubtypesWrapper.style.display = 'block';
        } else {
            conditionSubtypesWrapper.style.display = 'none';
        }
    });

    // Handle condition subtype selection and display details
    conditionSubtypesDropdown.addEventListener('change', function() {
        const selectedCondition = conditionsDropdown.value;
        const selectedSubtype = conditionSubtypesDropdown.value;

        if (selectedCondition && selectedSubtype && conditionsData[selectedCondition][selectedSubtype]) {
            const details = conditionsData[selectedCondition][selectedSubtype];
            conditionExplanation.textContent = `Explanation: ${details.Explanation}`;
            conditionMedications.textContent = `Medications: ${details.Medications}`;
            conditionDosage.textContent = `Dosage: ${details.Dosage}`;
            conditionDetails.style.display = 'block';
        } else {
            conditionDetails.style.display = 'none';
        }
    });

    // Handle drug category selection and populate subtypes
    drugCategoriesDropdown.addEventListener('change', function() {
        const selectedDrugCategory = drugCategoriesDropdown.value;
        drugSubtypesDropdown.innerHTML = ''; // Clear previous options
        drugName.textContent = '';
        drugCondition.textContent = '';
        drugDosage.textContent = '';
        drugSideEffects.textContent = '';
        drugDetails.style.display = 'none';

        if (selectedDrugCategory && drugsData[selectedDrugCategory]) {
            const subtypes = drugsData[selectedDrugCategory];
            for (const subtype in subtypes) {
                const option = document.createElement('option');
                option.value = subtype;
                option.textContent = subtype;
                drugSubtypesDropdown.appendChild(option);
            }
            drugSubtypesWrapper.style.display = 'block';
        } else {
            drugSubtypesWrapper.style.display = 'none';
        }
    });

    // Handle drug subtype selection and display details
    drugSubtypesDropdown.addEventListener('change', function() {
        const selectedDrugCategory = drugCategoriesDropdown.value;
        const selectedSubtype = drugSubtypesDropdown.value;

        if (selectedDrugCategory && selectedSubtype && drugsData[selectedDrugCategory][selectedSubtype]) {
            // Iterate through the array of drug details
            const detailsArray = drugsData[selectedDrugCategory][selectedSubtype];
            let detailsHtml = '';
            detailsArray.forEach(details => {
                detailsHtml += `
                    <p><strong>Name:</strong> ${details.name}</p>
                    <p><strong>Condition:</strong> ${details.condition}</p>
                    <p><strong>Dosage:</strong> ${details.dosage}</p>
                    <p><strong>Side Effects:</strong> ${details.sideEffects}</p>
                    <hr>
                `;
            });
            drugDetails.innerHTML = detailsHtml;
            drugDetails.style.display = 'block';
        } else {
            drugDetails.style.display = 'none';
        }
    });

    // Handle MSE category selection and display details
    mseCategoriesDropdown.addEventListener('change', function() {
        const selectedMseCategory = mseCategoriesDropdown.value;
        mseParameters.innerHTML = ''; // Clear previous parameters
        mseDetails.style.display = 'none';

        const selectedStep = mseData.find(step => step.name === selectedMseCategory);

        if (selectedStep && selectedStep.parameters) {
            let parametersHtml = '';
            selectedStep.parameters.forEach(parameter => {
                for (const key in parameter) {
                    parametersHtml += `<p><strong>${key}:</strong> ${parameter[key]}</p>`;
                }
            });
            mseParameters.innerHTML = parametersHtml;
            mseDetails.style.display = 'block';
        } else {
            mseDetails.style.display = 'none';
        }
    });

    // Handle history taking selection and populate subtypes
    historyTakingDropdown.addEventListener('change', function() {
        const selectedHistoryTaking = historyTakingDropdown.value;
        historyTakingSubtypesDropdown.innerHTML = ''; // Clear previous options
        historyTakingParameters.innerHTML = ''; // Clear previous parameters
        historyTakingDetails.style.display = 'none';

        const selectedSection = historyTakingData.find(section => section.name === selectedHistoryTaking);

        if (selectedSection && selectedSection.subtypes) {
            for (const subtype in selectedSection.subtypes) {
                const option = document.createElement('option');
                option.value = subtype;
                option.textContent = subtype;
                historyTakingSubtypesDropdown.appendChild(option);
            }
            historyTakingSubtypesWrapper.style.display = 'block';
        } else {
            historyTakingSubtypesWrapper.style.display = 'none';
        }
    });

    // Handle history taking subtype selection and display details
    historyTakingSubtypesDropdown.addEventListener('change', function() {
        const selectedHistoryTaking = historyTakingDropdown.value;
        const selectedSubtype = historyTakingSubtypesDropdown.value;

        const selectedSection = historyTakingData.find(section => section.name === selectedHistoryTaking);

        if (selectedSection && selectedSection.subtypes && selectedSection.subtypes[selectedSubtype]) {
            const parameters = selectedSection.subtypes[selectedSubtype].parameters;
            let parametersHtml = '';
            parameters.forEach(parameter => {
                for (const key in parameter) {
                    parametersHtml += `<p><strong>${key}:</strong> ${parameter[key]}</p>`;
                }
            });
            historyTakingParameters.innerHTML = parametersHtml;
            historyTakingDetails.style.display = 'block';
        } else {
            historyTakingDetails.style.display = 'none';
        }
    });

    // Handle diagnosis type selection and populate subtypes
    diagnosisDropdown.addEventListener('change', function() {
        const selectedDiagnosis = diagnosisDropdown.value;
        diagnosisSubtypesDropdown.innerHTML = ''; // Clear previous options
        diagnosisDSM5.textContent = '';
        diagnosisICD11.textContent = '';
        diagnosisDetails.style.display = 'none';

        if (selectedDiagnosis && diagnosisData[selectedDiagnosis]) {
            const subtypes = diagnosisData[selectedDiagnosis];
            for (const subtype in subtypes) {
                const option = document.createElement('option');
                option.value = subtype;
                option.textContent = subtype;
                diagnosisSubtypesDropdown.appendChild(option);
            }
            diagnosisSubtypesWrapper.style.display = 'block';
        } else {
            diagnosisSubtypesWrapper.style.display = 'none';
        }
    });

    // Handle diagnosis subtype selection and display details
    diagnosisSubtypesDropdown.addEventListener('change', function() {
        const selectedDiagnosis = diagnosisDropdown.value;
        const selectedSubtype = diagnosisSubtypesDropdown.value;

        if (selectedDiagnosis && selectedSubtype && diagnosisData[selectedDiagnosis][selectedSubtype]) {
            const details = diagnosisData[selectedDiagnosis][selectedSubtype];
            diagnosisDSM5.textContent = `DSM-5: ${details['DSM-5']}`;
            diagnosisICD11.textContent = `ICD-11: ${details['ICD-11']}`;
            diagnosisDetails.style.display = 'block';
        } else {
            diagnosisDetails.style.display = 'none';
        }
    });

    // Add event listeners for dropdown wrappers to handle open/close functionality
    document.querySelectorAll('.dropdown-wrapper').forEach(wrapper => {
        const label = wrapper.querySelector('label');
        label.addEventListener('click', function() {
            const detailsBox = wrapper.nextElementSibling;
            toggleDropdownVisibility(wrapper, detailsBox);
        });
    });
});