window.mmtomClips = [
  {
    "id": "T1",
    "title": "Belief Inference: About to Open",
    "description": "MMToM-QA belief inference case with a single-step prediction point.",
    "benchmarkRef": "line 56",
    "episode": 187,
    "questionType": "1.2",
    "timeWindow": "7-7",
    "expectedTilt": "LLM",
    "videoSrc": "clips/mmtom_full/T1_episode187.mp4",
    "pauseTime": 7.0,
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
        "label": "Vision Model",
        "answer": "A (confidence: 0.90)",
        "reasoning": "Summary: Michael does not find the wine bottle in the microwave. Reasoning: Michael searches various locations in the house but does not check the microwave.",
        "summary": "Michael does not find the wine bottle in the microwave."
      },
      "worldModel": {
        "label": "World Model",
        "answer": "B (confidence: 0.51)",
        "reasoning": "Summary: Retrieved world-model text is more similar to option B. Reasoning: Nearest V-JEPA2 reference clip is clip_rotating_cup_reveal_easy (cosine=0.784); text-overlap scores are A=0.795, B=0.802.",
        "summary": "Retrieved world-model text is more similar to option B."
      }
    },
    "analysis": "Ground truth: B. LLM answered A (incorrect), Vision model answered A (incorrect), World model answered B (correct). Correct on this test: World model."
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
    "videoSrc": "clips/mmtom_full/T2_episode43.mp4",
    "pauseTime": 7.0,
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
        "label": "Vision Model",
        "answer": "B (confidence: 0.90)",
        "reasoning": "Summary: Elizabeth does not think the wine glass is in the stove. Reasoning: She walks past the stove without stopping, indicating she does not believe the wine glass is there.",
        "summary": "Elizabeth does not think the wine glass is in the stove."
      },
      "worldModel": {
        "label": "World Model",
        "answer": "A (confidence: 0.52)",
        "reasoning": "Summary: Retrieved world-model text is more similar to option A. Reasoning: Nearest V-JEPA2 reference clip is clip_rotating_cup_reveal_hard (cosine=0.794); text-overlap scores are A=0.799, B=0.791.",
        "summary": "Retrieved world-model text is more similar to option A."
      }
    },
    "analysis": "Ground truth: A. LLM answered A (correct), Vision model answered B (incorrect), World model answered A (correct). Correct on this test: LLM, World model."
  },
  {
    "id": "T3",
    "title": "Sequential Search Logic",
    "description": "MMToM-QA search-sequence reasoning with evolving beliefs.",
    "benchmarkRef": "line 369",
    "episode": 333,
    "questionType": "2.4",
    "timeWindow": "33-41",
    "expectedTilt": "LLM",
    "videoSrc": "clips/mmtom_full/T3_episode333.mp4",
    "pauseTime": 41.0,
    "question": "Which one of the following statements is more likely to be true?",
    "options": {
      "a": "Jessica has been trying to get a plate.",
      "b": "Jessica has been trying to get an apple."
    },
    "correctAnswer": "a",
    "textInputForLLM": "What's inside the apartment: The apartment consists of a bedroom, bathroom, living room, and kitchen. \n\nIn the bedroom, there is a sofa, a cabinet, a desk, and a coffee table. The cabinet houses two cupcakes, a bottle of wine, and a bag of chips. A remote control rests on the coffee table. \n\nThe bathroom features a cabinet, which is currently empty. \n\nThe living room is furnished with a sofa, a coffee table, and a desk. On the sofa, there is a water glass, a dish bowl, a wine glass, and a cupcake. The coffee table holds a water glass, a remote control, a book, and a wine glass. \n\nThe kitchen is equipped with eight cabinets, a microwave, a fridge, a dishwasher, a kitchen table, and a stove. The fourth cabinet from the left contains a water glass. The microwave is empty, while the fridge stores a dish bowl, an apple, and a plate. The seventh cabinet from the left holds a plate. The dishwasher is empty. The kitchen table is adorned with a wine glass, a condiment bottle, a book, and an apple. The second cabinet from the left is empty, while the eighth cabinet houses two dish bowls. The first cabinet from the left is empty. The fifth cabinet from the left contains a condiment bottle. The third cabinet from the left holds a plate. The sixth cabinet from the left is empty. Lastly, the stove contains two salmons and a plate. \nActions taken by Jessica: Jessica is situated in the bedroom. She proceeds towards the bathroom, approaches the bathroom cabinet, opens it, and subsequently closes it. She then makes her way to the kitchen, heads towards the fourth kitchen cabinet, opens it, and then shuts it. Following this, she returns to the bedroom, walks towards a cabinet, opens it, and then closes it. Finally, she heads back to the kitchen and approaches the fifth kitchen cabinet. \nQuestion: Which one of the following statements is more likely to be true? (a) Jessica has been trying to get a plate. (b) Jessica has been trying to get an apple. Please respond with either a or b.",
    "modelResults": {
      "llm": {
        "label": "Text-only LLM",
        "answer": "A (confidence: 0.72)",
        "reasoning": "Summary: Jessica opened cabinets containing a plate but none containing apples. Reasoning: Jessica opened the bathroom cabinet (empty), fourth kitchen cabinet (water glass), bedroom cabinet (cupcakes, wine, chips), and approached the fifth kitchen cabinet (condiment bottle). Plates are in the third and seventh kitchen cabinets and on the stove, while apples are only in the fridge and on the kitchen table—locations she never opened.",
        "summary": "Jessica opened cabinets containing a plate but none containing apples."
      },
      "vlm": {
        "label": "Vision Model",
        "answer": "A (confidence: 0.90)",
        "reasoning": "Summary: Jessica is seen trying to get a plate in the video. Reasoning: The video shows Jessica reaching for a plate on a table.",
        "summary": "Jessica is seen trying to get a plate in the video."
      },
      "worldModel": {
        "label": "World Model",
        "answer": "A (confidence: 0.50)",
        "reasoning": "Summary: Retrieved world-model text is more similar to option A. Reasoning: Nearest V-JEPA2 reference clip is clip_rotating_cup_reveal_easy (cosine=0.782); text-overlap scores are A=0.580, B=0.580.",
        "summary": "Retrieved world-model text is more similar to option A."
      }
    },
    "analysis": "Ground truth: A. LLM answered A (correct), Vision model answered A (correct), World model answered A (correct). Correct on this test: LLM, Vision model, World model."
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
    "videoSrc": "clips/mmtom_full/T4_episode201.mp4",
    "pauseTime": 7.0,
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
        "label": "Vision Model",
        "answer": "A (confidence: 0.90)",
        "reasoning": "Summary: Mark is looking for a wine glass in the cabinet. Reasoning: Mark is seen searching the kitchen, indicating he thinks the wine glass is not inside the cabinet.",
        "summary": "Mark is looking for a wine glass in the cabinet."
      },
      "worldModel": {
        "label": "World Model",
        "answer": "B (confidence: 0.52)",
        "reasoning": "Summary: Retrieved world-model text is more similar to option B. Reasoning: Nearest V-JEPA2 reference clip is clip_rotating_cup_reveal_hard (cosine=0.814); text-overlap scores are A=0.791, B=0.799.",
        "summary": "Retrieved world-model text is more similar to option B."
      }
    },
    "analysis": "Ground truth: A. LLM answered B (incorrect), Vision model answered A (correct), World model answered B (incorrect). Correct on this test: Vision model."
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
    "videoSrc": "clips/mmtom_full/T5_episode96.mp4",
    "pauseTime": 13.0,
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
        "label": "Vision Model",
        "answer": "A (confidence: 0.90)",
        "reasoning": "Summary: Jessica is trying to get a salmon. Reasoning: The video shows Jessica repeatedly entering the kitchen and interacting with the fridge, suggesting she is looking for something inside it, likely the salmon.",
        "summary": "Jessica is trying to get a salmon."
      },
      "worldModel": {
        "label": "World Model",
        "answer": "A (confidence: 0.50)",
        "reasoning": "Summary: Retrieved world-model text is more similar to option A. Reasoning: Nearest V-JEPA2 reference clip is clip_rotating_cup_reveal_easy (cosine=0.777); text-overlap scores are A=0.713, B=0.712.",
        "summary": "Retrieved world-model text is more similar to option A."
      }
    },
    "analysis": "Ground truth: B. LLM answered A (incorrect), Vision model answered A (incorrect), World model answered A (incorrect). No model matched ground truth on this test."
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
    "videoSrc": "clips/mmtom_full/T6_episode804.mp4",
    "pauseTime": 23.0,
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
        "label": "Vision Model",
        "answer": "A (confidence: 0.90)",
        "reasoning": "Summary: Mary is seen entering a room and then a kitchen. Reasoning: Mary's actions in the video do not suggest she is trying to get either a bag of chips or a condiment bottle.",
        "summary": "Mary is seen entering a room and then a kitchen."
      },
      "worldModel": {
        "label": "World Model",
        "answer": "B (confidence: 0.52)",
        "reasoning": "Summary: Retrieved world-model text is more similar to option B. Reasoning: Nearest V-JEPA2 reference clip is clip_rotating_cup_reveal_hard (cosine=0.816); text-overlap scores are A=0.582, B=0.590.",
        "summary": "Retrieved world-model text is more similar to option B."
      }
    },
    "analysis": "Ground truth: B. LLM answered A (incorrect), Vision model answered A (incorrect), World model answered B (correct). Correct on this test: World model."
  },
  {
    "id": "T7",
    "title": "Long Search Chain",
    "description": "MMToM-QA long-horizon belief tracking over many interactions.",
    "benchmarkRef": "line 395",
    "episode": 345,
    "questionType": "2.2",
    "timeWindow": "43-43",
    "expectedTilt": "World model",
    "videoSrc": "clips/mmtom_full/T7_episode345.mp4",
    "pauseTime": 43.0,
    "question": "Which one of the following statements is more likely to be true?",
    "options": {
      "a": "Charles has been trying to get a wine glass.",
      "b": "Charles has been trying to get a book."
    },
    "correctAnswer": "b",
    "textInputForLLM": "What's inside the apartment: The apartment consists of a bedroom, bathroom, living room, and kitchen. \nIn the bedroom, there is a sofa, a cabinet, a desk, and a coffee table. The cabinet houses a cupcake and two books. \nThe bathroom features a cabinet, which is currently empty. \nThe living room is furnished with a sofa, a coffee table, and a desk. A dish bowl is placed on the sofa, while the coffee table holds a plate, a book, and a wine glass. \nThe kitchen is equipped with eight cabinets, a microwave, a fridge, a dishwasher, a kitchen table, and a stove. The fourth cabinet from the left contains a condiment bottle and a water glass. Inside the microwave, there is a plate. The fridge stores two bottles of wine, two apples, and a cupcake. The seventh cabinet from the left is empty. A wine glass is found in the dishwasher. The kitchen table is laden with a salmon, a bag of chips, a wine glass, and three water glasses. The second and eighth cabinets from the left are empty. The first cabinet from the left has an apple, while the fifth one contains a condiment bottle. The third and sixth cabinets from the left are also empty. Lastly, a cupcake is tucked inside the stove. \nActions taken by Charles: Charles is situated in the kitchen. He strides towards the third kitchen cabinet, opens it, and subsequently shuts it. He then proceeds to the seventh kitchen cabinet, opens and closes it as well. Charles continues his pattern with the second, eighth, first, fourth, and sixth kitchen cabinets, opening and closing each in turn. Finally, he walks towards the bedroom and approaches a cabinet. \nQuestion: Which one of the following statements is more likely to be true? (a) Charles has been trying to get a wine glass. (b) Charles has been trying to get a book. Please respond with either a or b.",
    "modelResults": {
      "llm": {
        "label": "Text-only LLM",
        "answer": "B (confidence: 0.72)",
        "reasoning": "Summary: Charles systematically checked empty cabinets and kitchen cabinets without wine glasses, then went to bedroom where books are stored. Reasoning: Charles opened cabinets 3, 7, 2, 8, 1, 4, 6 in the kitchen - most are empty or don't contain wine glasses. Wine glasses are in the dishwasher, on the coffee table, and kitchen table, not in these cabinets. He then went to the bedroom cabinet where books are actually stored (cupcake and two books in bedroom cabinet).",
        "summary": "Charles systematically checked empty cabinets and kitchen cabinets without wine glasses, then went to bedroom where books are stored."
      },
      "vlm": {
        "label": "Vision Model",
        "answer": "A (confidence: 0.90)",
        "reasoning": "Summary: Charles is trying to get a wine glass. Reasoning: Charles is seen reaching for a wine glass on the table.",
        "summary": "Charles is trying to get a wine glass."
      },
      "worldModel": {
        "label": "World Model",
        "answer": "B (confidence: 0.53)",
        "reasoning": "Summary: Retrieved world-model text is more similar to option B. Reasoning: Nearest V-JEPA2 reference clip is clip_rotating_cup_reveal_easy (cosine=0.807); text-overlap scores are A=0.568, B=0.580.",
        "summary": "Retrieved world-model text is more similar to option B."
      }
    },
    "analysis": "Ground truth: B. LLM answered B (correct), Vision model answered A (incorrect), World model answered B (correct). Correct on this test: LLM, World model."
  },
  {
    "id": "T8",
    "title": "Cross-Room Intent Inference",
    "description": "MMToM-QA cross-room trajectory for intent reasoning.",
    "benchmarkRef": "line 425",
    "episode": 464,
    "questionType": "2.4",
    "timeWindow": "26-39",
    "expectedTilt": "World model",
    "videoSrc": "clips/mmtom_full/T8_episode464.mp4",
    "pauseTime": 39.0,
    "question": "Which one of the following statements is more likely to be true?",
    "options": {
      "a": "William has been trying to get a cupcake.",
      "b": "William has been trying to get an apple."
    },
    "correctAnswer": "a",
    "textInputForLLM": "What's inside the apartment: The apartment consists of a bedroom, bathroom, living room, and kitchen. \nIn the bedroom, there is a sofa, a cabinet, a desk, and a coffee table. A book rests on the sofa. The cabinet houses an apple, a wine glass, two books, and two cupcakes. The coffee table holds a book, a water glass, a wine glass, and a remote control. \nThe bathroom contains a cabinet, which is currently empty. \nThe living room is furnished with a sofa, a coffee table, and a desk. A water glass sits on the sofa, and a remote control is on the coffee table. \nThe kitchen is equipped with eight cabinets, a microwave, a fridge, a dishwasher, a kitchen table, and a stove. The fourth and seventh cabinets, from left to right, are empty, as is the eighth. The second cabinet contains a water glass, while the first holds a bag of chips and a wine glass. An apple is stored in the fifth cabinet, and a condiment bottle in the third. The sixth cabinet is also empty. The microwave houses a salmon, a cupcake, and a condiment bottle. The fridge contains two bottles of wine, a cupcake, an apple, and two dish bowls. The dishwasher has a dish bowl, a wine glass, and a plate. Lastly, a salmon is cooking in the stove. \nActions taken by William: William is situated in the bathroom. He proceeds towards the kitchen, making his way to the dishwasher which he opens and subsequently closes. He then navigates to the first kitchen cabinet, opens it, and then shuts it. Following this, he moves towards the seventh kitchen cabinet, opens it, and then closes it. He then strides towards the stove, opens it, and then closes it. He continues his journey to the second kitchen cabinet, opens it, and then closes it. He then advances to the fifth kitchen cabinet, opens it, and then closes it. He then heads towards the fourth kitchen cabinet, opens it, and then closes it. Finally, he walks towards the sixth kitchen cabinet. \nQuestion: Which one of the following statements is more likely to be true? (a) William has been trying to get a cupcake. (b) William has been trying to get an apple. Please respond with either a or b.",
    "modelResults": {
      "llm": {
        "label": "Text-only LLM",
        "answer": "B (confidence: 0.72)",
        "reasoning": "Summary: William systematically opened cabinets containing or potentially containing apples, suggesting he seeks an apple. Reasoning: William opened cabinets 1, 2, 4, 5, 6, 7 and the dishwasher/stove. The fifth cabinet contains an apple. Cabinets 4, 6, 7 are empty, but cabinet 5 (which he opened) has an apple. Cupcakes are in the bedroom cabinet, microwave, and fridge—locations he didn't visit. His systematic cabinet search pattern aligns better with finding an apple.",
        "summary": "William systematically opened cabinets containing or potentially containing apples, suggesting he seeks an apple."
      },
      "vlm": {
        "label": "Vision Model",
        "answer": "A (confidence: 1.00)",
        "reasoning": "Summary: The man is in the kitchen. Reasoning: The man is seen walking into the kitchen and interacting with the microwave.",
        "summary": "The man is in the kitchen."
      },
      "worldModel": {
        "label": "World Model",
        "answer": "A (confidence: 0.56)",
        "reasoning": "Summary: Retrieved world-model text is more similar to option A. Reasoning: Nearest V-JEPA2 reference clip is clip_ball_rolling_off_table (cosine=0.800); text-overlap scores are A=0.604, B=0.572.",
        "summary": "Retrieved world-model text is more similar to option A."
      }
    },
    "analysis": "Ground truth: A. LLM answered B (incorrect), Vision model answered A (correct), World model answered A (correct). Correct on this test: Vision model, World model."
  },
  {
    "id": "T9",
    "title": "Long Trajectory Goal Inference",
    "description": "MMToM-QA long trajectory with delayed goal evidence.",
    "benchmarkRef": "line 530",
    "episode": 914,
    "questionType": "2.2",
    "timeWindow": "41-41",
    "expectedTilt": "World model",
    "videoSrc": "clips/mmtom_full/T9_episode914.mp4",
    "pauseTime": 41.0,
    "question": "Which one of the following statements is more likely to be true?",
    "options": {
      "a": "Jennifer has been trying to get a plate.",
      "b": "Jennifer has been trying to get a condiment bottle."
    },
    "correctAnswer": "a",
    "textInputForLLM": "What's inside the apartment: The apartment consists of a bedroom, bathroom, living room, and kitchen. \nIn the bedroom, there is a cabinet and a sofa. The cabinet houses a wine glass, two bottles of wine, a bag of chips, two apples, a water glass, and a remote control. \nThe bathroom is equipped with a cabinet, which is currently empty. \nThe living room contains a desk and a sofa, with a book and a water glass placed on the sofa. \nThe kitchen is furnished with eight cabinets, a sofa, a stove, a fridge, a kitchen table, a microwave, and a dishwasher. The first, third, fourth, and eighth cabinets, from left to right, are empty. The second cabinet contains a water glass, the fifth cabinet has an apple, the sixth cabinet holds a condiment bottle, and the seventh cabinet stores a wine glass. A bag of chips is on the sofa. Inside the stove, there is a plate. The fridge contains a salmon, an apple, and a cupcake. The microwave houses a salmon, a condiment bottle, and a cupcake, while the dishwasher has a water glass. \nActions taken by Jennifer: Jennifer is situated in the kitchen. She opens the fifth kitchen cabinet, then closes it. She proceeds to do the same with the sixth and eighth kitchen cabinets. Following this, she opens and closes the fridge. Jennifer then moves towards the second kitchen cabinet, opens it, and then closes it. She repeats this action with the microwave and the dishwasher. Subsequently, she walks towards the bathroom, approaches the bathroom cabinet, opens it, and then closes it. Finally, she returns to the kitchen and walks towards the stove. \nQuestion: Which one of the following statements is more likely to be true? (a) Jennifer has been trying to get a plate. (b) Jennifer has been trying to get a condiment bottle. Please respond with either a or b.",
    "modelResults": {
      "llm": {
        "label": "Text-only LLM",
        "answer": "B (confidence: 0.72)",
        "reasoning": "Summary: Jennifer systematically searched multiple locations containing condiment bottles but never accessed the stove with the plate. Reasoning: Jennifer opened the sixth cabinet (condiment bottle), microwave (condiment bottle), and dishwasher, but never opened the stove where the plate is located. Her search pattern matches locations with condiment bottles rather than the plate's location.",
        "summary": "Jennifer systematically searched multiple locations containing condiment bottles but never accessed the stove with the plate."
      },
      "vlm": {
        "label": "Vision Model",
        "answer": "A (confidence: 0.90)",
        "reasoning": "Summary: Jennifer was seen taking a plate from the kitchen. Reasoning: Jennifer was observed taking a plate from the kitchen, which aligns with option (a).",
        "summary": "Jennifer was seen taking a plate from the kitchen."
      },
      "worldModel": {
        "label": "World Model",
        "answer": "A (confidence: 0.53)",
        "reasoning": "Summary: Retrieved world-model text is more similar to option A. Reasoning: Nearest V-JEPA2 reference clip is clip_rotating_cup_reveal_easy (cosine=0.797); text-overlap scores are A=0.580, B=0.568.",
        "summary": "Retrieved world-model text is more similar to option A."
      }
    },
    "analysis": "Ground truth: A. LLM answered B (incorrect), Vision model answered A (correct), World model answered A (correct). Correct on this test: Vision model, World model."
  },
  {
    "id": "T10",
    "title": "Long-Horizon Intent Test",
    "description": "MMToM-QA long-horizon social reasoning stress test.",
    "benchmarkRef": "line 545",
    "episode": 972,
    "questionType": "2.2",
    "timeWindow": "29-43",
    "expectedTilt": "World model",
    "videoSrc": "clips/mmtom_full/T10_episode972.mp4",
    "pauseTime": 43.0,
    "question": "Which one of the following statements is more likely to be true?",
    "options": {
      "a": "Karen has been trying to get a water glass.",
      "b": "Karen has been trying to get a remote control."
    },
    "correctAnswer": "b",
    "textInputForLLM": "What's inside the apartment: The apartment consists of a bedroom, a bathroom, a living room, and a kitchen. \nIn the bedroom, there is a coffee table. \nThe bathroom houses a cabinet, which is currently empty. \nThe living room is furnished with a cabinet, a coffee table, a sofa, and a desk. Inside the cabinet, you'll find two bottles of wine, two remote controls, two cupcakes, a water glass, and an apple. The coffee table holds a water glass and a wine glass. \nThe kitchen is equipped with a fridge, a stove, a kitchen table, and a microwave. Inside the fridge, there are two apples, a dish bowl, a cupcake, and a salmon. The stove contains a cupcake and a plate. The microwave stores two bags of chips and a condiment bottle. \nActions taken by Karen: Karen is situated in the bedroom. She proceeds towards the bathroom, approaches the bathroom cabinet, opens it, and subsequently closes it. She then navigates her way to the kitchen, strides towards the fridge, opens it, and then shuts it. She opens the microwave, closes it, opens the stove, and then closes it. Finally, she walks towards the living room and approaches a cabinet. \nQuestion: Which one of the following statements is more likely to be true? (a) Karen has been trying to get a water glass. (b) Karen has been trying to get a remote control. Please respond with either a or b.",
    "modelResults": {
      "llm": {
        "label": "Text-only LLM",
        "answer": "B (confidence: 0.72)",
        "reasoning": "Summary: Karen systematically searched multiple locations, ending at the living room cabinet where remote controls are stored. Reasoning: Karen opened the bathroom cabinet (empty), then checked the kitchen appliances (fridge, microwave, stove) without taking anything, finally approaching the living room cabinet. Water glasses are readily available in the living room coffee table, requiring no search. Remote controls are only in the living room cabinet, matching her systematic search pattern.",
        "summary": "Karen systematically searched multiple locations, ending at the living room cabinet where remote controls are stored."
      },
      "vlm": {
        "label": "Vision Model",
        "answer": "A (confidence: 0.80)",
        "reasoning": "Summary: Karen is seen trying to get a water glass. Reasoning: Karen is observed in the kitchen, reaching into the refrigerator, which is a common place to store water glasses.",
        "summary": "Karen is seen trying to get a water glass."
      },
      "worldModel": {
        "label": "World Model",
        "answer": "A (confidence: 0.50)",
        "reasoning": "Summary: Retrieved world-model text is more similar to option A. Reasoning: Nearest V-JEPA2 reference clip is clip_rotating_cup_reveal_easy (cosine=0.785); text-overlap scores are A=0.568, B=0.568.",
        "summary": "Retrieved world-model text is more similar to option A."
      }
    },
    "analysis": "Ground truth: B. LLM answered B (correct), Vision model answered A (incorrect), World model answered A (incorrect). Correct on this test: LLM."
  }
];
