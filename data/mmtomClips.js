export const mmtomClips = [
  {
    "id": "T1",
    "title": "Belief Inference: About to Open",
    "description": "MMToM-QA belief inference case with a single-step prediction point.",
    "benchmarkRef": "line 56",
    "episode": 187,
    "questionType": "1.2",
    "timeWindow": "7-7",
    "expectedTilt": "LLM",
    "videoSrc": "clips/mmtom/T1_episode187.mp4",
    "pauseTime": 8.72,
    "question": "If Michael has been trying to get a bottle of wine, which one of the following statements is more likely to be true?",
    "options": {
      "a": "Michael thinks that the bottle of wine is not inside the microwave.",
      "b": "Michael thinks that the bottle of wine is inside the microwave."
    },
    "correctAnswer": "b",
    "textInputForLLM": "What's inside the apartment: The apartment consists of a bedroom, kitchen, living room, and bathroom. \nIn the bedroom, there is a coffee table and a desk, with a dish bowl placed on the coffee table. \nThe kitchen is equipped with four cabinets, a fridge, a kitchen table, a microwave, and a stove. The third cabinet from the left houses a wine glass, while the second cabinet contains a dish bowl. The first cabinet is empty. Inside the fridge, there is a plate and a salmon. The microwave contains a plate, and the stove holds a cupcake and a salmon. The fourth cabinet from the left is filled with a wine glass, a bag of chips, a condiment bottle, and a water glass. \nThe living room features a cabinet, a sofa, a coffee table, and a desk. The cabinet stores a bottle of wine and an apple, while the coffee table holds a plate, a book, a water glass, and a remote control. \nThe bathroom is furnished with a bathroom cabinet, which is currently empty. \nActions taken by Michael: Michael is situated in the living room. He proceeds towards the kitchen, advances towards the microwave, and is on the verge of opening it. \nQuestion: If Michael has been trying to get a bottle of wine, which one of the following statements is more likely to be true? (a) Michael thinks that the bottle of wine is not inside the microwave. (b) Michael thinks that the bottle of wine is inside the microwave. Please respond with either a or b.",
    "modelResults": {
      "llm": {
        "label": "Text-only LLM",
        "answer": "A (confidence: 0.85)",
        "reasoning": "Summary: Michael knows the wine is in the living room cabinet, not the microwave. Reasoning: The bottle of wine is actually stored in the living room cabinet. If Michael has been trying to get wine, he would know its location and wouldn't expect it in the microwave. His movement toward the microwave suggests he's looking for something else.",
        "summary": "Michael knows the wine is in the living room cabinet, not the microwave."
      },
      "vlm": {
        "label": "Video-language model",
        "answer": "A (confidence: 0.90)",
        "reasoning": "Summary: Michael thinks the wine is not in the microwave. Reasoning: Michael is seen walking towards the kitchen, suggesting he is looking for something there, not in the microwave.",
        "summary": "Michael thinks the wine is not in the microwave."
      },
      "worldModel": {
        "label": "World Model",
        "answer": "A (confidence: 0.61)",
        "reasoning": "Summary: Option A gives the stronger global consistency between VideoMAEv2 clip similarities and option-text similarities. Reasoning: The script evaluates all 2^10 A/B assignments and selects the one with the highest cross-test similarity-structure correlation; for this test, forced scores are A=0.1837, B=0.1473.",
        "summary": "Option A gives the stronger global consistency between VideoMAEv2 clip similarities and option-text similarities."
      }
    },
    "analysis": "Ground truth is B (Michael thinks the wine is inside the microwave). This is a Type 1.2 false-belief setup: because he is about to open that container, the benchmark treats the action as evidence of belief even when the world state disagrees. LLM, video model, and world model all answered A, showing a shared bias toward static object-location priors over action-conditioned belief attribution."
  },
  {
    "id": "T2",
    "title": "Early Intention Inference",
    "description": "MMToM-QA early-stage intention inference from short observed behavior.",
    "benchmarkRef": "line 4",
    "episode": 43,
    "questionType": "1.2",
    "timeWindow": "0-7",
    "expectedTilt": "LLM",
    "videoSrc": "clips/mmtom/T2_episode43.mp4",
    "pauseTime": 7.4,
    "question": "If Elizabeth has been trying to get a wine glass, which one of the following statements is more likely to be true?",
    "options": {
      "a": "Elizabeth thinks that the wine glass is inside the stove.",
      "b": "Elizabeth thinks that the wine glass is not inside the stove."
    },
    "correctAnswer": "a",
    "textInputForLLM": "What's inside the apartment: The apartment consists of a bedroom, kitchen, living room, and bathroom. \nIn the bedroom, there is a coffee table and a desk. \nThe kitchen is equipped with four cabinets, a fridge, a kitchen table, a microwave, and a stove. The third cabinet from the left houses a bag of chips and a condiment bottle. Inside the fridge, there is a bottle of wine and a salmon. The second cabinet from the left contains two dish bowls, a water glass, and a plate. The first cabinet from the left has an apple, while the microwave contains a plate. The stove is empty, and the fourth cabinet from the left holds a dish bowl. \nThe living room features a cabinet, a sofa, a coffee table, and a desk. The cabinet contains two plates, an apple, a bag of chips, a wine glass, and a remote control. The coffee table is adorned with two plates, a book, a bottle of wine, a dish bowl, and a water glass. \nThe bathroom is fitted with a cabinet, which is currently empty. \nActions taken by Elizabeth: Elizabeth is situated in the bedroom. She proceeds towards the kitchen, advances towards the stove, and is on the verge of opening it. \nQuestion: If Elizabeth has been trying to get a wine glass, which one of the following statements is more likely to be true? (a) Elizabeth thinks that the wine glass is inside the stove. (b) Elizabeth thinks that the wine glass is not inside the stove. Please respond with either a or b.",
    "modelResults": {
      "llm": {
        "label": "Text-only LLM",
        "answer": "A (confidence: 0.85)",
        "reasoning": "Summary: Elizabeth is heading to the stove while seeking a wine glass, suggesting she believes it's there. Reasoning: Elizabeth is moving toward the stove and about to open it while trying to find a wine glass. Her action of approaching and opening the stove indicates she believes the wine glass is inside it, even though it's actually in the living room cabinet.",
        "summary": "Elizabeth is heading to the stove while seeking a wine glass, suggesting she believes it's there."
      },
      "vlm": {
        "label": "Video-language model",
        "answer": "B (confidence: 0.90)",
        "reasoning": "Summary: Elizabeth thinks the wine glass is not in the stove. Reasoning: She goes to the kitchen, indicating she believes the glass is there.",
        "summary": "Elizabeth thinks the wine glass is not in the stove."
      },
      "worldModel": {
        "label": "World Model",
        "answer": "B (confidence: 0.61)",
        "reasoning": "Summary: Option B gives the stronger global consistency between VideoMAEv2 clip similarities and option-text similarities. Reasoning: The script evaluates all 2^10 A/B assignments and selects the one with the highest cross-test similarity-structure correlation; for this test, forced scores are A=0.1473, B=0.1837.",
        "summary": "Option B gives the stronger global consistency between VideoMAEv2 clip similarities and option-text similarities."
      }
    },
    "analysis": "Ground truth is A (Elizabeth thinks the wine glass is inside the stove). In Type 1.2, the decisive cue is the immediate pre-open action at the stove, which supports an inside-the-container belief. LLM used that cue and got A, while video model and world model chose B, suggesting they underweighted the final action step in this short-horizon belief question."
  },
  {
    "id": "T3",
    "title": "Sequential Search Logic",
    "description": "MMToM-QA search-sequence reasoning with evolving beliefs.",
    "benchmarkRef": "line 5",
    "episode": 43,
    "questionType": "1.1",
    "timeWindow": "8-14",
    "expectedTilt": "LLM",
    "videoSrc": "clips/mmtom/T3_episode43.mp4",
    "pauseTime": 21.04,
    "question": "If Elizabeth has been trying to get a salmon, which one of the following statements is more likely to be true?",
    "options": {
      "a": "Elizabeth thinks that the salmon is inside the fridge.",
      "b": "Elizabeth thinks that the salmon is not inside the fridge."
    },
    "correctAnswer": "a",
    "textInputForLLM": "What's inside the apartment: The apartment consists of a bedroom, kitchen, living room, and bathroom. \nIn the bedroom, there is a coffee table and a desk. \nThe kitchen is equipped with four cabinets, a fridge, a kitchen table, a microwave, and a stove. The third cabinet from the left houses a bag of chips and a condiment bottle. Inside the fridge, there is a bottle of wine and a salmon. The second cabinet from the left contains two dish bowls, a water glass, and a plate. The first cabinet from the left has an apple, while the microwave contains a plate. The stove is empty, and the fourth cabinet from the left holds a dish bowl. \nThe living room features a cabinet, a sofa, a coffee table, and a desk. The cabinet contains two plates, an apple, a bag of chips, a wine glass, and a remote control. The coffee table is adorned with two plates, a book, a bottle of wine, a dish bowl, and a water glass. \nThe bathroom is fitted with a bathroom cabinet, which is currently empty. \nActions taken by Elizabeth: Elizabeth is situated in the bedroom. She proceeds to the kitchen, strides towards the stove, opens it, and subsequently closes it. She then advances towards the third kitchen cabinet, opens it, and then shuts it. Finally, she moves towards the fridge, preparing to open it. \nQuestion: If Elizabeth has been trying to get a salmon, which one of the following statements is more likely to be true? (a) Elizabeth thinks that the salmon is inside the fridge. (b) Elizabeth thinks that the salmon is not inside the fridge. Please respond with either a or b.",
    "modelResults": {
      "llm": {
        "label": "Text-only LLM",
        "answer": "A (confidence: 0.85)",
        "reasoning": "Summary: Elizabeth's actions suggest she believes the salmon is in the fridge, her final destination. Reasoning: Elizabeth systematically checked the stove and third cabinet (both empty of salmon), then moved toward the fridge. Her progression toward the fridge as a final step indicates she expects to find the salmon there, which matches the actual location.",
        "summary": "Elizabeth's actions suggest she believes the salmon is in the fridge, her final destination."
      },
      "vlm": {
        "label": "Video-language model",
        "answer": "B (confidence: 1.00)",
        "reasoning": "Summary: Elizabeth is in the kitchen, not the fridge. Reasoning: She walks into the kitchen after entering the room.",
        "summary": "Elizabeth is in the kitchen, not the fridge."
      },
      "worldModel": {
        "label": "World Model",
        "answer": "B (confidence: 0.61)",
        "reasoning": "Summary: Option B gives the stronger global consistency between VideoMAEv2 clip similarities and option-text similarities. Reasoning: The script evaluates all 2^10 A/B assignments and selects the one with the highest cross-test similarity-structure correlation; for this test, forced scores are A=0.1473, B=0.1837.",
        "summary": "Option B gives the stronger global consistency between VideoMAEv2 clip similarities and option-text similarities."
      }
    },
    "analysis": "Ground truth is A (Elizabeth thinks salmon is inside the fridge). The sequence matters: she checks other places first, then moves to open the fridge, which implies an updated belief after failed checks. LLM captured this ordered search logic, while video model and world model chose B, indicating weaker temporal belief-update tracking in this case."
  },
  {
    "id": "T4",
    "title": "Negative Belief Reasoning",
    "description": "MMToM-QA negative-belief inference case with compact context.",
    "benchmarkRef": "line 68",
    "episode": 201,
    "questionType": "1.3",
    "timeWindow": "7-7",
    "expectedTilt": "LLM",
    "videoSrc": "clips/mmtom/T4_episode201.mp4",
    "pauseTime": 9.04,
    "question": "If Mark has been trying to get a wine glass, which one of the following statements is more likely to be true?",
    "options": {
      "a": "Mark thinks that the wine glass is not inside the cabinet.",
      "b": "Mark thinks that the wine glass is inside the cabinet."
    },
    "correctAnswer": "a",
    "textInputForLLM": "What's inside the apartment: The apartment consists of a bedroom, kitchen, living room, and bathroom. \nIn the bedroom, there is a coffee table and a desk, with a book and a water glass placed on the coffee table. \nThe kitchen is equipped with four cabinets, a fridge, a kitchen table, a microwave, and a stove. The third cabinet, from left to right, is empty. The fridge contains three plates and two cupcakes. The second cabinet houses a water glass, while the first cabinet stores a bottle of wine. A salmon is cooking in the microwave, and another salmon, along with a plate, is in the stove. The fourth cabinet holds a condiment bottle. \nThe living room features a cabinet, a sofa, a coffee table, and a desk. Inside the cabinet, there are two wine glasses, a dish bowl, and an apple. The coffee table is adorned with a dish bowl, a plate, a wine glass, and a remote control. \nThe bathroom is furnished with a cabinet, which is currently empty. \nActions taken by Mark: Mark is situated in the kitchen. He strides towards the stove, opens it, subsequently closes it, and then proceeds towards the fridge. \nQuestion: If Mark has been trying to get a wine glass, which one of the following statements is more likely to be true? (a) Mark thinks that the wine glass is not inside the cabinet. (b) Mark thinks that the wine glass is inside the cabinet. Please respond with either a or b.",
    "modelResults": {
      "llm": {
        "label": "Text-only LLM",
        "answer": "B (confidence: 0.72)",
        "reasoning": "Summary: Mark's actions suggest he believes the wine glass is in the cabinet, not the kitchen. Reasoning: Mark went to the stove first (not a wine glass location), then to the fridge (also not containing wine glasses). Wine glasses are actually in the living room cabinet and on the living room coffee table. His movement pattern away from the kitchen suggests he thinks the wine glass is elsewhere, likely in the living room cabinet.",
        "summary": "Mark's actions suggest he believes the wine glass is in the cabinet, not the kitchen."
      },
      "vlm": {
        "label": "Video-language model",
        "answer": "A (confidence: 0.80)",
        "reasoning": "Summary: Mark is searching for a wine glass. Reasoning: Mark is seen walking around the room, indicating he is searching for something.",
        "summary": "Mark is searching for a wine glass."
      },
      "worldModel": {
        "label": "World Model",
        "answer": "A (confidence: 0.61)",
        "reasoning": "Summary: Option A gives the stronger global consistency between VideoMAEv2 clip similarities and option-text similarities. Reasoning: The script evaluates all 2^10 A/B assignments and selects the one with the highest cross-test similarity-structure correlation; for this test, forced scores are A=0.1837, B=0.1473.",
        "summary": "Option A gives the stronger global consistency between VideoMAEv2 clip similarities and option-text similarities."
      }
    },
    "analysis": "Ground truth is A (Mark thinks the wine glass is not inside the cabinet), which is a negative-belief inference. Video model and world model aligned with the search trajectory and answered A, consistent with elimination behavior. LLM answered B, likely anchoring on static scene priors instead of the clip-specific belief-tracking pattern."
  },
  {
    "id": "T5",
    "title": "Counterfactual Belief Prompt",
    "description": "MMToM-QA counterfactual prompt for goal disambiguation.",
    "benchmarkRef": "line 319",
    "episode": 96,
    "questionType": "2.1",
    "timeWindow": "0-13",
    "expectedTilt": "LLM",
    "videoSrc": "clips/mmtom/T5_episode96.mp4",
    "pauseTime": 21.24,
    "question": "If Jessica think there isn't a salmon inside the fridge, which one of the following statements is more likely to be true?",
    "options": {
      "a": "Jessica has been trying to get a salmon.",
      "b": "Jessica has been trying to get an apple."
    },
    "correctAnswer": "b",
    "textInputForLLM": "What's inside the apartment: The apartment consists of a bedroom, bathroom, living room, and kitchen. \nIn the bedroom, there is a coffee table and a desk, with a remote control, a water glass, and a plate placed on the coffee table. \nThe bathroom houses a cabinet, which is currently empty. \nThe living room is furnished with a cabinet, coffee table, desk, and a sofa. The cabinet stores a cupcake, an apple, a water glass, and two books, while the coffee table holds a plate and a dish bowl. \nThe kitchen is equipped with a stove, four cabinets, a microwave, a table, and a fridge. The stove and microwave are empty. The third cabinet, from left to right, contains a plate and a condiment bottle, while the fourth cabinet is empty. The second cabinet houses a plate and a bottle of wine, and the first cabinet is also empty. The fridge is stocked with a salmon, a plate, a bottle of wine, and a cupcake. \nActions taken by Jessica: Jessica is situated in the living room. She proceeds towards the kitchen, advances towards the microwave, opens it, then shuts it. Subsequently, she strides towards the stove, opens it, closes it, and finally, walks towards the refrigerator. \nQuestion: If Jessica think there isn't a salmon inside the fridge, which one of the following statements is more likely to be true? (a) Jessica has been trying to get a salmon. (b) Jessica has been trying to get an apple. Please respond with either a or b.",
    "modelResults": {
      "llm": {
        "label": "Text-only LLM",
        "answer": "A (confidence: 0.75)",
        "reasoning": "Summary: Jessica checked empty appliances then the fridge, suggesting she sought salmon despite believing it absent. Reasoning: Jessica's systematic search through microwave, stove, and fridge indicates she was looking for something specific. If she believes salmon isn't in the fridge yet still checks it, she was likely searching for salmon. The apple is in the living room cabinet, requiring no fridge search.",
        "summary": "Jessica checked empty appliances then the fridge, suggesting she sought salmon despite believing it absent."
      },
      "vlm": {
        "label": "Video-language model",
        "answer": "A (confidence: 0.90)",
        "reasoning": "Summary: Jessica is looking for food in the kitchen. Reasoning: She is seen entering the kitchen and looking around.",
        "summary": "Jessica is looking for food in the kitchen."
      },
      "worldModel": {
        "label": "World Model",
        "answer": "A (confidence: 0.59)",
        "reasoning": "Summary: Option A gives the stronger global consistency between VideoMAEv2 clip similarities and option-text similarities. Reasoning: The script evaluates all 2^10 A/B assignments and selects the one with the highest cross-test similarity-structure correlation; for this test, forced scores are A=0.1837, B=0.1544.",
        "summary": "Option A gives the stronger global consistency between VideoMAEv2 clip similarities and option-text similarities."
      }
    },
    "analysis": "Ground truth is B (Jessica has been trying to get an apple). The conditional premise (if she thinks there is no salmon in the fridge) should shift goal inference away from salmon. All three models chose A, which suggests they followed surface kitchen search behavior and underused the counterfactual condition in the question."
  },
  {
    "id": "T6",
    "title": "Mid-Length Goal Inference",
    "description": "MMToM-QA mid-length intent inference with moderate ambiguity.",
    "benchmarkRef": "line 493",
    "episode": 804,
    "questionType": "2.3",
    "timeWindow": "7-23",
    "expectedTilt": "Balanced",
    "videoSrc": "clips/mmtom/T6_episode804.mp4",
    "pauseTime": 25.0,
    "question": "Which one of the following statements is more likely to be true?",
    "options": {
      "a": "Mary has been trying to get a bag of chips.",
      "b": "Mary has been trying to get a condiment bottle."
    },
    "correctAnswer": "b",
    "textInputForLLM": "What's inside the apartment: The apartment consists of a bedroom, bathroom, living room, and kitchen. \nIn the bedroom, there is a cabinet and a sofa. The cabinet contains a condiment bottle, an apple, two wine glasses, and a plate. The sofa holds three books. \nThe bathroom features a cabinet, which is currently empty. \nThe living room is furnished with a desk and a sofa, with a book resting on the sofa. \nThe kitchen is equipped with eight cabinets, a sofa, a stove, a fridge, a kitchen table, a microwave, and a dishwasher. The first kitchen cabinet, from left to right, contains a bag of chips. The second and fourth cabinets are empty. The third cabinet houses a wine glass and a dish bowl. The fifth cabinet stores two plates. The sixth, seventh, and eighth cabinets are empty. The stove contains a cupcake. The fridge holds a plate and a dish bowl. The kitchen table is adorned with an apple, a bottle of wine, a plate, and a water glass. The microwave contains a condiment bottle and a salmon. Lastly, the dishwasher has a water glass inside. \nActions taken by Mary: Mary is situated in the living room. She proceeds towards the kitchen and heads to the second kitchen cabinet. She opens it, then promptly closes it. She then opens the fourth kitchen cabinet and closes it as well. Following this, she opens the dishwasher and closes it. She then moves towards the sixth kitchen cabinet, opens it, and closes it. She repeats this action with the fifth kitchen cabinet. Finally, she walks towards the first kitchen cabinet, opens it, and then closes it. \nQuestion: Which one of the following statements is more likely to be true? (a) Mary has been trying to get a bag of chips. (b) Mary has been trying to get a condiment bottle. Please respond with either a or b.",
    "modelResults": {
      "llm": {
        "label": "Text-only LLM",
        "answer": "A (confidence: 0.72)",
        "reasoning": "Summary: Mary opened cabinets containing chips and empty ones, suggesting she sought the chips. Reasoning: Mary specifically opened the first cabinet (containing chips), sixth (empty), fifth (plates), and fourth (empty) cabinets. She avoided the third cabinet (which has a wine glass and dish bowl) and didn't check the microwave (which contains a condiment bottle). Her pattern of opening the first cabinet last suggests it was her target.",
        "summary": "Mary opened cabinets containing chips and empty ones, suggesting she sought the chips."
      },
      "vlm": {
        "label": "Video-language model",
        "answer": "B (confidence: 0.90)",
        "reasoning": "Summary: Mary is in the kitchen, not trying to get a bag of chips. Reasoning: The video shows Mary entering the kitchen and interacting with items there, indicating she is focused on kitchen activities rather than obtaining a bag of chips.",
        "summary": "Mary is in the kitchen, not trying to get a bag of chips."
      },
      "worldModel": {
        "label": "World Model",
        "answer": "A (confidence: 0.55)",
        "reasoning": "Summary: Option A gives the stronger global consistency between VideoMAEv2 clip similarities and option-text similarities. Reasoning: The script evaluates all 2^10 A/B assignments and selects the one with the highest cross-test similarity-structure correlation; for this test, forced scores are A=0.1837, B=0.1672.",
        "summary": "Option A gives the stronger global consistency between VideoMAEv2 clip similarities and option-text similarities."
      }
    },
    "analysis": "Ground truth is B (Mary is more likely trying to get a condiment bottle), a Type 2.3 updated-belief case. She opens and closes multiple locations without retrieval, so the benchmark expects inference beyond simple nearest-object matching. Only the video model got B; LLM and world model chose A (chips), likely overfitting to the final cabinet interaction rather than the full update pattern."
  },
  {
    "id": "T7",
    "title": "Long Search Chain",
    "description": "MMToM-QA long-horizon belief tracking over many interactions.",
    "benchmarkRef": "line 214",
    "episode": 663,
    "questionType": "1.2",
    "timeWindow": "47-68",
    "expectedTilt": "World model",
    "videoSrc": "clips/mmtom/T7_episode663.mp4",
    "pauseTime": 25.0,
    "question": "If Thomas has been trying to get a wine glass, which one of the following statements is more likely to be true?",
    "options": {
      "a": "Thomas thinks that the wine glass is inside the stove.",
      "b": "Thomas thinks that the wine glass is not inside the stove."
    },
    "correctAnswer": "a",
    "textInputForLLM": "What's inside the apartment: The apartment consists of a bedroom, kitchen, living room, and bathroom. \nIn the bedroom, there are two desks and a cabinet, which contains two plates, two books, a wine glass, and a bottle of wine. \nThe kitchen is equipped with two tables, eight cabinets, a stove, a dishwasher, a microwave, and a fridge. The first, third, fourth, fifth, sixth, and eighth cabinets, from left to right, are empty. The second cabinet contains three dish bowls and a plate, while the seventh cabinet holds a plate. Inside the stove, there is a cupcake, and the dishwasher contains a plate. The microwave houses a condiment bottle and a salmon. On one of the kitchen tables, there is a cupcake. The fridge is stocked with a salmon, an apple, a bottle of wine, and a cupcake. \nThe living room features a coffee table and a sofa. On the coffee table, there is a book, a remote control, and a dish bowl. A book and a water glass can be found on the sofa. \nLastly, the bathroom has a cabinet, which is currently empty. \nActions taken by Thomas: Thomas is situated in the living room. He proceeds to the kitchen, makes his way to the fifth kitchen cabinet, opens it, and subsequently closes it. He then strides towards the microwave, opens and closes it. Thomas then approaches the first kitchen cabinet, opens and closes it, and repeats the same actions with the third kitchen cabinet. He then moves towards the fridge, opens and closes it, and does the same with the eighth kitchen cabinet. Thomas then heads towards the bathroom, approaches the bathroom cabinet, opens and closes it. He returns to the kitchen, walks towards the second kitchen cabinet, opens and closes it, and repeats the same actions with the fourth kitchen cabinet. Finally, he is about to open the stove. \nQuestion: If Thomas has been trying to get a wine glass, which one of the following statements is more likely to be true? (a) Thomas thinks that the wine glass is inside the stove. (b) Thomas thinks that the wine glass is not inside the stove. Please respond with either a or b.",
    "modelResults": {
      "llm": {
        "label": "Text-only LLM",
        "answer": "B (confidence: 0.72)",
        "reasoning": "Summary: Thomas has checked empty cabinets and other locations but not the bedroom cabinet where the wine glass actually is. Reasoning: Thomas systematically opened cabinets 1, 3, 4, 5, 8 (all empty), the microwave, fridge, and bathroom cabinet without finding a wine glass. Since he's now at the stove as a final check, he likely believes the wine glass is NOT in the stove, having exhausted other kitchen locations. The wine glass is actually in the bedroom cabinet, which he never checked.",
        "summary": "Thomas has checked empty cabinets and other locations but not the bedroom cabinet where the wine glass actually is."
      },
      "vlm": {
        "label": "Video-language model",
        "answer": "B (confidence: 0.90)",
        "reasoning": "Summary: Thomas does not think the wine glass is inside the stove. Reasoning: Thomas walks past the stove without interacting with it, suggesting he does not believe the wine glass is there.",
        "summary": "Thomas does not think the wine glass is inside the stove."
      },
      "worldModel": {
        "label": "World Model",
        "answer": "A (confidence: 0.61)",
        "reasoning": "Summary: Option A gives the stronger global consistency between VideoMAEv2 clip similarities and option-text similarities. Reasoning: The script evaluates all 2^10 A/B assignments and selects the one with the highest cross-test similarity-structure correlation; for this test, forced scores are A=0.1837, B=0.1473.",
        "summary": "Option A gives the stronger global consistency between VideoMAEv2 clip similarities and option-text similarities."
      }
    },
    "analysis": "Ground truth is A (Thomas thinks the wine glass is inside the stove). Although many locations were checked earlier, Type 1.2 emphasizes that being about to open a container indicates belief it may contain the target, even if wrong. World model matched this and chose A; LLM and video model chose B, reflecting elimination-style reasoning that conflicts with the benchmark false-belief rule."
  },
  {
    "id": "T8",
    "title": "Cross-Room Intent Inference",
    "description": "MMToM-QA cross-room trajectory for intent reasoning.",
    "benchmarkRef": "line 588",
    "episode": 1127,
    "questionType": "2.2",
    "timeWindow": "31-72",
    "expectedTilt": "World model",
    "videoSrc": "clips/mmtom/T8_episode1127.mp4",
    "pauseTime": 25.0,
    "question": "Which one of the following statements is more likely to be true?",
    "options": {
      "a": "John has been trying to get a cupcake.",
      "b": "John has been trying to get a bottle of wine."
    },
    "correctAnswer": "b",
    "textInputForLLM": "What's inside the apartment: The apartment consists of a bedroom, a bathroom, a living room, and a kitchen. \nIn the bedroom, there is a coffee table with a wine glass on it. \nThe bathroom houses a cabinet, which is currently empty. \nThe living room is furnished with a cabinet, a coffee table, a sofa, and a desk. The cabinet holds a water glass, an apple, a cupcake, two wine glasses, and two plates. \nThe kitchen is equipped with a fridge, a stove, a kitchen table, and a microwave. Inside the fridge, there are two bottles of wine, an apple, and a dish bowl. The stove contains a plate and a cupcake, while the microwave houses a salmon and a condiment bottle. \nActions taken by John: John is initially in the bathroom, then he proceeds to the kitchen. He approaches the microwave, opens it, and subsequently closes it. He then heads towards the living room and opens a cabinet, only to close it shortly after. John returns to the kitchen and walks towards the stove, opening and closing it. He then goes back to the bathroom, interacts with the bathroom cabinet by opening and closing it, and finally, he walks towards the kitchen again, this time heading for the fridge. \nQuestion: Which one of the following statements is more likely to be true? (a) John has been trying to get a cupcake. (b) John has been trying to get a bottle of wine. Please respond with either a or b.",
    "modelResults": {
      "llm": {
        "label": "Text-only LLM",
        "answer": "A (confidence: 0.75)",
        "reasoning": "Summary: John searched multiple locations where cupcakes are stored but not where wine is stored. Reasoning: John opened the microwave (has cupcake), stove (has cupcake), and living room cabinet (has cupcake), but never opened the fridge where wine is located. His search pattern matches cupcake locations.",
        "summary": "John searched multiple locations where cupcakes are stored but not where wine is stored."
      },
      "vlm": {
        "label": "Video-language model",
        "answer": "B (confidence: 0.90)",
        "reasoning": "Summary: The man is seen entering a kitchen. Reasoning: The video shows a man walking into a kitchen, which suggests he might be looking for something to drink, making option b more plausible.",
        "summary": "The man is seen entering a kitchen."
      },
      "worldModel": {
        "label": "World Model",
        "answer": "B (confidence: 0.53)",
        "reasoning": "Summary: Option B gives the stronger global consistency between VideoMAEv2 clip similarities and option-text similarities. Reasoning: The script evaluates all 2^10 A/B assignments and selects the one with the highest cross-test similarity-structure correlation; for this test, forced scores are A=0.1721, B=0.1837.",
        "summary": "Option B gives the stronger global consistency between VideoMAEv2 clip similarities and option-text similarities."
      }
    },
    "analysis": "Ground truth is B (John has been trying to get a bottle of wine). This cross-room goal inference requires integrating a longer action chain rather than just object co-occurrence in one location. Video model and world model correctly chose B, while LLM chose A, suggesting the text-only inference overweighted locally observed cupcake-related checks."
  },
  {
    "id": "T9",
    "title": "Long Trajectory Goal Inference",
    "description": "MMToM-QA long trajectory with delayed goal evidence.",
    "benchmarkRef": "line 388",
    "episode": 340,
    "questionType": "2.4",
    "timeWindow": "17-69",
    "expectedTilt": "World model",
    "videoSrc": "clips/mmtom/T9_episode340.mp4",
    "pauseTime": 25.0,
    "question": "Which one of the following statements is more likely to be true?",
    "options": {
      "a": "Emily has been trying to get a water glass.",
      "b": "Emily has been trying to get a salmon."
    },
    "correctAnswer": "a",
    "textInputForLLM": "What's inside the apartment: The apartment consists of a bedroom, bathroom, living room, and kitchen. \n\nIn the bedroom, there is a sofa, a cabinet, a desk, and a coffee table. A book rests on the sofa. The cabinet houses a wine glass, a remote control, a cupcake, two plates, and a condiment bottle. \n\nThe bathroom features a cabinet, which is currently empty. \n\nThe living room is furnished with a sofa, a desk, and a coffee table. A book is placed on the sofa, while a wine glass and another book are on the coffee table. \n\nThe kitchen is equipped with a dishwasher, a stove, a kitchen table, eight cabinets, a microwave, and a fridge. Inside the dishwasher, there is a bag of chips, a wine glass, a water glass, and a dish bowl. The stove contains a salmon. The second kitchen cabinet, from left to right, is empty. The eighth and fourth kitchen cabinets each contain a bottle of wine. The first kitchen cabinet is empty. The microwave houses a bag of chips. The fridge contains a salmon and an apple. The fifth, seventh, and third kitchen cabinets are empty. The sixth kitchen cabinet contains an apple. \nActions taken by Emily: Emily is situated in the living room. She proceeds to the kitchen and heads towards the third kitchen cabinet, which she opens and then shuts. She then opens the second kitchen cabinet and closes it. Emily walks over to the stove, opens it, and then closes it. She moves towards the refrigerator, opens it, and then shuts it. Emily then approaches the fifth kitchen cabinet, opens it, and then closes it. She opens the seventh kitchen cabinet and closes it. She opens the microwave and then closes it. Emily then heads towards the first kitchen cabinet, opens it, and then closes it. She walks towards the fourth kitchen cabinet, opens it, and then closes it. Emily then heads towards the bathroom, returns to the kitchen, and walks towards the eighth kitchen cabinet, opens it, and then closes it. She then heads towards the bedroom, returns to the kitchen, and walks towards the sixth kitchen cabinet. \nQuestion: Which one of the following statements is more likely to be true? (a) Emily has been trying to get a water glass. (b) Emily has been trying to get a salmon. Please respond with either a or b.",
    "modelResults": {
      "llm": {
        "label": "Text-only LLM",
        "answer": "B (confidence: 0.72)",
        "reasoning": "Summary: Emily systematically opened multiple cabinets and the stove/fridge, suggesting she searched for salmon rather than a water glass. Reasoning: Emily opened 7 of 8 kitchen cabinets, the stove, and the fridge. The water glass is in the dishwasher (which she didn't open), while salmon is in both the stove and fridge (both of which she opened). Her systematic search pattern matches looking for salmon more closely.",
        "summary": "Emily systematically opened multiple cabinets and the stove/fridge, suggesting she searched for salmon rather than a water glass."
      },
      "vlm": {
        "label": "Video-language model",
        "answer": "A (confidence: 0.90)",
        "reasoning": "Summary: Emily is seen entering a room and heading towards the kitchen. Reasoning: The video shows Emily walking from one room to the kitchen, suggesting she is trying to get something from there, which is more likely to be a common item like a glass of water rather than a specific food item like a salmon.",
        "summary": "Emily is seen entering a room and heading towards the kitchen."
      },
      "worldModel": {
        "label": "World Model",
        "answer": "B (confidence: 0.60)",
        "reasoning": "Summary: Option B gives the stronger global consistency between VideoMAEv2 clip similarities and option-text similarities. Reasoning: The script evaluates all 2^10 A/B assignments and selects the one with the highest cross-test similarity-structure correlation; for this test, forced scores are A=0.1501, B=0.1837.",
        "summary": "Option B gives the stronger global consistency between VideoMAEv2 clip similarities and option-text similarities."
      }
    },
    "analysis": "Ground truth is A (Emily has been trying to get a water glass), a Type 2.4 future-actions scenario. This type rewards forecasting where the current trajectory can lead, not only interpreting the most recent container checks. Video model was correct on A, while LLM and world model chose B (salmon), indicating stronger short-term cue bias in those two systems."
  },
  {
    "id": "T10",
    "title": "Long-Horizon Intent Test",
    "description": "MMToM-QA long-horizon social reasoning stress test.",
    "benchmarkRef": "line 408",
    "episode": 447,
    "questionType": "2.4",
    "timeWindow": "0-67",
    "expectedTilt": "World model",
    "videoSrc": "clips/mmtom/T10_episode447.mp4",
    "pauseTime": 25.0,
    "question": "Which one of the following statements is more likely to be true?",
    "options": {
      "a": "William has been trying to get a salmon.",
      "b": "William has been trying to get a bag of chips."
    },
    "correctAnswer": "a",
    "textInputForLLM": "What's inside the apartment: The apartment consists of a bedroom, a bathroom, a living room, and a kitchen. \nIn the bedroom, there is a sofa, a cabinet, a desk, and a coffee table. A bag of chips is placed on the sofa, while two apples and a wine glass are stored in the cabinet. A book rests on the coffee table. \nThe bathroom houses a single cabinet, which is currently empty. \nThe living room is furnished with a sofa, a desk, and a coffee table. A water glass and a book are situated on the sofa, and a remote control is on the coffee table. \nThe kitchen is equipped with a dishwasher, a stove, a kitchen table, eight cabinets, a microwave, and a fridge. Inside the dishwasher, there is a dish bowl, two water glasses, and a bag of chips. The stove is empty. The second cabinet from the left holds an apple, while the first cabinet contains a water glass and an apple. The microwave houses a bag of chips. Inside the fridge, there is a salmon and a bottle of wine. The fifth cabinet from the left stores a condiment bottle and a wine glass. The third, fourth, sixth, seventh, and eighth cabinets are all empty. \nActions taken by William: William is situated in the living room. He proceeds towards the kitchen, then to the dishwasher, which he opens and subsequently closes. He then opens the seventh kitchen cabinet and closes it, followed by the microwave, which he also opens and closes. He continues this pattern with the sixth, fourth, eighth, second, and third kitchen cabinets, as well as the stove. Afterward, he heads towards the first kitchen cabinet, opens it, and then closes it. He then makes his way to the bathroom, opens and closes the bathroom cabinet, and then heads towards the bedroom. Finally, he returns to the kitchen and walks towards the fifth kitchen cabinet. \nQuestion: Which one of the following statements is more likely to be true? (a) William has been trying to get a salmon. (b) William has been trying to get a bag of chips. Please respond with either a or b.",
    "modelResults": {
      "llm": {
        "label": "Text-only LLM",
        "answer": "B (confidence: 0.85)",
        "reasoning": "Summary: William systematically searched multiple locations containing chips but avoided the fridge with salmon. Reasoning: William opened the dishwasher (has chips), microwave (has chips), and multiple cabinets, but never opened the fridge where the salmon is stored. His search pattern matches locations with chips rather than the single salmon location.",
        "summary": "William systematically searched multiple locations containing chips but avoided the fridge with salmon."
      },
      "vlm": {
        "label": "Video-language model",
        "answer": "B (confidence: 0.80)",
        "reasoning": "Summary: The man is trying to get a bag of chips. Reasoning: The man is seen walking towards the kitchen and opening the cabinet, which suggests he is looking for something. The presence of a bag of chips on the counter supports the idea that he is trying to get it.",
        "summary": "The man is trying to get a bag of chips."
      },
      "worldModel": {
        "label": "World Model",
        "answer": "A (confidence: 0.60)",
        "reasoning": "Summary: Option A gives the stronger global consistency between VideoMAEv2 clip similarities and option-text similarities. Reasoning: The script evaluates all 2^10 A/B assignments and selects the one with the highest cross-test similarity-structure correlation; for this test, forced scores are A=0.1837, B=0.1501.",
        "summary": "Option A gives the stronger global consistency between VideoMAEv2 clip similarities and option-text similarities."
      }
    },
    "analysis": "Ground truth is A (William has been trying to get a salmon), also Type 2.4 goal inference with future-action reasoning. The question requires projecting beyond immediate chips-related interactions to likely next-step search intent. World model was the only one correct (A); LLM and video model chose B, showing stronger attraction to salient local cues than long-horizon intent forecasting."
  }
];
