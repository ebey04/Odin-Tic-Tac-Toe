# Odin’s Tic-Tac-Toe  
A responsive, accessible, and fully modular Tic-Tac-Toe game built in JavaScript as part of The Odin Project curriculum.

This version features a Norse-inspired UI theme, clean modular architecture using IIFEs, and full game state management (wins, ties, reset flow).

---

## 🎮 Live Demo  
*https://ebey04.github.io/Odin-Tic-Tac-Toe/*

---

## ✨ Features

### 🧠 Game Logic
- Full win detection using pattern matching  
- Tie detection when the board has no empty cells  
- Player switching between X and O  
- Centralized game state handled through a GameController module  

### 🎨 UI / UX
- Custom theme inspired by Norse mythology & runic aesthetics  
- Smooth hover and click transitions  
- Clear visual focus indicators for accessibility  
- Responsive layout suitable for desktop and tablet  
- Status messages update dynamically during play  

### ♿ Accessibility
- `aria-live="polite"` for announcing turn changes and results  
- Proper `role="grid"` and `role="gridcell"` attributes  
- Visible focus states  
- Color contrast tested against WCAG AA  

---

## 🧩 Architecture

This project uses a **modular JavaScript structure** with the Revealing Module Pattern via **IIFEs**, keeping the global namespace clean:

### `GameBoard`  
- Stores board state  
- Provides helpers for reading & writing tiles  
- Handles board reset  

### `Player`  
- Factory function for creating player objects  
- Stores player names and tokens  

### `GameController`  
- Core game logic  
- Win/tie detection  
- Player switching  
- Turn validation  
- Game reset  

### `DisplayController`  
- Handles DOM rendering  
- Updates tiles  
- Shows messages  
- Manages reset button visibility  
- Adds event listeners for mouse + keyboard  

---

## 🛠️ Technologies Used
- **HTML5**  
- **CSS3** (Grid, transitions, focus styling)  
- **JavaScript (ES6)**  
- IIFE modules  
- Factory functions  

---
