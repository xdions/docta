const drugs ={
    "Antidepressants": {
      "SSRIs": [
        {
          "name": "Citalopram (Celexa)",
          "condition": "Depression, anxiety disorders, obsessive-compulsive disorder",
          "dosage": "20-40 mg/day",
          "sideEffects": "Diarrhea, agitation, headache, nausea, vomiting, insomnia, drowsiness, reduced sex drive"
        },
        {
          "name": "Escitalopram (Lexapro)",
          "condition": "Depression, generalized anxiety disorder",
          "dosage": "10-20 mg/day",
          "sideEffects": "Diarrhea, agitation, headache, nausea, vomiting, insomnia, drowsiness, reduced sex drive"
        },
        {
          "name": "Fluoxetine (Prozac)",
          "condition": "Depression, obsessive-compulsive disorder, panic disorder, bulimia nervosa",
          "dosage": "20-60 mg/day",
          "sideEffects": "Diarrhea, agitation, headache, nausea, vomiting, insomnia, drowsiness, reduced sex drive"
        },
        {
          "name": "Fluvoxamine (Luvox)",
          "condition": "Obsessive-compulsive disorder",
          "dosage": "100-300 mg/day",
          "sideEffects": "Diarrhea, agitation, headache, nausea, vomiting, insomnia, drowsiness, reduced sex drive"
        },
        {
          "name": "Paroxetine (Paxil)",
          "condition": "Depression, anxiety disorders, panic disorder, obsessive-compulsive disorder",
          "dosage": "20-50 mg/day",
          "sideEffects": "Diarrhea, agitation, headache, nausea, vomiting, insomnia, drowsiness, reduced sex drive"
        },
        {
          "name": "Sertraline (Zoloft)",
          "condition": "Depression, anxiety disorders, obsessive-compulsive disorder, post-traumatic stress disorder",
          "dosage": "50-200 mg/day",
          "sideEffects": "Diarrhea, agitation, headache, nausea, vomiting, insomnia, drowsiness, reduced sex drive"
        }
      ],
      "SNRIs": [
        {
          "name": "Desvenlafaxine (Pristiq)",
          "condition": "Depression",
          "dosage": "50-200 mg/day",
          "sideEffects": "Nausea, sweating, dry mouth, dizziness, headache"
        },
        {
          "name": "Duloxetine (Cymbalta)",
          "condition": "Depression, anxiety disorders, neuropathic pain",
          "dosage": "60-120 mg/day",
          "sideEffects": "Nausea, sweating, dry mouth, dizziness, headache"
        },
        {
          "name": "Levomilnacipran (Fetzima)",
          "condition": "Depression",
          "dosage": "40-120 mg/day",
          "sideEffects": "Nausea, sweating, dry mouth, dizziness, headache"
        },
        {
          "name": "Milnacipran (Savella)",
          "condition": "Fibromyalgia",
          "dosage": "25-100 mg/day",
          "sideEffects": "Nausea, sweating, dry mouth, dizziness, headache"
        },
        {
          "name": "Venlafaxine (Effexor)",
          "condition": "Depression, anxiety disorders",
          "dosage": "75-225 mg/day",
          "sideEffects": "Nausea, sweating, dry mouth, dizziness, headache"
        }
      ],
      "Atypical Antidepressants": [
        {
          "name": "Bupropion (Wellbutrin)",
          "condition": "Depression, seasonal affective disorder",
          "dosage": "150-450 mg/day",
          "sideEffects": "Dry mouth, dizziness, lightheadedness, nausea, weight gain"
        },
        {
          "name": "Mirtazapine (Remeron)",
          "condition": "Depression",
          "dosage": "15-45 mg/day",
          "sideEffects": "Dry mouth, dizziness, lightheadedness, nausea, weight gain"
        }
      ],
      "Serotonin Modulators": [
        {
          "name": "Nefazodone (Merative)",
          "condition": "Depression",
          "dosage": "300-600 mg/day",
          "sideEffects": "Nausea, dizziness, bleeding, sexual problems"
        },
        {
          "name": "Trazodone (Desyrel)",
          "condition": "Depression, insomnia",
          "dosage": "50-400 mg/day",
          "sideEffects": "Nausea, dizziness, bleeding, sexual problems"
        },
        {
          "name": "Vilazodone (Viibryd)",
          "condition": "Depression",
          "dosage": "10-40 mg/day",
          "sideEffects": "Nausea, dizziness, bleeding, sexual problems"
        },
        {
          "name": "Vortioxetine (Trintellix)",
          "condition": "Depression",
          "dosage": "10-20 mg/day",
          "sideEffects": "Nausea, dizziness, bleeding, sexual problems"
        }
      ],
      "Tricyclic Antidepressants (TCAs)": [
        {
          "name": "Amitriptyline (Elavil)",
          "condition": "Depression, neuropathic pain",
          "dosage": "25-150 mg/day",
          "sideEffects": "Constipation, confusion, blurred vision, fast heartbeat, problems peeing, increased appetite, weight gain, dizziness"
        },
        {
          "name": "Amoxapine (Asendin)",
          "condition": "Depression",
          "dosage": "100-300 mg/day",
          "sideEffects": "Constipation, confusion, blurred vision, fast heartbeat, problems peeing, increased appetite, weight gain, dizziness"
        },
        {
          "name": "Clomipramine (Anafranil)",
          "condition": "Obsessive-compulsive disorder",
          "dosage": "25-250 mg/day",
          "sideEffects": "Constipation, confusion, blurred vision, fast heartbeat, problems peeing, increased appetite, weight gain, dizziness"
        },
        {
          "name": "Desipramine (Norpramin)",
          "condition": "Depression",
          "dosage": "50-200 mg/day",
          "sideEffects": "Constipation, confusion, blurred vision, fast heartbeat, problems peeing, increased appetite, weight gain, dizziness"
        },
        {
          "name": "Doxepin (Silenor)",
          "condition": "Insomnia",
          "dosage": "3-6 mg/day",
          "sideEffects": "Constipation, confusion, blurred vision, fast heartbeat, problems peeing, increased appetite, weight gain, dizziness"
        },
        {
          "name": "Imipramine (Tofranil)",
          "condition": "Depression, enuresis",
          "dosage": "50-200 mg/day",
          "sideEffects": "Constipation, confusion, blurred vision, fast heartbeat, problems peeing, increased appetite, weight gain, dizziness"
        },
        {
          "name": "Trimipramine (Surmontil)",
          "condition": "Depression",
          "dosage": "50-200 mg/day",
          "sideEffects": "Constipation, confusion, blurred vision, fast heartbeat, problems peeing, increased appetite, weight gain, dizziness"
        }
      ],
      "NMDA Antagonists": [
        {
          "name": "Esketamine (Spravato)",
          "condition": "Treatment-resistant depression",
          "dosage": "56-84 mg intranasal",
          "sideEffects": "Blurred vision, confusion, dizziness, anxiety, pounding in the ear, headache, drowsiness, lightheadedness"
        },
        {
          "name": "Dextromethorphan/Bupropion",
          "condition": "Treatment-resistant depression",
          "dosage": "210 mg/day",
          "sideEffects": "Dizziness, nausea, dry mouth, decreased appetite, anxiety"
        }
      ],
      "MAOIs (Monoamine Oxidase Inhibitors)": [
        {
          "name": "Isocarboxazid (Marplan)",
          "condition": "Depression",
          "dosage": "10-60 mg/day",
          "sideEffects": "Dry mouth, nausea, diarrhea, constipation, drowsiness, insomnia, dizziness, lightheadedness"
        },
        {
          "name": "Phenelzine (Nardil)",
          "condition": "Depression",
          "dosage": "15-60 mg/day",
          "sideEffects": "Dry mouth, nausea, diarrhea, constipation, drowsiness, insomnia, dizziness, lightheadedness"
        },
        {
          "name": "Tranylcypromine (Parnate)",
          "condition": "Depression",
          "dosage": "10-60 mg/day",
          "sideEffects": "Dry mouth, nausea, diarrhea, constipation, drowsiness, insomnia, dizziness, lightheadedness"
        }
      ]
    },
    "Antipsychotics": {
      "Typical (First-Generation)": [
        {
          "name": "Chlorpromazine (Thorazine)",
          "condition": "Schizophrenia, bipolar disorder",
          "dosage": "100-800 mg/day",
          "sideEffects": "Drowsiness, dry mouth, blurred vision, constipation, weight gain"
        },
        {
          "name": "Haloperidol (Haldol)",
          "condition": "Schizophrenia, bipolar disorder",
          "dosage": "2-20 mg/day",
          "sideEffects": "Drowsiness, dry mouth, blurred vision, constipation, weight gain"
        },
        {
          "name": "Perphenazine (Trilafon)",
          "condition": "Schizophrenia, bipolar disorder",
          "dosage": "8-32 mg/day",
          "sideEffects": "Drowsiness, dry mouth, blurred vision, constipation, weight gain"
        },
        {
          "name": "Fluphenazine (Prolixin)",
          "condition": "Schizophrenia, bipolar disorder",
          "dosage": "2-40 mg/day",
          "sideEffects": "Drowsiness, dry mouth, blurred vision, constipation, weight gain"
        },
        {
          "name": "Thioridazine (Mellaril)",
          "condition": "Schizophrenia, bipolar disorder",
          "dosage": "100-800 mg/day",
          "sideEffects": "Drowsiness, dry mouth, blurred vision, constipation, weight gain"
        },
        {
          "name": "Trifluoperazine (Stelazine)",
          "condition": "Schizophrenia, bipolar disorder",
          "dosage": "5-40 mg/day",
          "sideEffects": "Drowsiness, dry mouth, blurred vision, constipation, weight gain"
        }
      ],
      "Atypical (Second-Generation)": [
        {
          "name": "Aripiprazole (Abilify)",
          "condition": "Schizophrenia, bipolar disorder, depression",
          "dosage": "10-30 mg/day",
          "sideEffects": "Weight gain, dizziness, restlessness, insomnia, nausea"
        },
        {
          "name": "Olanzapine (Zyprexa)",
          "condition": "Schizophrenia, bipolar disorder, depression",
          "dosage": "5-20 mg/day",
          "sideEffects": "Weight gain, dizziness, restlessness, insomnia, nausea"
        },
        {
          "name": "Quetiapine (Seroquel)",
          "condition": "Schizophrenia, bipolar disorder, depression",
          "dosage": "150-800 mg/day",
          "sideEffects": "Weight gain, dizziness, restlessness, insomnia, nausea"
        },
        {
          "name": "Clozapine (Clozaril)",
          "condition": "Treatment-resistant schizophrenia",
          "dosage": "12.5-900 mg/day",
          "sideEffects": "Seizures, weight gain, constipation, dizziness"
        },
        {
          "name": "Iloperidone (Fanapt)",
          "condition": "Schizophrenia",
          "dosage": "1-12 mg/day",
          "sideEffects": "Dizziness, dry mouth, weight gain, constipation"
        },
        {
          "name": "Lurasidone (Latuda)",
          "condition": "Schizophrenia, bipolar disorder",
          "dosage": "40-160 mg/day",
          "sideEffects": "Dizziness, dry mouth, weight gain, constipation"
        },
        {
          "name": "Paliperidone (Invega)",
          "condition": "Schizophrenia, schizoaffective disorder",
          "dosage": "3-15 mg/day",
          "sideEffects": "Dizziness, dry mouth, weight gain, constipation"
        },
        {
          "name": "Risperidone (Risperdal)",
          "condition": "Schizophrenia, bipolar disorder",
          "dosage": "1-16 mg/day",
          "sideEffects": "Dizziness, dry mouth, weight gain, constipation"
        },
        {
          "name": "Ziprasidone (Geodon)",
          "condition": "Schizophrenia, bipolar disorder",
          "dosage": "20-160 mg/day",
          "sideEffects": "Dizziness, dry mouth, weight gain, constipation"
        }
      ]
    },
    "Mood Stabilizers": {
      "Lithium Compounds": [
        {
          "name": "Lithium Carbonate",
          "condition": "Bipolar disorder",
          "dosage": "600-1800 mg/day",
          "sideEffects": "Tremor, frequent urination, thirst, nausea, vomiting"
        },
        {
          "name": "Lithium Citrate",
          "condition": "Bipolar disorder",
          "dosage": "600-1800 mg/day",
          "sideEffects": "Tremor, frequent urination, thirst, nausea, vomiting"
        }
      ],
      "Anticonvulsants": [
        {
          "name": "Valproate (Depakote)",
          "condition": "Bipolar disorder, epilepsy",
          "dosage": "500-2500 mg/day",
          "sideEffects": "Nausea, vomiting, tremor, hair loss, weight gain"
        },
        {
          "name": "Carbamazepine (Tegretol)",
          "condition": "Bipolar disorder, epilepsy",
          "dosage": "200-1200 mg/day",
          "sideEffects": "Dizziness, drowsiness, nausea, vomiting, blurred vision"
        },
        {
          "name": "Gabapentin (Neurontin)",
          "condition": "Bipolar disorder, epilepsy",
          "dosage": "300-3600 mg/day",
          "sideEffects": "Dizziness, drowsiness, nausea, vomiting, blurred vision"
        },
        {
          "name": "Lamotrigine (Lamictal)",
          "condition": "Bipolar disorder, epilepsy",
          "dosage": "25-500 mg/day",
          "sideEffects": "Dizziness, drowsiness, nausea, vomiting, blurred vision"
        },
        {
          "name": "Oxcarbazepine (Trileptal)",
          "condition": "Bipolar disorder, epilepsy",
          "dosage": "300-2400 mg/day",
          "sideEffects": "Dizziness, drowsiness, nausea, vomiting, blurred vision"
        },
        {
          "name": "Topiramate (Topamax)",
          "condition": "Bipolar disorder, epilepsy",
          "dosage": "50-400 mg/day",
          "sideEffects": "Dizziness, drowsiness, nausea, vomiting, blurred vision"
        }
      ]
    },
    "Anti-anxiety Medications": {
      "Benzodiazepines": [
        {
          "name": "Alprazolam (Xanax)",
          "condition": "Anxiety disorders, panic disorder",
          "dosage": "0.25-4 mg/day",
          "sideEffects": "Drowsiness, dizziness, weakness, memory problems"
        },
        {
          "name": "Clonazepam (Klonopin)",
          "condition": "Anxiety disorders, panic disorder",
          "dosage": "0.5-4 mg/day",
          "sideEffects": "Drowsiness, dizziness, weakness, memory problems"
        },
        {
          "name": "Diazepam (Valium)",
          "condition": "Anxiety disorders, panic disorder",
          "dosage": "2-10 mg/day",
          "sideEffects": "Drowsiness, dizziness, weakness, memory problems"
        },
        {
          "name": "Lorazepam (Ativan)",
          "condition": "Anxiety disorders, panic disorder",
          "dosage": "1-6 mg/day",
          "sideEffects": "Drowsiness, dizziness, weakness, memory problems"
        }
      ],
      "Non-Benzodiazepines": [
        {
          "name": "Buspirone (Buspar)",
          "condition": "Anxiety disorders",
          "dosage": "5-60 mg/day",
          "sideEffects": "Dizziness, headache, nausea, lightheadedness"
        },
        {
          "name": "Hydroxyzine (Atarax)",
          "condition": "Anxiety disorders",
          "dosage": "25-100 mg/day",
          "sideEffects": "Drowsiness, dry mouth, blurred vision, constipation"
        },
        {
          "name": "Propranolol (Inderal)",
          "condition": "Performance anxiety",
          "dosage": "10-80 mg/day",
          "sideEffects": "Fatigue, weakness, dizziness, lightheadedness, nausea"
        },
        {
          "name": "Atenolol (Tenormin)",
          "condition": "Performance anxiety",
          "dosage": "25-100 mg/day",
          "sideEffects": "Fatigue, weakness, dizziness, lightheadedness, nausea"
        }
      ]
    },
    "Stimulants": {
      "Amphetamines": [
        {
          "name": "Adderall",
          "condition": "Attention deficit hyperactivity disorder",
          "dosage": "5-40 mg/day",
          "sideEffects": "Dry mouth, insomnia, weight loss, headache, dizziness"
        },
        {
          "name": "Dexedrine",
          "condition": "Attention deficit hyperactivity disorder",
          "dosage": "5-40 mg/day",
          "sideEffects": "Dry mouth, insomnia, weight loss, headache, dizziness"
        }
      ],
      "Methylphenidates": [
        {
          "name": "Ritalin",
          "condition": "Attention deficit hyperactivity disorder",
          "dosage": "5-60 mg/day",
          "sideEffects": "Dry mouth, insomnia, weight loss, headache, dizziness"
        },
        {
          "name": "Concerta",
          "condition": "Attention deficit hyperactivity disorder",
          "dosage": "18-72 mg/day",
          "sideEffects": "Dry mouth, insomnia, weight loss, headache, dizziness"
        }
      ]
    },
    "Non-stimulants": {
      "Selective Norepinephrine Reuptake Inhibitors (SNRIs)": [
        {
          "name": "Strattera",
          "condition": "Attention deficit hyperactivity disorder",
          "dosage": "25-100 mg/day",
          "sideEffects": "Dry mouth, insomnia, weight loss, headache, dizziness"
        }
      ],
      "Alpha-2 Agonists": [
        {
          "name": "Intuniv",
          "condition": "Attention deficit hyperactivity disorder",
          "dosage": "1-4 mg/day",
          "sideEffects": "Dry mouth, insomnia, weight loss, headache, dizziness"
        }
      ]
    },
    "Sleep Medications": {
      "Non-Benzodiazepine Sedative-Hypnotics": [
        {
          "name": "Ambien",
          "condition": "Insomnia",
          "dosage": "5-10 mg/day",
          "sideEffects": "Drowsiness, dizziness, headache, nausea"
        },
        {
          "name": "Lunesta",
          "condition": "Insomnia",
          "dosage": "1-3 mg/day",
          "sideEffects": "Drowsiness, dizziness, headache, nausea"
        },
        {
          "name": "Sonata",
          "condition": "Insomnia",
          "dosage": "10-20 mg/day",
          "sideEffects": "Drowsiness, dizziness, headache, nausea"
        }
      ],
      "Melatonin Receptor Agonists": [
        {
          "name": "Ramelteon (Rozerem)",
          "condition": "Insomnia",
          "dosage": "8 mg/day",
          "sideEffects": "Dizziness, fatigue, headache, nausea"
        }
      ]
    },
    "Others": {
      "Serotonin Antagonist and Reuptake Inhibitors (SARIs)": [
        {
          "name": "Nefazodone (Serzone)",
          "condition": "Depression",
          "dosage": "300-600 mg/day",
          "sideEffects": "Nausea, dizziness, bleeding, sexual problems"
        }
      ],
      "5-HT3 Receptor Antagonists": [
        {
          "name": "Ondansetron (Zofran)",
          "condition": "Nausea and vomiting",
          "dosage": "4-24 mg/day",
          "sideEffects": "Headache, constipation, dizziness"
        }
      ],
      "Dopamine Agonists": [
        {
          "name": "Pimavanserin (Nuplazid)",
          "condition": "Hallucinations and delusions associated with Parkinson's disease psychosis",
          "dosage": "34 mg/day",
          "sideEffects": "Nausea, constipation, headache, dizziness"
        }
      ],
      "Neurosteroids": [
        {
          "name": "Brexanolone (Zulresso)",
          "condition": "Postpartum depression",
          "dosage": "Intravenous infusion",
          "sideEffects": "Drowsiness, dry mouth, dizziness, nausea"
        }
      ]
    }
  }
  module.exports = drugs;