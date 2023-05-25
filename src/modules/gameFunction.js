const baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const gameId = '6lbvUiU6NvtGL9BW17VD';
const url = `${baseURL}games/${gameId}/scores/`;

// Get all game scores from the leaderboard api
export const displayScores = async () => {
  const response = await fetch(url);
  const data = await response.json();
  const scores = data.result;
  const scoresList = document.getElementById('scoreList');
  scoresList.innerHTML = '';
  scores.forEach((score) => {
    const li = document.createElement('li');
    li.textContent = `${score.user} : ${score.score}`;
    scoresList.appendChild(li);
  });
};

// add a score into the api
export const addGameScore = async () => {
  const form = document.querySelector('form');
  await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: form.elements.name.value,
      score: form.elements.score.value,
    }),
  });
  form.reset();
};
