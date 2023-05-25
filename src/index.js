import './style.css';
import {
  displayScores,
  addGameScore,
} from './modules/gameFunction.js';

// call displayScores function to display scores stored in the api
displayScores();

// event listener for submit button
const submitButton = document.getElementById('btnAddScore');
submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  addGameScore();
  displayScores();
});

// event listener for refresh button
const refreshBtn = document.getElementById('btnRefresh');
refreshBtn.addEventListener('click', () => {
  displayScores();
});