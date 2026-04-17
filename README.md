# Plain-Language Geoscience Explainer

**A web tool that translates technical mineral exploration reports into clear, accessible language — helping non-experts understand complex geoscience information.**

## The Problem This Solves

Technical topics like mineral exploration suffer from:

- **Fragmented information** scattered across dense government reports
- **Jargon-heavy language** that excludes non-experts
- **Misleading or unclear explanations** online
- **Traditional communication methods** that don't match how people consume information today

This tool directly addresses these challenges by making geoscience content **accessible, interactive, and credible**.

## Live Demo

[Add your GitHub Pages link here after deploying]

## Features

### Current Implementation

- **Real government data** – Uses Information Circular ME 84 (Nova Scotia Department of Natural Resources, February 2026)
- **Static Q&A section** – Three pre-loaded questions about Nova Scotia mineral exploration with clear answers
- **Original vs. plain language display** – Side-by-side comparison showing the translation process
- **Source citation** – Full attribution showing where information comes from
- **Mobile-responsive design** – Works on desktop, tablet, and mobile devices

### Technical Approach

- Pure HTML/CSS/JavaScript (no frameworks)
- JSON data storage for content
- Fetch API for local data loading
- Modular CSS architecture

## How to Run Locally

Since this project uses `fetch()` to load JSON data, you cannot simply open the HTML file directly (CORS policy blocks it). You need a local server:

### Option 1: Python (easiest)

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
Then open http://localhost:8000 in your browser

Option 2: VS Code Live Server
Install the Live Server extension, right-click index.html, and select "Open with Live Server"

Option 3: Node.js
bash
npx serve
Project Structure
text
plain-language-geoscience/
├── index.html              # Main page
├── README.md               # This file
├── css/
│   └── style.css          # All styling
├── js/
│   └── main.js            # Fetch logic + DOM manipulation
├── data/
│   └── sample-geoscience-text.json  # Content + Q&A pairs
└── assets/
    ├── images/            # Screenshots for README
    └── icons/             # UI icons (future)
How It Works
Page loads → JavaScript fetches sample-geoscience-text.json

Data displays → Original jargon and plain language versions appear

Q&A renders → Three question/answer pairs generated from JSON

User reads → Non-technical audience understands key findings about Nova Scotia mineral exploration

What I Learned
Technical Skills
Fetch API & async/await – Loading local JSON files and handling promises

CORS and local servers – Understanding why files need a server context

DOM manipulation – Dynamically creating elements and inserting content

Error handling – Graceful fallbacks when data fails to load

Domain Knowledge
Plain language translation – Converting technical phrases (e.g., "unprecedented levels" → "record-breaking surge")

Geoscience terminology – Understanding exploration licences, hectares, critical minerals

Government document navigation – Extracting key information from dense reports (Information Circular ME 84)

Design for Understanding
Visual hierarchy – Color-coding original (yellow highlight) vs. plain language (green highlight)

Progressive disclosure – Showing jargon first, then plain version, then Q&A

Credibility markers – Source citation at the bottom of every content block

Source Credibility
Primary Source: Information Circular ME 84 – Mineral Production and Exploration Report
Publisher: Nova Scotia Department of Natural Resources
Date: February 2026
Pages Used: 3-4 (exploration licence data)

This is an authoritative government document. All Q&A answers are directly derived from or based on data within this report.

Future Improvements (Planned)
Short-term
Source credibility indicator – Badge system showing "Verified (Government)" vs. "User-submitted (Unverified)"

Character/word count comparison – Show how much shorter plain language is

Copy to clipboard button – One-click copy of translated text

Reading level score – Flesch-Kincaid grade level for original vs. plain

Medium-term
Clickable jargon definitions – Popup explanations for technical terms

Quiz mode – Hide Q&A answers until user clicks "Reveal"

Multiple translation modes – "Quick" (word swaps) vs. "Detailed" (sentence restructuring)

Long-term
LLM integration – Real AI summarization (requires backend API)

PDF upload – Allow users to upload their own geoscience reports

Interactive map – Show exploration licence locations in Nova Scotia

Why This Project Fits the ShiftKey NRII Role
Job Requirement How This Project Demonstrates It
Translate geoscience content to plain language Extracted technical data from a real government report and rewrote it at grade 8 reading level
Make information accessible and interactive Q&A section lets users explore specific questions without reading entire reports
Use technology for modern delivery Web-based tool that works on any device, follows modern UX patterns
Build credible, trustworthy explanations Cited source document, preserved original text alongside plain version
Prototype from concept to working demo Complete, deployable web application with real data
Technologies Used
HTML5

CSS3 (Flexbox, Grid, media queries)

JavaScript (ES6+)

Fetch API

JSON




