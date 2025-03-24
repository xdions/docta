const historyTaking = {
  ClinicalAssessment: {
    description: "A systematic approach to collecting patient information for diagnostic purposes.",
    sections: [
      {
        name: "Comprehensive History Taking",
        subtypes: {
          "Identifying Information": {
            parameters: [
              { fullName: "Full name" },
              { age: "Age" },
              { gender: "Gender" },
              { ethnicity: "Ethnicity" },
              { occupation: "Occupation" },
              { maritalStatus: "Marital status" },
              { contactInformation: "Contact information (phone, address)" },
              { sourceOfHistory: "Source of history (patient, family, caregiver) and reliability of the informant" }
            ]
          },
          "Chief Complaint (CC)": {
            parameters: [
              { primaryReason: "The primary reason the patient is seeking care, stated in their own words" },
              { duration: "Duration of the complaint" }
            ]
          },
          "History of Present Illness (HPI)": {
            parameters: [
              { onset: "When did the symptoms start? Was it sudden or gradual?" },
              { provocationPalliation: "What makes the symptoms worse or better?" },
              { quality: "How would you describe the symptom (e.g., sharp, dull, burning)?" },
              { radiation: "Does the symptom spread to other areas?" },
              { severity: "On a scale of 1-10, how severe is it?" },
              { timing: "Is it constant, intermittent, or worsening over time?" },
              { associatedSymptoms: "Associated symptoms (e.g., nausea with chest pain)" },
              { previousTreatments: "Previous treatments and their effectiveness" },
              { recentChanges: "Any recent changes in symptoms" }
            ]
          },
          "Past Medical History (PMH)": {
            parameters: [
              { chronicIllnesses: "Chronic illnesses (e.g., diabetes, hypertension, asthma)" },
              { hospitalizationsSurgeries: "Hospitalizations, surgeries, or major illnesses" },
              { allergies: "Allergies (drugs, food, environmental)" },
              { immunizationHistory: "Immunization history (e.g., flu shot, COVID-19 vaccine)" },
              { transfusionsReactions: "Transfusions or reactions" },
              { psychiatricHistory: "Psychiatric history (e.g., depression, anxiety)" },
              { obstetricGynecologicalHistory: "Obstetric and gynecological history (if applicable)" }
            ]
          },
          "Medications": {
            parameters: [
              { currentMedications: "Current medications (prescription, over-the-counter, supplements)" },
              { dosageFrequency: "Dosage, frequency, and adherence" },
              { recentChanges: "Recent changes or discontinuations" },
              { herbalRemedies: "Use of herbal or alternative remedies" }
            ]
          },
          "Family History (FH)": {
            parameters: [
              { firstDegreeRelatives: "Health conditions in first-degree relatives" },
              { secondDegreeRelatives: "Health conditions in second-degree relatives" },
              { ageCauseOfDeath: "Age and cause of death for deceased relatives" }
            ]
          },
          "Social History (SH)": {
            parameters: [
              { livingSituation: "Living situation (alone, with family, homeless)" },
              { occupationEnvironment: "Occupation and work environment (e.g., exposure to toxins, stress)" },
              { substanceUse: "Substance use (alcohol, tobacco, recreational drugs)" },
              { sexualHistory: "Sexual history (if relevant)" },
              { dietExercise: "Diet and exercise habits" },
              { sleepPatterns: "Sleep patterns" },
              { travelHistory: "Travel history (if relevant to potential exposures)" },
              { supportSystems: "Support systems and stressors (e.g., financial, relationship issues)" },
              { legalIssues: "Legal issues (e.g., incarceration)" }
            ]
          },
          "Psychiatric History": {
            parameters: [
              { previousDiagnoses: "Previous psychiatric diagnoses (e.g., depression, bipolar disorder)" },
              { therapyCounseling: "History of therapy or counseling" },
              { hospitalizations: "Hospitalizations for mental health" },
              { suicidalBehavior: "Suicidal or self-harm behavior (ideation, plan, intent, attempts)" },
              { traumaAbuseHistory: "Trauma or abuse history (physical, emotional, sexual)" },
              { substanceImpact: "Substance use and its impact on mental health" }
            ]
          },
          "Review of Systems (ROS)": {
            parameters: [
              { general: "Weight loss, fatigue, fever, night sweats" },
              { heent: "Headache, vision changes, sore throat, hearing loss" },
              { cardiovascular: "Chest pain, palpitations, edema" },
              { respiratory: "Cough, shortness of breath, wheezing" },
              { gastrointestinal: "Nausea, vomiting, diarrhea, constipation" },
              { genitourinary: "Dysuria, frequency, hematuria" },
              { musculoskeletal: "Joint pain, weakness, stiffness" },
              { neurological: "Dizziness, seizures, numbness, tingling" },
              { endocrine: "Heat/cold intolerance, polyuria, polydipsia" },
              { psychiatric: "Mood changes, anxiety, hallucinations" },
              { skin: "Rashes, itching, lesions" },
              { hematologic: "Easy bruising, bleeding" },
              { lymphatic: "Swollen lymph nodes" }
            ]
          }
        }
      },
      {
        name: "Vital Signs",
        parameters: [
          {
            name: "Blood Pressure (BP)",
            normalRange: "<120/80 mmHg",
            elevatedRange: "120-129/<80 mmHg",
            hypertensionRange: "≥130/80 mmHg",
            hypotensionRange: "<90/60 mmHg"
          },
          {
            name: "Heart Rate (Pulse)",
            normalRange: "60-100 beats per minute",
            tachycardiaRange: ">100 beats per minute",
            bradycardiaRange: "<60 beats per minute",
            rhythm: "Regular or irregular"
          },
          {
            name: "Respiratory Rate (RR)",
            normalRange: "12-20 breaths per minute",
            tachypneaRange: ">20 breaths per minute",
            bradypneaRange: "<12 breaths per minute"
          },
          {
            name: "Temperature",
            normalRange: "97°F (36.1°C) to 99°F (37.2°C)",
            feverRange: ">100.4°F (38°C)",
            hypothermiaRange: "<95°F (35°C)"
          },
          {
            name: "Oxygen Saturation (SpO2)",
            normalRange: "95-100% on room air",
            hypoxiaRange: "<90%"
          },
          {
            name: "Pain Level",
            assessment: "Assessed using a pain scale (e.g., 0-10)",
            parameters: [
              { location: "Location of pain" },
              { quality: "Quality of pain" },
              { intensity: "Intensity of pain" }
            ]
          },
          {
            name: "Weight and Height",
            parameters: [
              { weight: "Weight in kilograms" },
              { height: "Height in meters" },
              { bmi: "Body Mass Index (BMI) calculated as weight (kg) / height (m²)" },
              { normalBmiRange: "Normal BMI: 18.5-24.9" },
              { underweightBmiRange: "Underweight: <18.5" },
              { overweightBmiRange: "Overweight: 25-29.9" },
              { obeseBmiRange: "Obese: ≥30" }
            ]
          },
          {
            name: "Capillary Refill Time",
            normalRange: "<2 seconds",
            delayedRange: ">2 seconds (may indicate poor perfusion)"
          },
          {
            name: "Additional Measurements",
            parameters: [
              { bloodGlucoseLevel: "Blood glucose level (for diabetic patients)" },
              { peakExpiratoryFlowRate: "Peak expiratory flow rate (for asthma patients)" },
              { glasgowComaScale: "Glasgow Coma Scale (GCS) for neurological assessment" }
            ]
          }
        ]
      }
    ]
  }
};

module.exports = historyTaking;