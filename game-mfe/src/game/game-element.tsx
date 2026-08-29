import r2wc from '@r2wc/react-to-web-component';
import Game from './Game';

const GameElement = r2wc(Game);

customElements.define('game-tetris', GameElement);