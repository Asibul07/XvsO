# X vs O - Tic-Tac-Toe Game

A simple yet intelligent **Tic-Tac-Toe** game built using **Angular**, **Bootstrap**, and **Bootstrap Icons**. The game supports both single-player (against AI) and two-player modes, and comes with a fully functional AI opponent that uses the **minimax algorithm** to play optimally.

## Features

- **Single-player Mode:** Play against a challenging AI opponent.
- **Two-player Mode:** Play locally with a friend.
- **AI with Minimax Algorithm:** The AI evaluates the best possible moves using the minimax algorithm, ensuring an optimal challenge.
- **Score Tracking:** Keeps track of wins, losses, and ties for both modes.
- **Responsive Design:** Built with Bootstrap, ensuring a clean and responsive layout.

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Asibul07/XvsO.git
   cd XvsO
   ```

2. **Install dependencies**:

   Ensure you have **Node.js** and **Angular CLI** installed.

   ```bash
   npm install
   ```

3. **Run the application**:

   ```bash
   ng serve
   ```

   Open your browser and navigate to `http://localhost:4200`.

## Development Server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code Scaffolding

Run `ng generate component component-name` to generate a new component. You can also use:

- `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running Unit Tests

Run `ng test` to execute the unit tests via Karma.

## Running End-to-End Tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Usage

- **Single-player Mode:** Play against the AI by making your move on the grid. The AI will automatically respond with its move.
- **Two-player Mode:** Toggle between single-player and two-player modes using the provided button. In two-player mode, both players alternate turns.
- **Reset Game:** The game will automatically reset after each round, but you can also reset it manually by refreshing the page.

## How the AI Works

The AI opponent uses the **minimax algorithm** to calculate the best possible move. Here's a quick overview:

1. The AI looks for available spots on the board.
2. It simulates possible future moves and scores them based on win, loss, or tie.
3. The AI selects the move with the best score to play optimally.

## Game Logic

- A player wins when they align three identical marks (✘ or O) horizontally, vertically, or diagonally.
- The game ends in a tie if all spots are filled and no player has won.
- Scoreboard tracks each player's wins, ties, and losses.

## Technologies Used

- **Angular**: Frontend framework for building the app.
- **TypeScript**: Used for writing the game logic and components.
- **Bootstrap**: Ensures the game has a responsive and sleek design.
- **Bootstrap Icons**: Used for icons and visual elements.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Further Help

To get more help on the Angular CLI, use `ng help` or check out the [Angular CLI Overview and Command Reference](https://angular.io/cli).
