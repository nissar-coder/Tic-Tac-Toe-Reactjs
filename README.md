# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



Tic Tac Toe — React
A classic Tic Tac Toe game built with React and Vite, featuring visual icons for X and O, win detection, and full game reset.

🎮 Demo
Two players take turns clicking cells. The first to align three in a row — horizontally, vertically, or diagonally — wins. The title bar announces the winner with their icon.

📁 Project Structure
src/
├── Assets/
│   ├── cross.png
│   └── circle.png
├── Components/
│   └── TicTacToe/
│       ├── TicTacToe.jsx
│       └── TicTacToe.css
└── App.jsx

✨ Features

🔁 Two-player turn-based gameplay — X always goes first
🏆 Automatic win detection across all 8 winning patterns
🔒 Move locking once a winner is found
🔄 Reset button to fully restart the game
🖼️ Custom PNG icons for both X and O pieces


🚀 Getting Started
bashgit clone https://github.com/your-username/tic-tac-toe-react.git
cd tic-tac-toe-react
npm install
npm run dev
Open http://localhost:5173 in your browser.

🛠️ Tech Stack

React 18
Vite
Plain CSS


📌 Known Limitations

No draw detection when all 9 cells are filled
Icons injected via innerHTML rather than React state (anti-pattern)
No AI opponent — human vs. human only


📄 License
MIT
Author Nissar Mehsud
