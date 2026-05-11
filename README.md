# WorldModelDemo
**Can AI See What's Next?**

An interactive benchmark that compares predictions from an **LLM**, **vision model**, and **world model** on MMToM-QA clips.

## Deployment Target
This project is deployed as a static site on **GitHub Pages**.

Live URL:
- `https://InfoSeeking.github.io/WorldModelDemo/`

## Models Used
- **LLM:** Claude 4.5 Haiku
- **Vision Model:** Amazon Nova Pro
- **World Model:** VideoMAE v2

## Structure
```
WorldModelDemo/
├── index.html          # Clip picker / home page
├── results.html        # Prediction + comparison page
├── css/style.css       # Design system & styles
├── js/app.js           # App logic
├── data/mmtomClips.js  # MMToM-QA clips, Q/A, model outputs, and analysis
├── clips/mmtom/        # Demo video files used by the website
└── clips/testin/       # Benchmark records, prompts, and model output logs
```

## How It Works
1. User picks a clip from the library
2. Video plays and **pauses before the key moment**
3. User types their prediction
4. Results revealed: **Your prediction · Ground Truth · LLM · Vision Model · World Model**
5. Analysis summarizes how each model output lines up with the clip outcome
