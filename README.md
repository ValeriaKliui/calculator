# Task

[Link to Task Document](https://drive.google.com/file/d/15jVnBPXaZrjs99KOUxp4TGq6Inau6xq_)

# Getting Started

## Prerequisites

Ensure the following are installed on your system:

- Node.js (v16 or later recommended)
- npm (comes with Node.js)

### 1. Clone the Repository

Clone the project repository and navigate into the directory:

```git clone <https://github.com/ValeriaKliui/calculator>
cd calculator
```

### 2. Install Dependencies

Install the required npm packages:

```
npm install
```

### 3. Run the App

Start the development server:

```
npm run dev
```

The app will be served at http://localhost:3000.

### 4. Build the App

Generate a production-ready build:

```
npm run build
```

The build will be output to the dist directory.

### 5. Lint and Format Code

Run ESLint to check for and fix code issues:

```
npm run lint
```

### 6. Deploy to GitHub Pages

Deploy the app to GitHub Pages:

```
npm run deploy
```

# Project Structure

### Structure of `public/`:

```plaintext
public/
├── index.html                         # HTML file that serves as the entry point to the app.
└── favicon.ico                        # The favicon that appears in the browser tab.
```

### Structure of `src/`:

```plaintext
src/
├── constants/                         # Reusable constants for the application.
├── features/                          # JavaScript files for specific features
│   ├── Calculator/
│   └── ThemeToggler/                  # Toggles between different themes.
├── styles/                            # SCSS files for styling the application.
├── test/                              # Init tests for math functions.
├── utils/                             # Utility functions organized into categories.
│   ├── math/                          # Mathematical utility functions.
│   └── string/                        # String manipulation functions.
└── index.js                           # The main JavaScript file that runs the app.
```
