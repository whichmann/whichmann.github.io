import './game/game-element';

const game = document.createElement('game-tetris');

const root = document.getElementById('root');

if (root) {
  root.appendChild(game);
}