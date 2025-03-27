const diagnosis ={
"Neurodevelopmental Disorders": {
      "Intellectual Disabilities": {
        "Intellectual Disability": {
          "Mild": {
            "DSM-5": "Deficits in intellectual functioning and adaptive functioning. IQ 50-69, some support needed.",
            "ICD-11": "Significant limitations in intellectual functioning and adaptive behavior. Mild severity."
          },
          "Moderate": {
            "DSM-5": "Deficits in intellectual functioning and adaptive functioning. IQ 35-49, considerable support needed.",
            "ICD-11": "Significant limitations in intellectual functioning and adaptive behavior. Moderate severity."
          },
          "Severe": {
            "DSM-5": "Deficits in intellectual functioning and adaptive functioning. IQ 20-34, extensive support needed.",
            "ICD-11": "Significant limitations in intellectual functioning and adaptive behavior. Severe severity."
          },
          "Profound": {
            "DSM-5": "Deficits in intellectual functioning and adaptive functioning. IQ <20, pervasive support needed.",
            "ICD-11": "Significant limitations in intellectual functioning and adaptive behavior. Profound severity."
          }
        },
        "Global Developmental Delay": {
          "DSM-5": "Significant delays in multiple developmental milestones. Onset during the developmental period.",
          "ICD-11": "Significant delays in multiple developmental milestones. Onset during the developmental period."
        }
      },
      "Communication Disorders": {
        "Language Disorder": {
          "DSM-5": "Persistent difficulties in the acquisition and use of language. Deficits interfere with academic achievement or activities of daily living.",
          "ICD-11": "Persistent difficulties in the acquisition and use of language. Deficits significantly interfere with academic achievement or daily activities."
        },
        "Speech Sound Disorder": {
          "DSM-5": "Persistent difficulties in the production of speech sounds. Deficits interfere with communication or cause distress.",
          "ICD-11": "Persistent difficulties in the production of speech sounds. Deficits significantly interfere with communication or cause distress."
        },
        "Childhood-Onset Fluency Disorder (Stuttering)": {
          "DSM-5": "Persistent difficulties in speech fluency (repetitions, prolongations, blocks). Deficits interfere with communication or cause distress.",
          "ICD-11": "Persistent difficulties in speech fluency. Deficits significantly interfere with communication or cause distress."
        },
        "Social (Pragmatic) Communication Disorder": {
          "DSM-5": "Persistent difficulties in social communication and interaction. Deficits interfere with social relationships or cause distress.",
          "ICD-11": "Persistent difficulties in social communication and interaction. Deficits significantly interfere with social relationships or cause distress."
        }
      },
      "Autism Spectrum Disorder (ASD)": {
        "DSM-5": "Persistent deficits in social communication and social interaction. Restricted, repetitive patterns of behavior, interests, or activities. Symptoms present in the early developmental period.",
        "ICD-11": "Persistent deficits in social interaction and communication. Restricted and repetitive patterns of behavior, interests, or activities. Symptoms present in early childhood."
      },
      "Attention-Deficit/Hyperactivity Disorder (ADHD)": {
        "Predominantly Inattentive": {
          "DSM-5": "Six or more symptoms of inattention for children up to age 16, or five or more for individuals aged 17 and older. Symptoms present in two or more settings. Onset before age 12.",
          "ICD-11": "Persistent pattern of inattention. Symptoms present in multiple settings. Onset before age 12."
        },
        "Predominantly Hyperactive-Impulsive": {
          "DSM-5": "Six or more symptoms of hyperactivity-impulsivity for children up to age 16, or five or more for individuals aged 17 and older. Symptoms present in two or more settings. Onset before age 12.",
          "ICD-11": "Persistent pattern of hyperactivity and impulsivity. Symptoms present in multiple settings. Onset before age 12."
        },
        "Combined": {
          "DSM-5": "Six or more symptoms of inattention and six or more symptoms of hyperactivity-impulsivity for children up to age 16, or five or more for individuals aged 17 and older. Symptoms present in two or more settings. Onset before age 12.",
          "ICD-11": "Persistent patterns of both inattention and hyperactivity-impulsivity. Symptoms present in multiple settings. Onset before age 12."
        }
      },
      "Specific Learning Disorder": {
        "Dyslexia": {
          "DSM-5": "Persistent difficulties in reading. Deficits interfere with academic achievement or activities of daily living.",
          "ICD-11": "Significant and persistent difficulties in reading. Deficits significantly interfere with academic achievement or daily activities."
        },
        "Dyscalculia": {
          "DSM-5": "Persistent difficulties in mathematics. Deficits interfere with academic achievement or activities of daily living.",
          "ICD-11": "Significant and persistent difficulties in mathematics. Deficits significantly interfere with academic achievement or daily activities."
        },
        "Dysgraphia": {
          "DSM-5": "Persistent difficulties in writing. Deficits interfere with academic achievement or activities of daily living.",
          "ICD-11": "Significant and persistent difficulties in writing. Deficits significantly interfere with academic achievement or daily activities."
        }
      },
      "Motor Disorders": {
        "Developmental Coordination Disorder": {
          "DSM-5": "Motor coordination difficulties significantly below expected for age. Deficits interfere with academic achievement or activities of daily living.",
          "ICD-11": "Motor coordination difficulties significantly below expected for age. Deficits significantly interfere with academic achievement or daily activities."
        },
        "Stereotypic Movement Disorder": {
          "DSM-5": "Repetitive, stereotyped movements (e.g., hand flapping, body rocking). Movements interfere with normal activities or cause distress.",
          "ICD-11": "Repetitive, stereotyped movements. Movements significantly interfere with normal activities or cause distress."
        },
        "Tourette’s Disorder": {
          "DSM-5": "Multiple motor tics and one or more vocal tics. Tics occur many times a day, nearly every day, for at least one year. Onset before age 18.",
          "ICD-11": "Multiple motor tics and one or more vocal tics. Tics occur many times a day, nearly every day, for at least one year. Onset before age 18."
        }
      }
    },
    "Schizophrenia Spectrum & Other Psychotic Disorders": {
      "Schizotypal (Personality) Disorder": {
        "DSM-5": "Persistent pattern of social and interpersonal deficits, cognitive or perceptual distortions, and eccentricities of behavior.",
        "ICD-11": "Persistent pattern of social and interpersonal deficits, cognitive or perceptual distortions, and eccentricities of behavior."
      },
      "Delusional Disorder": {
        "DSM-5": "Presence of one or more non-bizarre delusions for at least one month. Delusions are not due to another mental disorder.",
        "ICD-11": "Presence of one or more non-bizarre delusions for at least one month. Delusions are not due to another mental disorder."
      },
      "Brief Psychotic Disorder": {
        "DSM-5": "Presence of one or more psychotic symptoms. Duration of one day to one month. Return to previous level of functioning.",
        "ICD-11": "Presence of one or more psychotic symptoms. Duration of one day to one month. Return to previous level of functioning."
      },
      "Schizophreniform Disorder": {
        "DSM-5": "Presence of two or more psychotic symptoms. Duration of at least one month but less than six months. Criteria for schizophrenia are not met.",
        "ICD-11": "Presence of two or more psychotic symptoms. Duration of at least one month but less than six months. Criteria for schizophrenia are not met."
      },
      "Schizophrenia": {
        "DSM-5": "Presence of two or more psychotic symptoms. Duration of at least six months. Significant impairment in social, occupational, or other areas of functioning.",
        "ICD-11": "Presence of two or more psychotic symptoms. Duration of at least six months. Significant impairment in social, occupational, or other areas of functioning."
      },
      "Schizoaffective Disorder": {
        "Bipolar Type": {
          "DSM-5": "Presence of psychotic symptoms and mood episodes (e.g., manic, depressive). Mood episodes are present for a significant portion of the illness. Criteria for schizophrenia are met.",
          "ICD-11": "Presence of psychotic symptoms and mood episodes. Mood episodes are present for a significant portion of the illness. Criteria for schizophrenia are met."
        },
        "Depressive Type": {
          "DSM-5": "Presence of psychotic symptoms and mood episodes (e.g., depressive). Mood episodes are present for a significant portion of the illness. Criteria for schizophrenia are met.",
          "ICD-11": "Presence of psychotic symptoms and mood episodes. Mood episodes are present for a significant portion of the illness. Criteria for schizophrenia are met."
        }
      },
      "Substance/Medication-Induced Psychotic Disorder": {
        "DSM-5": "Prominent hallucinations or delusions. Symptoms develop during or shortly after substance intoxication or withdrawal. Symptoms are not better explained by another mental disorder.",
        "ICD-11": "Prominent hallucinations or delusions. Symptoms develop during or shortly after substance intoxication or withdrawal. Symptoms are not better explained by another mental disorder."
      },
      "Psychotic Disorder Due to Another Medical Condition": {
        "DSM-5": "Prominent hallucinations or delusions. Symptoms are due to the direct physiological effects of another medical condition. Symptoms are not better explained by another mental disorder.",
        "ICD-11": "Prominent hallucinations or delusions. Symptoms are due to the direct physiological effects of another medical condition. Symptoms are not better explained by another mental disorder."
      }
    },
    "Bipolar & Related Disorders": {
      "Bipolar I Disorder": {
        "DSM-5": "Presence of one or more manic episodes. May have hypomanic or major depressive episodes. Significant impairment in social, occupational, or other areas of functioning.",
        "ICD-11": "Presence of one or more manic episodes. May have hypomanic or major depressive episodes. Significant impairment in social, occupational, or other areas of functioning."
      },
      "Bipolar II Disorder": {
        "DSM-5": "Presence of one or more hypomanic episodes and one or more major depressive episodes. No manic episodes. Significant impairment in social, occupational, or other areas of functioning.",
        "ICD-11": "Presence of one or more hypomanic episodes and one or more major depressive episodes. No manic episodes. Significant impairment in social, occupational, or other areas of functioning."
      },
      "Cyclothymic Disorder": {
        "DSM-5": "Presence of numerous periods of hypomanic symptoms and numerous periods of depressive symptoms over at least two years. Symptoms do not meet criteria for a hypomanic or major depressive episode. Significant impairment in social, occupational, or other areas of functioning.",
        "ICD-11": "Presence of numerous periods of hypomanic symptoms and numerous periods of depressive symptoms over at least two years. Symptoms do not meet criteria for a hypomanic or major depressive episode. Significant impairment in social, occupational, or other areas of functioning."
      },
      "Substance/Medication-Induced Bipolar Disorder": {
        "DSM-5": "Presence of manic or hypomanic episodes. Symptoms develop during or shortly after substance intoxication or withdrawal. Symptoms are not better explained by another mental disorder.",
        "ICD-11": "Presence of manic or hypomanic episodes. Symptoms develop during or shortly after substance intoxication or withdrawal. Symptoms are not better explained by another mental disorder."
      }
    },
    "Depressive Disorders": {
      "Major Depressive Disorder (MDD)": {
        "DSM-5": "Presence of five or more depressive symptoms for at least two weeks. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning.",
        "ICD-11": "Presence of five or more depressive symptoms. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning."
      },
      "Persistent Depressive Disorder (Dysthymia)": {
        "DSM-5": "Presence of depressed mood for most of the day, for more days than not, for at least two years. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning.",
        "ICD-11": "Presence of depressed mood for most of the day, for more days than not, for at least two years. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning."
      },
      "Disruptive Mood Dysregulation Disorder (DMDD)": {
        "DSM-5": "Severe recurrent temper outbursts that are inconsistent with developmental level. Symptoms occur three or more times per week. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning.",
        "ICD-11": "Severe recurrent temper outbursts that are inconsistent with developmental level. Symptoms occur three or more times per week. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning."
      },
      "Premenstrual Dysphoric Disorder (PMDD)": {
        "DSM-5": "Presence of five or more premenstrual symptoms that remit after the onset of menses. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning.",
        "ICD-11": "Presence of five or more premenstrual symptoms. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning."
      },
      "Substance/Medication-Induced Depressive Disorder": {
        "DSM-5": "Presence of depressive symptoms. Symptoms develop during or shortly after substance intoxication or withdrawal. Symptoms are not better explained by another mental disorder.",
        "ICD-11": "Presence of depressive symptoms. Symptoms develop during or shortly after substance intoxication or withdrawal. Symptoms are not better explained by another mental disorder."
      }
    },
    "Anxiety Disorders": {
      "Generalized Anxiety Disorder (GAD)": {
        "DSM-5": "Excessive anxiety and worry about various events or activities. Symptoms present for at least six months. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning.",
        "ICD-11": "Excessive anxiety and worry. Symptoms present for at least six months. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning."
      },
      "Panic Disorder": {
        "DSM-5": "Recurrent unexpected panic attacks. Persistent worry about having another panic attack. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning.",
        "ICD-11": "Recurrent unexpected panic attacks. Persistent worry about having another panic attack. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning."
      },
      "Agoraphobia": {
        "DSM-5": "Fear or anxiety about two or more situations (e.g., using public transportation, being in open spaces). Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning.",
        "ICD-11": "Fear or anxiety about two or more situations. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning."
      },
      "Social Anxiety Disorder (Social Phobia)": {
        "DSM-5": "Fear or anxiety about social interactions. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning.",
        "ICD-11": "Fear or anxiety about social interactions. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning."
      },
      "Specific Phobias": {
        "DSM-5": "Fear or anxiety about a specific object or situation (e.g., animals, heights). Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning.",
        "ICD-11": "Fear or anxiety about a specific object or situation. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning."
      },
      "Separation Anxiety Disorder": {
        "DSM-5": "Excessive fear or anxiety about separation from attachment figures. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning.",
        "ICD-11": "Excessive fear or anxiety about separation from attachment figures. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning."
      },
      "Selective Mutism": {
        "DSM-5": "Persistent failure to speak in specific social situations. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning.",
        "ICD-11": "Persistent failure to speak in specific social situations. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning."
      }
    },
    "Obsessive-Compulsive & Related Disorders": {
      "Obsessive-Compulsive Disorder (OCD)": {
        "DSM-5": "Presence of obsessions, compulsions, or both. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning.",
        "ICD-11": "Presence of obsessions, compulsions, or both. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning."
      },
      "Body Dysmorphic Disorder (BDD)": {
        "DSM-5": "Preoccupation with one or more perceived defects or flaws in physical appearance. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning.",
        "ICD-11": "Preoccupation with one or more perceived defects or flaws in physical appearance. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning."
      },
      "Hoarding Disorder": {
        "DSM-5": "Persistent difficulty discarding or parting with possessions. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning.",
        "ICD-11": "Persistent difficulty discarding or parting with possessions. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning."
      },
      "Trichotillomania (Hair-Pulling Disorder)": {
        "DSM-5": "Recurrent pulling out of one's hair. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning.",
        "ICD-11": "Recurrent pulling out of one's hair. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning."
      },
      "Excoriation (Skin-Picking) Disorder": {
        "DSM-5": "Recurrent skin picking. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning.",
        "ICD-11": "Recurrent skin picking. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning."
      }
    },
    "Trauma- & Stressor-Related Disorders": {
      "Posttraumatic Stress Disorder (PTSD)": {
        "DSM-5": "Exposure to actual orthreatened death, serious injury, or sexual violence. Presence of one or more intrusion symptoms. Avoidance of stimuli associated with the trauma. Negative alterations in cognitions and mood. Alterations in arousal and reactivity. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning.",
        "ICD-11": "Exposure to actual or threatened death, serious injury, or sexual violence. Presence of one or more intrusion symptoms. Avoidance of stimuli associated with the trauma. Negative alterations in cognitions and mood. Alterations in arousal and reactivity. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning."
      },
      "Acute Stress Disorder": {
        "DSM-5": "Exposure to actual or threatened death, serious injury, or sexual violence. Presence of nine or more symptoms from intrusion, negative mood, dissociative, avoidance, and arousal domains. Symptoms last for three days to one month. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning.",
        "ICD-11": "Exposure to actual or threatened death, serious injury, or sexual violence. Presence of nine or more symptoms from intrusion, negative mood, dissociative, avoidance, and arousal domains. Symptoms last for three days to one month. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning."
      },
      "Adjustment Disorders": {
        "DSM-5": "Emotional or behavioral symptoms in response to an identifiable stressor. Symptoms appear within three months of the stressor. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning.",
        "ICD-11": "Emotional or behavioral symptoms in response to an identifiable stressor. Symptoms appear within three months of the stressor. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning."
      },
      "Reactive Attachment Disorder": {
        "DSM-5": "Persistent social and emotional withdrawal. Symptoms appear before age five. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning.",
        "ICD-11": "Persistent social and emotional withdrawal. Symptoms appear before age five. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning."
      },
      "Disinhibited Social Engagement Disorder": {
        "DSM-5": "Excessive familiarity with strangers. Symptoms appear before age five. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning.",
        "ICD-11": "Excessive familiarity with strangers. Symptoms appear before age five. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning."
      }
    },
    "Dissociative Disorders": {
      "Dissociative Identity Disorder (DID)": {
        "DSM-5": "Presence of two or more distinct personality states. Recurrent gaps in the recall of everyday events. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning.",
        "ICD-11": "Presence of two or more distinct personality states. Recurrent gaps in the recall of everyday events. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning."
      },
      "Dissociative Amnesia": {
        "DSM-5": "Inability to recall important autobiographical information. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning.",
        "ICD-11": "Inability to recall important autobiographical information. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning."
      },
      "Depersonalization/Derealization Disorder": {
        "DSM-5": "Persistent or recurrent episodes of depersonalization or derealization. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning.",
        "ICD-11": "Persistent or recurrent episodes of depersonalization or derealization. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning."
      }
    },
    "Somatic Symptom & Related Disorders": {
      "Somatic Symptom Disorder": {
        "DSM-5": "One or more somatic symptoms that cause significant distress or impairment. Excessive thoughts, feelings, or behaviors related to the somatic symptoms. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning.",
        "ICD-11": "One or more somatic symptoms that cause significant distress or impairment. Excessive thoughts, feelings, or behaviors related to the somatic symptoms. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning."
      },
      "Illness Anxiety Disorder": {
        "DSM-5": "Preoccupation with having or acquiring a serious illness. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning.",
        "ICD-11": "Preoccupation with having or acquiring a serious illness. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning."
      },
      "Conversion Disorder (Functional Neurological Symptom Disorder)": {
        "DSM-5": "One or more symptoms of altered voluntary motor or sensory function. Symptoms are not better explained by another medical condition. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning.",
        "ICD-11": "One or more symptoms of altered voluntary motor or sensory function. Symptoms are not better explained by another medical condition. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning."
      },
      "Factitious Disorder": {
        "DSM-5": "Fabrication of physical or psychological symptoms. Symptoms are intended to deceive others. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning.",
        "ICD-11": "Fabrication of physical or psychological symptoms. Symptoms are intended to deceive others. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning."
      }
    },
    "Feeding & Eating Disorders": {
      "Anorexia Nervosa": {
        "Restricting Type": {
          "DSM-5": "Restriction of energy intake leading to significantly low body weight. Intense fear of gaining weight or becoming fat. Disturbance in self-perceived weight or shape. No binge eating or purging.",
          "ICD-11": "Restriction of energy intake leading to significantly low body weight. Intense fear of gaining weight or becoming fat. Disturbance in self-perceived weight or shape. No binge eating or purging."
        },
        "Binge-Purge Type": {
          "DSM-5": "Restriction of energy intake leading to significantly low body weight. Intense fear of gaining weight or becoming fat. Disturbance in self-perceived weight or shape. Presence of binge eating or purging.",
          "ICD-11": "Restriction of energy intake leading to significantly low body weight. Intense fear of gaining weight or becoming fat. Disturbance in self-perceived weight or shape. Presence of binge eating or purging."
        }
      },
      "Bulimia Nervosa": {
        "DSM-5": "Recurrent episodes of binge eating. Recurrent inappropriate compensatory behaviors (e.g., self-induced vomiting, excessive exercise). Self-evaluation unduly influenced by body shape and weight. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning.",
        "ICD-11": "Recurrent episodes of binge eating. Recurrent inappropriate compensatory behaviors. Self-evaluation unduly influenced by body shape and weight. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning."
      },
      "Binge-Eating Disorder": {
        "DSM-5": "Recurrent episodes of binge eating. Distress regarding binge eating. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning.",
        "ICD-11": "Recurrent episodes of binge eating. Distress regarding binge eating. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning."
      },
      "Avoidant/Restrictive Food Intake Disorder (ARFID)": {
        "DSM-5": "Avoidance or restriction of food intake. Significant weight loss or failure to gain weight. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning.",
        "ICD-11": "Avoidance or restriction of food intake. Significant weight loss or failure to gain weight. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning."
      },
      "Pica": {
        "DSM-5": "Persistent eating of non-nutritive substances. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning.",
        "ICD-11": "Persistent eating of non-nutritive substances. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning."
      },
      "Rumination Disorder": {
        "DSM-5": "Repeated regurgitation of food. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning.",
        "ICD-11": "Repeated regurgitation of food. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning."
      }
    },
    "Sleep-Wake Disorders": {
      "Insomnia Disorder": {
        "DSM-5": "Difficulty initiating or maintaining sleep. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning.",
        "ICD-11": "Difficulty initiating or maintaining sleep. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning."
      },
      "Hypersomnolence Disorder": {
        "DSM-5": "Excessive daytime sleepiness. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning.",
        "ICD-11": "Excessive daytime sleepiness. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning."
      },
      "Narcolepsy": {
        "DSM-5": "Excessive daytime sleepiness and cataplexy. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning.",
        "ICD-11": "Excessive daytime sleepiness and cataplexy. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning."
      },
      "Obstructive Sleep Apnea Hypopnea": {
        "DSM-5": "Repeated episodes of upper airway obstruction during sleep. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning.",
        "ICD-11": "Repeated episodes of upper airway obstruction during sleep. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning."
      },
      "Circadian Rhythm Sleep-Wake Disorders": {
        "DSM-5": "Persistent or recurrent pattern of sleep disruption. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning.",
        "ICD-11": "Persistent or recurrent pattern of sleep disruption. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning."
      },
      "Parasomnias": {
        "Nightmare Disorder": {
          "DSM-5": "Recurrent episodes of nightmares. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning.",
          "ICD-11": "Recurrent episodes of nightmares. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning."
        },
        "Sleep Terror Disorder": {
          "DSM-5": "Recurrent episodes of sleep terrors. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning.",
          "ICD-11": "Recurrent episodes of sleep terrors. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning."
        }
      }
    },
    "Sexual Dysfunctions": {
      "Erectile Disorder": {
        "DSM-5": "Persistent or recurrent inability to attain or maintain an erection. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning.",
        "ICD-11": "Persistent or recurrent inability to attain or maintain an erection. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning."
      },
      "Female Orgasmic Disorder": {
        "DSM-5": "Persistent or recurrent delay or absence of orgasm. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning.",
        "ICD-11": "Persistent or recurrent delay or absence of orgasm. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning."
      },
      "Delayed Ejaculation": {
        "DSM-5": "Persistent or recurrent delay or absence of ejaculation. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning.",
        "ICD-11": "Persistent or recurrent delay or absence of ejaculation. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning."
      },
      "Premature (Early) Ejaculation": {
        "DSM-5": "Persistent or recurrent ejaculation with minimal sexual stimulation. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning.",
        "ICD-11": "Persistent or recurrent ejaculation with minimal sexual stimulation. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning."
      },
      "Genito-Pelvic Pain/Penetration Disorder": {
        "DSM-5": "Persistent or recurrent pain during sexual intercourse. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning.",
        "ICD-11": "Persistent or recurrent pain during sexual intercourse. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning."
      }
    },
    "Gender Dysphoria": {
      "Gender Dysphoria in Children/Adolescents/Adults": {
        "DSM-5": "A marked incongruence between one's experienced/expressed gender and assigned gender. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning.",
        "ICD-11": "A marked incongruence between one's experienced/expressed gender and assigned gender. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning."
      }
    },
    "Disruptive, Impulse-Control & Conduct Disorders": {
      "Oppositional Defiant Disorder (ODD)": {
        "DSM-5": "Angry/irritable mood, argumentative/defiant behavior, or vindictiveness. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning.",
        "ICD-11": "Angry/irritable mood, argumentative/defiant behavior, or vindictiveness. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning."
      },
      "Conduct Disorder": {
        "DSM-5": "Aggression to people and animals, destruction of property, deceitfulness or theft, serious violations of rules. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning.",
        "ICD-11": "Aggression to people and animals, destruction of property, deceitfulness or theft, serious violations of rules. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning."
      },
      "Intermittent Explosive Disorder": {
        "DSM-5": "Recurrent episodes of failure to resist aggressive impulses. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning.",
        "ICD-11": "Recurrent episodes of failure to resist aggressive impulses. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning."
      },
      "Kleptomania": {
        "DSM-5": "Recurrent urges to steal. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning.",
        "ICD-11": "Recurrent urges to steal. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning."
      },
      "Pyromania": {
        "DSM-5": "Recurrent urges to set fires. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning.",
        "ICD-11": "Recurrent urges to set fires. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning."
      }
    },
    "Substance-Related & Addictive Disorders": {
      "Alcohol Use Disorder": {
        "DSM-5": "Presence of two or more criteria (e.g., impaired control, social impairment, risky use, pharmacological criteria). Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning.",
        "ICD-11": "Presence of two or more criteria. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning."
      },
      "Cannabis Use Disorder": {
        "DSM-5": "Presence of two or more criteria (e.g., impaired control, social impairment, risky use, pharmacological criteria). Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning.",
        "ICD-11": "Presence of two or more criteria. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning."
      },
      "Stimulant Use Disorder": {
        "DSM-5": "Presence of two or more criteria (e.g., impaired control, social impairment, risky use, pharmacological criteria). Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning.",
        "ICD-11": "Presence of two or more criteria. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning."
      },
      "Opioid Use Disorder": {
        "DSM-5": "Presence of two or more criteria (e.g., impaired control, social impairment, risky use, pharmacological criteria). Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning.",
        "ICD-11": "Presence of two or more criteria. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning."
      },
      "Gambling Disorder": {
        "DSM-5": "Persistent and recurrent problematic gambling behavior. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning.",
        "ICD-11": "Persistent and recurrent problematic gambling behavior. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning."
      }
    },
    "Neurocognitive Disorders": {
      "Delirium": {
        "DSM-5": "Disturbance in attention and awareness. Additional cognitive disturbances. Develops over a short period of time and fluctuates. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning.",
        "ICD-11": "Disturbance in attention and awareness. Additional cognitive disturbances. Develops over a short period of time and fluctuates. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning."
      },
      "Major & Mild Neurocognitive Disorders": {
        "Alzheimer’s": {
          "DSM-5": "Cognitive decline from a previous level of performance. Deficits in one or more cognitive domains. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning.",
          "ICD-11": "Cognitive decline from a previous level of performance. Deficits in one or more cognitive domains. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning."
        },
        "Vascular": {
          "DSM-5": "Cognitive decline from a previous level of performance. Deficits in one or more cognitive domains. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning.",
          "ICD-11": "Cognitive decline from a previous level of performance. Deficits in one or more cognitive domains. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning."
        },
        "Lewy Body": {
          "DSM-5": "Cognitive decline from a previous level of performance. Deficits in one or more cognitive domains. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning.",
          "ICD-11": "Cognitive decline from a previous level of performance. Deficits in one or more cognitive domains. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning."
        },
        "Frontotemporal": {
          "DSM-5": "Cognitive decline from a previous level of performance. Deficits in one or more cognitive domains. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning.",
          "ICD-11": "Cognitive decline from a previous level of performance. Deficits in one or more cognitive domains. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning."
        }
      }
    },
    "Personality Disorders": {
      "Cluster A": {
        "Paranoid Personality Disorder": {
          "DSM-5": "Persistent distrust and suspiciousness. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning.",
          "ICD-11": "Persistent distrust and suspiciousness. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning."
        },
        "Schizoid Personality Disorder": {
          "DSM-5": "Detachment from social relationships and a restricted range of emotional expression. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning.",
          "ICD-11": "Detachment from social relationships and a restricted range of emotional expression. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning."
        },
        "Schizotypal Personality Disorder": {
          "DSM-5": "Social and interpersonal deficits, cognitive or perceptual distortions, eccentricities of behavior. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning.",
          "ICD-11": "Social and interpersonal deficits, cognitive or perceptual distortions, eccentricities of behavior. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning."
        }
      },
      "Cluster B": {
        "Antisocial Personality Disorder": {
          "DSM-5": "Disregard for and violation of the rights of others. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning.",
          "ICD-11": "Disregard for and violation of the rights of others. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning."
        },
        "Borderline Personality Disorder": {
          "DSM-5": "Instability in interpersonal relationships, self-image, and affects. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning.",
          "ICD-11": "Instability in interpersonal relationships, self-image, and affects. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning."
        },
        "Histrionic Personality Disorder": {
          "DSM-5": "Excessive emotionality and attention-seeking behavior. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning.",
          "ICD-11": "Excessive emotionality and attention-seeking behavior. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning."
        },
        "Narcissistic Personality Disorder": {
          "DSM-5": "Grandiosity, need for admiration, lack of empathy. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning.",
          "ICD-11": "Grandiosity, need for admiration, lack of empathy. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning."
        }
      },
      "Cluster C": {
        "Avoidant Personality Disorder": {
          "DSM-5": "Social inhibition, feelings of inadequacy, and hypersensitivity to negative evaluation. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning.",
          "ICD-11": "Social inhibition, feelings of inadequacy, and hypersensitivity to negative evaluation. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning."
        },
        "Dependent Personality Disorder": {
          "DSM-5": "Excessive need to be taken care of. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning.",
          "ICD-11": "Excessive need to be taken care of. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning."
        },
        "Obsessive-Compulsive Personality Disorder (OCPD)": {
          "DSM-5": "Preoccupation with orderliness, perfectionism, and control. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning.",
          "ICD-11": "Preoccupation with orderliness, perfectionism, and control. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning."
        }
      }
    },
    "Elimination Disorders": {
      "Enuresis": {
        "Nocturnal Only": {
          "DSM-5": "Involuntary voiding during sleep. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning.",
          "ICD-11": "Involuntary voiding during sleep. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning."
        },
        "Diurnal Only": {
          "DSM-5": "Involuntary voiding during waking hours. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning.",
          "ICD-11": "Involuntary voiding during waking hours. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning."
        },
        "Nocturnal and Diurnal": {
          "DSM-5": "Involuntary voiding during both sleep and waking hours. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning.",
          "ICD-11": "Involuntary voiding during both sleep and waking hours. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning."
        }
      },
      "Encopresis (Fecal Incontinence)": {
        "DSM-5": "Recurrent voluntary or involuntary passage of feces into inappropriate places. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning.",
        "ICD-11": "Recurrent voluntary or involuntary passage of feces into inappropriate places. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning."
      }
    },
    "Epilepsy (Seizure Disorders)": {
      "Psychotic Disorder Due to Another Medical Condition (Epilepsy)": {
        "DSM-5": "Prominent hallucinations or delusions. Symptoms are due to the direct physiological effects of epilepsy. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning.",
        "ICD-11": "Prominent hallucinations or delusions. Symptoms are due to the direct physiological effects of epilepsy. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning."
      },
      "Neurocognitive Disorders": {
        "DSM-5": "Cognitive decline from a previous level of performance. Deficits in one or more cognitive domains. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning.",
        "ICD-11": "Cognitive decline from a previous level of performance. Deficits in one or more cognitive domains. Symptoms cause significant distress or impairment in social, occupational, or other areas of functioning."
      }
    }
  }
  module.exports = diagnosis;