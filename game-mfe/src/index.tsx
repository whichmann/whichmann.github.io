import React from 'react';
import { createRoot } from 'react-dom/client';
import Game from './game/Game';

const root = document.getElementById('root');

if (root) {
  createRoot(root).render(<Game />);
}