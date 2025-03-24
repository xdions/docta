const mse = {
    MentalStateExamination: {
      description: "A structured assessment of a patient's current mental state, used primarily in psychiatric evaluations.",
      steps: [
        {
          name: "Appearance",
          parameters: [
            {
              groomingHygiene: "Well-groomed, unkempt, disheveled"
            },
            {
              dress: "Appropriate for the weather and situation, unusual or eccentric"
            },
            {
              physicalAppearance: "Signs of illness, malnutrition, or substance use"
            }
          ]
        },
        {
          name: "Behavior",
          parameters: [
            {
              levelOfActivity: "Hyperactive, hypoactive, normal"
            },
            {
              eyeContact: "Good, poor, avoidant"
            },
            {
              facialExpressions: "Animated, flat, inappropriate"
            },
            {
              postureGait: "Normal, unusual, rigid"
            },
            {
              mannerismsGestures: "Purposeful, repetitive, odd"
            },
            {
              agitationRestlessness: "Present or absent"
            },
            {
              cooperation: "Cooperative, hostile, guarded"
            }
          ]
        },
        {
          name: "Speech",
          parameters: [
            {
              rate: "Fast, slow, normal"
            },
            {
              volume: "Loud, soft, normal"
            },
            {
              tone: "Monotone, expressive, unusual"
            },
            {
              fluency: "Fluent, hesitant, slurred"
            },
            {
              quantity: "Talkative, reticent, mute"
            },
            {
              content: "Logical, tangential, incoherent"
            }
          ]
        },
        {
          name: "Mood",
          parameters: [
            {
              subjectiveMood: "Patient's self-reported emotional state (e.g., sad, anxious, happy)"
            },
            {
              objectiveMood: "Clinician's observation of the patient's emotional state"
            },
            {
              stability: "Stable, labile, euthymic"
            }
          ]
        },
        {
          name: "Affect",
          parameters: [
            {
              range: "Full, restricted, blunted, flat"
            },
            {
              appropriateness: "Appropriate or inappropriate to the situation"
            },
            {
              intensity: "Normal, intense, exaggerated"
            }
          ]
        },
        {
          name: "ThoughtProcess",
          parameters: [
            {
              form: "Logical, coherent, disorganized"
            },
            {
              flow: "Goal-directed, tangential, circumstantial, flight of ideas, loose associations"
            },
            {
              speed: "Normal, pressured, slowed"
            },
            {
              content: "Presence of delusions, obsessions, phobias, suicidal or homicidal ideation"
            }
          ]
        },
        {
          name: "ThoughtContent",
          parameters: [
            {
              delusions: "Fixed false beliefs (e.g., paranoid, grandiose, nihilistic)"
            },
            {
              obsessions: "Recurrent, intrusive thoughts"
            },
            {
              phobias: "Irrational fears"
            },
            {
              suicidalHomicidalIdeation: "Presence, plan, intent"
            },
            {
              preoccupations: "Overvalued ideas or concerns"
            }
          ]
        },
        {
          name: "Perception",
          parameters: [
            {
              hallucinations: "Auditory, visual, tactile, olfactory, gustatory"
            },
            {
              illusions: "Misinterpretations of real stimuli"
            },
            {
              depersonalization: "Feeling detached from oneself"
            },
            {
              derealization: "Feeling detached from the environment"
            }
          ]
        },
        {
          name: "Cognition",
          parameters: [
            {
              orientation: "Time, place, person"
            },
            {
              attentionConcentration: "Ability to focus and sustain attention"
            },
            {
              memory: "Immediate recall, recent memory, remote memory"
            },
            {
              executiveFunctioning: "Planning, problem-solving, abstract thinking"
            },
            {
              insight: "Awareness of illness and its implications"
            },
            {
              judgment: "Ability to make sound decisions"
            }
          ]
        },
        {
          name: "Insight",
          parameters: [
            {
              awarenessOfIllness: "Full, partial, absent"
            },
            {
              understandingOfTreatmentNeed: "Recognition of the need for treatment"
            }
          ]
        },
        {
          name: "Judgment",
          parameters: [
            {
              decisionMakingAbility: "Sound, impaired, poor"
            },
            {
              abilityToUnderstandConsequences: "Good, fair, poor"
            }
          ]
        },
        {
          name: "RiskAssessment",
          parameters: [
            {
              suicideRisk: "Ideation, plan, intent, means"
            },
            {
              violenceRisk: "Ideation, plan, intent, means"
            },
            {
              selfHarm: "Intent, history, current risk"
            }
          ]
        },
        {
          name: "OtherObservations",
          parameters: [
            {
              culturalConsiderations: "How cultural background may influence presentation"
            },
            {
              substanceUse: "Evidence of intoxication or withdrawal"
            },
            {
              physicalHealth: "Any apparent physical health issues"
            }
          ]
        }
      ]
    }
  };
  
  module.exports = mse;