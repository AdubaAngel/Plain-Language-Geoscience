const jargonElement = document.getElementById('jargon-content');
const plainElement = document.getElementById('plain-content');
const qnaContainer = document.getElementById('qna-container');

async function getData() {
  const data = "data/sample-geoscience-text.json";
  try {
    const response = await fetch(data);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    console.log(result);
    
    // Display original jargon
    jargonElement.textContent = result.original;
    
    // Display plain language
    plainElement.textContent = result.plainLanguage;
    
    // Clear and build Q&A section
    qnaContainer.innerHTML = "";
    
    result.qnaPairs.forEach(pair => {
      const card = document.createElement('div');
      card.className = 'qa-card';
      
      const questionDiv = document.createElement('div');
      questionDiv.className = 'qa-question';
      questionDiv.textContent = pair.question;
      
      const answerDiv = document.createElement('div');
      answerDiv.className = 'qa-answer';
      answerDiv.textContent = pair.answer;
      
      card.appendChild(questionDiv);
      card.appendChild(answerDiv);
      qnaContainer.appendChild(card);
    });
    
    // Add source citation
    const sourceNote = document.createElement('div');
    sourceNote.className = 'source-note';
    sourceNote.innerHTML = `Source: ${result.source} (Page ${result.page})`;
    qnaContainer.appendChild(sourceNote);
    
  } catch (error) {
    console.error(error.message);
    // Optional: show error on page
    jargonElement.textContent = "Error loading data. Please check that the JSON file exists.";
  }
}

getData();

function simplifyText(text) {
    // Step 1: Lowercase for matching? No — keep case but swap words

    
    const replacements = {
    "unprecedented": "record-breaking",
    "utilized": "used",
    "commenced": "started",
    "subsequent": "later",
    "approximately": "about",
    "demonstrates": "shows",
    "implementation": "use",
    "significant": "large",
    "expansion": "growth",
    "facilitate": "help"
};
    
    // Step 3: Break long sentences (split on periods, rejoin)
    
    // Step 4: Remove passive voice where easy ("was issued" → "issued")
    
    // Step 5: Return simplified text
}