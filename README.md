# Hyggex

Step 1: Create a new React project with Vite

npm install -g create-vite
Then, create a new React project with Vite:

create-vite Hyggex --template react

Step 2: Install Tailwind CSS

cd Hyggex
npm install tailwindcss@latest postcss@latest autoprefixer@latest

Step 3: Create Tailwind CSS configuration
Generate a Tailwind CSS configuration file using the following command:

npx tailwindcss init -p
This command will create a tailwind.config.js file and a postcss.config.js file in our project.

Step 4: Configure Tailwind CSS
In our tailwind.config.js file, added the following content to enable Tailwind CSS features:

module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

Step 5: Import Tailwind CSS in your project
In our main CSS file (e.g., src/index.css), import Tailwind CSS:

@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

Step 6: Start the development server
Run the following command to start the Vite development server:
npm run dev

This command will start the development server and open our project in the default web browser. Any changes we make to our React components or styles should be hot-reloaded in the browser.