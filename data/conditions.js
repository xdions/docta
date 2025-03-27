const conditions ={
  "Neurodevelopmental Disorders": {
      "Intellectual Disability": {
        "Explanation": "Significant limitations in intellectual functioning and adaptive behavior.",
        "Medications": "Behavioral therapies and educational support. Medications for co-occurring conditions like ADHD or anxiety.",
        "Dosage": "Varies based on specific co-occurring conditions."
      },
      "Global Developmental Delay": {
        "Explanation": "Delay in multiple developmental domains in children under five.",
        "Medications": "Focus is on therapies and support.",
        "Dosage": "Not applicable."
      },
      "Communication Disorders": {
        "Language Disorder": {
          "Explanation": "Challenges in communication skills.",
          "Medications": "Speech therapy and communication training.",
          "Dosage": "Not applicable."
        },
        "Speech Sound Disorder": {
          "Explanation": "Challenges in communication skills.",
          "Medications": "Speech therapy and communication training.",
          "Dosage": "Not applicable."
        },
        "Childhood-Onset Fluency Disorder (Stuttering)": {
          "Explanation": "Challenges in communication skills.",
          "Medications": "Speech therapy and communication training.",
          "Dosage": "Not applicable."
        },
        "Social (Pragmatic) Communication Disorder": {
          "Explanation": "Challenges in communication skills.",
          "Medications": "Speech therapy and communication training.",
          "Dosage": "Not applicable."
        }
      },
      "Autism Spectrum Disorder (ASD)": {
        "Explanation": "A range of conditions characterized by challenges with social skills, repetitive behaviors, and communication.",
        "Medications": "Risperidone or aripiprazole for irritability.",
        "Dosage": "Risperidone (0.5-3 mg/day), Aripiprazole (2-15 mg/day)."
      },
      "Attention-Deficit/Hyperactivity Disorder (ADHD)": {
        "Explanation": "Difficulty staying focused and paying attention.",
        "Medications": "Methylphenidate, amphetamines.",
        "Dosage": "Methylphenidate (5-60 mg/day), Amphetamines (5-40 mg/day)."
      }
    },
    "Schizophrenia Spectrum & Psychotic Disorders": {
      "Schizophrenia": {
        "Explanation": "Severe mental disorder with symptoms like hearing voices or believing in false ideas.",
        "Medications": "First-generation (typical) and second-generation (atypical) antipsychotics.",
        "Dosage": "Haloperidol (2-20 mg/day), Aripiprazole (10-30 mg/day)."
      },
      "Schizoaffective Disorder": {
        "Explanation": "Combination of schizophrenia and mood disorder symptoms.",
        "Medications": "Antipsychotics and mood stabilizers.",
        "Dosage": "Varies based on specific medications."
      },
      "Schizophreniform Disorder": {
        "Explanation": "Schizophrenia-like symptoms lasting less than six months.",
        "Medications": "Antipsychotics.",
        "Dosage": "Varies based on specific medications."
      },
      "Brief Psychotic Disorder": {
        "Explanation": "Short-term psychotic episode triggered by severe stress.",
        "Medications": "Antipsychotics.",
        "Dosage": "Varies based on specific medications."
      },
      "Delusional Disorder": {
        "Explanation": "Persistent delusions without other psychotic symptoms.",
        "Medications": "Antipsychotics.",
        "Dosage": "Varies based on specific medications."
      },
      "Catatonia": {
        "Explanation": "Severe motor disturbances, often associated with other mental disorders.",
        "Medications": "Benzodiazepines (lorazepam).",
        "Dosage": "Lorazepam (1-4 mg/day)."
      }
    },
    "Bipolar & Related Disorders": {
      "Bipolar I Disorder": {
        "Explanation": "Manic episodes with or without depressive episodes.",
        "Medications": "Lithium, valproate, lamotrigine.",
        "Dosage": "Lithium (600-1800 mg/day), Valproate (500-2500 mg/day)."
      },
      "Bipolar II Disorder": {
        "Explanation": "Hypomanic episodes with depressive episodes.",
        "Medications": "Same as Bipolar I.",
        "Dosage": "Same as Bipolar I."
      },
      "Cyclothymic Disorder": {
        "Explanation": "Chronic mood instability with hypomanic and depressive symptoms.",
        "Medications": "Mood stabilizers.",
        "Dosage": "Varies based on specific medications."
      }
    },
    "Depressive Disorders": {
      "Major Depressive Disorder (MDD)": {
        "Explanation": "Severe and persistent low mood.",
        "Medications": "SSRIs (sertraline, fluoxetine), SNRIs (venlafaxine).",
        "Dosage": "Sertraline (50-200 mg/day), Fluoxetine (20-80 mg/day)."
      },
      "Persistent Depressive Disorder (Dysthymia)": {
        "Explanation": "Chronic low mood lasting two years or more.",
        "Medications": "Same as MDD.",
        "Dosage": "Same as MDD."
      },
      "Premenstrual Dysphoric Disorder (PMDD)": {
        "Explanation": "Severe mood and physical symptoms before menstruation.",
        "Medications": "SSRIs.",
        "Dosage": "Sertraline (50-200 mg/day)."
      },
      "Disruptive Mood Dysregulation Disorder (DMDD)": {
        "Explanation": "Severe and recurrent temper outbursts in children.",
        "Medications": "Antidepressants, mood stabilizers.",
        "Dosage": "Varies based on specific medications."
      }
    },
    "Anxiety Disorders": {
      "Generalized Anxiety Disorder (GAD)": {
        "Explanation": "Excessive and persistent worry.",
        "Medications": "SSRIs, benzodiazepines (alprazolam).",
        "Dosage": "Sertraline (50-200 mg/day), Alprazolam (0.25-4 mg/day)."
      },
      "Panic Disorder": {
        "Explanation": "Recurrent panic attacks.",
        "Medications": "Same as GAD.",
        "Dosage": "Same as GAD."
      },
      "Agoraphobia": {
        "Explanation": "Fear and avoidance of places or situations that might cause panic.",
        "Medications": "Same as GAD.",
        "Dosage": "Same as GAD."
      },
      "Social Anxiety Disorder": {
        "Explanation": "Fear of social situations.",
        "Medications": "Same as GAD.",
        "Dosage": "Same as GAD."
      },
      "Specific Phobias": {
        "Explanation": "Irrational fear of specific objects or situations.",
        "Medications": "Same as GAD.",
        "Dosage": "Same as GAD."
      },
      "Separation Anxiety Disorder": {
        "Explanation": "Fear of separation from attachment figures.",
        "Medications": "Same as GAD.",
        "Dosage": "Same as GAD."
      },
      "Selective Mutism": {
        "Explanation": "Failure to speak in certain social situations.",
        "Medications": "Same as GAD.",
        "Dosage": "Same as GAD."
      }
    },
    "Obsessive-Compulsive & Related Disorders": {
      "Obsessive-Compulsive Disorder (OCD)": {
        "Explanation": "Recurrent unwanted thoughts and urges to perform specific actions.",
        "Medications": "SSRIs (fluoxetine, sertraline).",
        "Dosage": "Fluoxetine (20-80 mg/day), Sertraline (50-200 mg/day)."
      },
      "Body Dysmorphic Disorder": {
        "Explanation": "Preoccupation with perceived flaws in appearance.",
        "Medications": "SSRIs.",
        "Dosage": "Sertraline (50-200 mg/day)."
      },
      "Hoarding Disorder": {
        "Explanation": "Difficulty discarding possessions.",
        "Medications": "SSRIs.",
        "Dosage": "Sertraline (50-200 mg/day)."
      },
      "Trichotillomania (Hair-Pulling Disorder)": {
        "Explanation": "Recurrent hair pulling.",
        "Medications": "SSRIs.",
        "Dosage": "Sertraline (50-200 mg/day)."
      },
      "Excoriation Disorder (Skin-Picking Disorder)": {
        "Explanation": "Recurrent skin picking.",
        "Medications": "SSRIs.",
        "Dosage": "Sertraline (50-200 mg/day)."
      }
    },
    "Trauma- & Stressor-Related Disorders": {
      "Post-Traumatic Stress Disorder (PTSD)": {
        "Explanation": "Distressing memories, avoidance, and heightened arousal after a traumatic event.",
        "Medications": "SSRIs, prazosin.",
        "Dosage": "Sertraline (50-200 mg/day), Prazosin (1-10 mg/day)."
      },
      "Acute Stress Disorder": {
        "Explanation": "Severe anxiety and dissociation within one month of trauma.",
        "Medications": "SSRIs.",
        "Dosage": "Sertraline (50-200 mg/day)."
      },
      "Adjustment Disorders": {
        "Explanation": "Emotional or behavioral symptoms in response to stressors.",
        "Medications": "SSRIs.",
        "Dosage": "Sertraline (50-200 mg/day)."
      },
      "Reactive Attachment Disorder": {
        "Explanation": "Impaired attachment in children.",
        "Medications": "Psychotherapy is primary treatment; medications for co-occurring conditions.",
        "Dosage": "Not applicable."
      },
      "Disinhibited Social Engagement Disorder": {
        "Explanation": "Excessive familiarity with strangers in children.",
        "Medications": "Psychotherapy is primary treatment; medications for co-occurring conditions.",
        "Dosage": "Not applicable."
      }
    },
    "Dissociative Disorders": {
      "Dissociative Identity Disorder (DID)": {
        "Explanation": "Presence of multiple distinct identities.",
        "Medications": "Psychotherapy is primary treatment; medications for co-occurring conditions.",
        "Dosage": "Not applicable."
      },
      "Dissociative Amnesia": {
        "Explanation": "Memory loss due to dissociation.",
        "Medications": "Psychotherapy is primary treatment; medications for co-occurring conditions.",
        "Dosage": "Not applicable."
      },
      "Depersonalization/Derealization Disorder": {
        "Explanation": "Feeling detached from oneself or reality.",
        "Medications": "Psychotherapy is primary treatment; medications for co-occurring conditions.",
        "Dosage": "Not applicable."
      }
    },
    "Somatic Symptom & Related Disorders": {
      "Somatic Symptom Disorder": {
        "Explanation": "Significant somatic symptoms with excessive thoughts or behaviors.",
        "Medications": "Antidepressants (SSRIs).",
        "Dosage": "Sertraline (50-200 mg/day)."
      },
      "Illness Anxiety Disorder": {
        "Explanation": "Preoccupation with having a serious illness.",
        "Medications": "Antidepressants (SSRIs).",
        "Dosage": "Sertraline (50-200 mg/day)."
      },
      "Conversion Disorder": {
        "Explanation": "Neurological symptoms without a medical explanation.",
        "Medications": "Psychotherapy is primary treatment; medications for co-occurring conditions.",
        "Dosage": "Not applicable."
      },
      "Factitious Disorder": {
        "Explanation": "Feigning or producing symptoms for attention.",
        "Medications": "Psychotherapy is primary treatment; medications for co-occurring conditions.",
        "Dosage": "Not applicable."
      }
    },
    "Feeding & Eating Disorders": {
      "Anorexia Nervosa": {
        "Explanation": "Severe restriction of food intake.",
        "Medications": "Fluoxetine.",
        "Dosage": "Fluoxetine (20-60 mg/day)."
      },
      "Bulimia Nervosa": {
        "Explanation": "Binge eating followed by compensatory behaviors.",
        "Medications": "Same as Anorexia.",
        "Dosage": "Same as Anorexia."
      },
      "Binge-Eating Disorder": {
        "Explanation": "Recurrent episodes of binge eating.",
        "Medications": "Lisdexamfetamine.",
        "Dosage": "Lisdexamfetamine (30-70 mg/day)."
      },
      "Avoidant/Restrictive Food Intake Disorder (ARFID)": {
        "Explanation": "Avoidance of food based on sensory characteristics.",
        "Medications": "Psychotherapy is primary treatment; medications for co-occurring conditions.",
        "Dosage": "Not applicable."
      },
      "Pica": {
        "Explanation": "Eating non-food substances.",
        "Medications": "Psychotherapy is primary treatment; medications for co-occurring conditions.",
        "Dosage": "Not applicable."
      },
      "Rumination Disorder": {
        "Explanation": "Repeated regurgitation of food.",
        "Medications": "Psychotherapy is primary treatment; medications for co-occurring conditions.",
        "Dosage": "Not applicable."
      }
    },
    "Sleep-Wake Disorders": {
      "Insomnia Disorder": {
        "Explanation": "Difficulty falling asleep or staying asleep.",
        "Medications": "Zolpidem, eszopiclone.",
        "Dosage": "Zolpidem (5-10 mg), Eszopiclone (1-3 mg)."
      },
      "Hypersomnolence Disorder": {
        "Explanation": "Excessive sleepiness.",
        "Medications": "Modafinil.",
        "Dosage": "Modafinil (100-200 mg/day)."
      },
      "Narcolepsy": {
        "Explanation": "Sudden sleep attacks and excessive daytime sleepiness.",
        "Medications": "Modafinil, sodium oxybate.",
        "Dosage": "Modafinil (100-200 mg/day), Sodium oxybate (6-9 g/day)."
      },
      "Sleep Apnea": {
        "Explanation": "Repeated pauses in breathing during sleep.",
        "Medications": "Continuous Positive Airway Pressure (CPAP) therapy.",
        "Dosage": "Not applicable."
      },
      "Parasomnias": {
        "Nightmares": {
          "Explanation": "Distressing dreams and walking while asleep.",
          "Medications": "Psychotherapy is primary treatment; medications for co-occurring conditions.",
          "Dosage": "Not applicable."
        },
        "Sleepwalking": {
          "Explanation": "Distressing dreams and walking while asleep.",
          "Medications": "Psychotherapy is primary treatment; medications for co-occurring conditions.",
          "Dosage": "Not applicable."
        }
      },
      "Restless Legs Syndrome": {
        "Explanation": "Urge to move legs due to uncomfortable sensations.",
        "Medications": "Pregabalin, ropinirole.",
        "Dosage": "Pregabalin (75-300 mg/day), Ropinirole (0.25-4 mg/day)."
      }
    },
    "Disruptive, Impulse-Control & Conduct Disorders": {
      "Oppositional Defiant Disorder (ODD)": {
        "Explanation": "Argumentative and defiant behavior.",
        "Medications": "Behavioral therapy is primary treatment; medications for co-occurring conditions.",
        "Dosage": "Not applicable."
      },
      "Conduct Disorder": {
        "Explanation": "Persistent pattern of violating others' rights.",
        "Medications": "Behavioral therapy is primary treatment; medications for co-occurring conditions.",
        "Dosage": "Not applicable."
      },
      "Intermittent Explosive Disorder": {
        "Explanation": "Recurrent episodes of impulsive aggression.",
        "Medications": "Antidepressants, mood stabilizers.",
        "Dosage": "Varies based on specific medications."
      },
      "Pyromania": {
        "Explanation": "Deliberate fire-setting.",
        "Medications": "Psychotherapy is primary treatment; medications for co-occurring conditions.",
        "Dosage": "Not applicable."
      },
      "Kleptomania": {
        "Explanation": "Compulsive stealing.",
        "Medications": "Psychotherapy is primary treatment; medications for co-occurring conditions.",
        "Dosage": "Not applicable."
      }
    },
    "Substance-Related & Addictive Disorders": {
      "Substance Use Disorders": {
        "Alcohol Use Disorder": {
          "Explanation": "Dependence on substances leading to negative consequences.",
          "Medications": "Naltrexone for alcohol.",
          "Dosage": "Naltrexone (50 mg/day)."
        },
        "Cannabis Use Disorder": {
          "Explanation": "Dependence on substances leading to negative consequences.",
          "Medications": "Naltrexone for alcohol.",
          "Dosage": "Naltrexone (50 mg/day)."
        },
        "Stimulant Use Disorder": {
          "Explanation": "Dependence on substances leading to negative consequences.",
          "Medications": "Naltrexone for alcohol.",
          "Dosage": "Naltrexone (50 mg/day)."
        },
        "Opioid Use Disorder": {
          "Explanation": "Dependence on substances leading to negative consequences.",
          "Medications": "Naltrexone for alcohol.",
          "Dosage": "Naltrexone (50 mg/day)."
        },
        "Tobacco Use Disorder": {
          "Explanation": "Dependence on substances leading to negative consequences.",
          "Medications": "Naltrexone for alcohol.",
          "Dosage": "Naltrexone (50 mg/day)."
        }
      },
      "Gambling Disorder": {
        "Explanation": "Compulsive gambling.",
        "Medications": "Antidepressants, mood stabilizers.",
        "Dosage": "Varies based on specific medications."
      },
      "Internet Gaming Disorder": {
        "Explanation": "Excessive online gaming.",
        "Medications": "Psychotherapy is primary treatment; medications for co-occurring conditions.",
        "Dosage": "Not applicable."
      }
    },
    "Neurocognitive Disorders": {
      "Delirium": {
        "Explanation": "Sudden confusion and changes in mental state.",
        "Medications": "Haloperidol.",
        "Dosage": "Haloperidol (0.5-2 mg/day)."
      },
      "Dementia": {
        "Alzheimer’s Disease": {
          "Explanation": "Memory loss and cognitive decline.",
          "Medications": "Cholinesterase inhibitors (donepezil).",
          "Dosage": "Donepezil (5-10 mg/day)."
        },
        "Vascular Dementia": {
          "Explanation": "Memory loss and cognitive decline.",
          "Medications": "Cholinesterase inhibitors (donepezil).",
          "Dosage": "Donepezil (5-10 mg/day)."
        },
        "Lewy Body Dementia": {
          "Explanation": "Memory loss and cognitive decline.",
          "Medications": "Cholinesterase inhibitors (donepezil).",
          "Dosage": "Donepezil (5-10 mg/day)."
        },
        "Frontotemporal Dementia": {
          "Explanation": "Memory loss and cognitive decline.",
          "Medications": "Cholinesterase inhibitors (donepezil).",
          "Dosage": "Donepezil (5-10 mg/day)."
        }
      }
    },
    "Personality Disorders": {
      "Cluster A (Odd/Eccentric)": {
        "Paranoid Personality Disorder": {
          "Explanation": "Odd or eccentric behavior.",
          "Medications": "Antipsychotics for severe symptoms.",
          "Dosage": "Varies based on specific medication."
        },
        "Schizoid Personality Disorder": {
          "Explanation": "Odd or eccentric behavior.",
          "Medications": "Antipsychotics for severe symptoms.",
          "Dosage": "Varies based on specific medication."
        },
        "Schizotypal Personality Disorder": {
          "Explanation": "Odd or eccentric behavior.",
          "Medications": "Antipsychotics for severe symptoms.",
          "Dosage": "Varies based on specific medication."
        }
      },
      "Cluster B (Dramatic/Emotional)": {
        "Antisocial Personality Disorder": {
          "Explanation": "Dramatic or emotional behavior.",
          "Medications": "Antidepressants, mood stabilizers.",
          "Dosage": "Varies based on specific medications."
        },
        "Borderline Personality Disorder": {
          "Explanation": "Dramatic or emotional behavior.",
          "Medications": "Antidepressants, mood stabilizers.",
          "Dosage": "Varies based on specific medications."
        },
        "Histrionic Personality Disorder": {
          "Explanation": "Dramatic or emotional behavior.",
          "Medications": "Antidepressants, mood stabilizers.",
          "Dosage": "Varies based on specific medications."
        },
        "Narcissistic Personality Disorder": {
          "Explanation": "Dramatic or emotional behavior.",
          "Medications": "Antidepressants, mood stabilizers.",
          "Dosage": "Varies based on specific medications."
        }
      },
      "Cluster C (Anxious/Fearful)": {
        "Avoidant Personality Disorder": {
          "Explanation": "Anxious or fearful behavior.",
          "Medications": "Antidepressants, anxiety medications.",
          "Dosage": "Varies based on specific medications."
        },
        "Dependent Personality Disorder": {
          "Explanation": "Anxious or fearful behavior.",
          "Medications": "Antidepressants, anxiety medications.",
          "Dosage": "Varies based on specific medications."
        },
        "Obsessive-Compulsive Personality Disorder": {
          "Explanation": "Anxious or fearful behavior.",
          "Medications": "Antidepressants, anxiety medications.",
          "Dosage": "Varies based on specific medications."
        }
      }
    },
    "Paraphilic Disorders": {
      "Voyeuristic Disorder": {
        "Explanation": "Sexual arousal from observing others.",
        "Medications": "SSRIs, anti-androgens.",
        "Dosage": "Sertraline (50-200 mg/day)."
      },
      "Exhibitionistic Disorder": {
        "Explanation": "Sexual arousal from exposing genitals.",
        "Medications": "SSRIs, anti-androgens.",
        "Dosage": "Sertraline (50-200 mg/day)."
      },
      "Frotteuristic Disorder": {
        "Explanation": "Sexual arousal from touching or rubbing against non-consenting persons.",
        "Medications": "SSRIs, anti-androgens.",
        "Dosage": "Sertraline (50-200 mg/day)."
      },
      "Sexual Sadism Disorder": {
        "Explanation": "Sexual arousal from inflicting pain.",
        "Medications": "SSRIs, anti-androgens.",
        "Dosage": "Sertraline (50-200 mg/day)."
      },
      "Sexual Masochism Disorder": {
        "Explanation": "Sexual arousal from receiving pain.",
        "Medications": "SSRIs, anti-androgens.",
        "Dosage": "Sertraline (50-200 mg/day)."
      },
      "Pedophilic Disorder": {
        "Explanation": "Sexual attraction to prepubescent children.",
        "Medications": "SSRIs, anti-androgens.",
        "Dosage": "Sertraline (50-200 mg/day)."
      },
      "Fetishistic Disorder": {
        "Explanation": "Sexual arousal from non-living objects or body parts.",
        "Medications": "SSRIs, anti-androgens.",
        "Dosage": "Sertraline (50-200 mg/day)."
      },
      "Transvestic Disorder": {
        "Explanation": "Sexual arousal from cross-dressing.",
        "Medications": "SSRIs, anti-androgens.",
        "Dosage": "Sertraline (50-200 mg/day)."
      }
    },
    "Elimination Disorders": {
      "Enuresis (Bedwetting)": {
        "Explanation": "Involuntary urination during sleep.",
        "Medications": "Desmopressin.",
        "Dosage": "Desmopressin (0.2-0.4 mg/day)."
      },
      "Encopresis (Fecal Incontinence)": {
        "Explanation": "Involuntary bowel movements, often related to constipation.",
        "Medications": "Laxatives, behavioral therapy.",
        "Dosage": "Not applicable."
      }
    },
    "Neurological Conditions with Psychological Impact": {
      "Epilepsy": {
        "Explanation": "Sudden electrical disturbances in the brain.",
        "Medications": "Antiepileptic drugs (AEDs) like valproate, lamotrigine.",
        "Dosage": "Valproate (500-2500 mg/day), Lamotrigine (50-400 mg/day)."
      },
      "Psychogenic Non-Epileptic Seizures (PNES)": {
        "Explanation": "Seizure-like episodes caused by psychological factors.",
        "Medications": "Psychotherapy, SSRIs.",
        "Dosage": "Sertraline (50-200 mg/day)."
      }
    },
    "Other Conditions": {
      "Gender Dysphoria": {
        "Explanation": "Distress due to incongruence between gender identity and assigned sex.",
        "Medications": "Hormone therapy, psychotherapy.",
        "Dosage": "Varies based on specific hormone therapy."
      },
      "Non-Suicidal Self-Injury (NSSI)": {
        "Explanation": "Self-harm behaviors like cutting.",
        "Medications": "Psychotherapy, SSRIs for underlying conditions.",
        "Dosage": "Sertraline (50-200 mg/day)."
      },
      "Suicidal Behavior Disorder": {
        "Explanation": "Thoughts or attempts of ending one's life.",
        "Medications": "Psychotherapy, SSRIs.",
        "Dosage": "Sertraline (50-200 mg/day)."
      },
      "Prolonged Grief Disorder": {
        "Explanation": "Intense grief that doesn't improve over time.",
        "Medications": "Psychotherapy, SSRIs.",
        "Dosage": "Sertraline (50-200 mg/day)."
      }
    }
  }
  module.exports = conditions;