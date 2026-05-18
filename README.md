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
- **World Model:** V-JEPA 2

## Structure
```
WorldModelDemo/
├── index.html          # Clip picker / home page
├── results.html        # Prediction + comparison page
├── css/style.css       # Design system & styles
├── js/app.js           # App logic
├── data/mmtomClips.js  # MMToM-QA clips, Q/A, model outputs, and analysis
├── clips/              # Demo video files used by the website
```

## How It Works
1. User picks a clip from the library
2. Video plays the full clip, then the MMToM-QA question appears
3. User can submit a prediction (optional)
4. Results revealed: **Ground Truth · LLM · Vision Model · World Model** (and **Your prediction**, if provided)
5. Analysis summarizes how each model output lines up with the clip outcome
