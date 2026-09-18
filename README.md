# 🧱 Dev Stack

A responsive **Dev Stack Builder** that helps developers explore technologies and create their own development stack. The interface follows the provided Figma direction with a clean white layout, compact cards, a shared orange → pink → violet gradient, and a responsive mobile experience.

## ✨ Features

- Browse technologies from a separate JSON file.
- Add/remove technologies from **Your Stack** with duplicate protection.
- Responsive navbar, hero, technology grid, stack sidebar, projects, about, contact and footer.

## 🛠️ Technologies

- React.js
- TypeScript
- Tailwind CSS
- Vite
- React-Toastify
- JSON

## 📦 Run locally

```bash
npm install
npm run dev
```

## 🧠 React Questions

### 1. What is JSX, and why is it used in React?
JSX is a syntax that lets us write UI-like HTML inside JavaScript or TypeScript. React uses it to describe what the interface should look like in a readable way.

### 2. What is the difference between props and state?
Props are values passed from a parent component to a child component. State is data a component owns and can change over time.

### 3. What does the `useState` hook do, and where did you use it in this project?
`useState` stores changing data inside a component. I used it for the technology list, selected stack, loading state, active category, and mobile menu state.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
`useEffect` runs side effects after rendering. I used it to fetch the local JSON file when the app loads, then update the technology list.

### 5. Why does every item in a `.map()` list need a unique `key` prop?
React uses the key to identify each item between renders. A stable unique key helps React update the correct item efficiently.

### 6. What is conditional rendering? Show one place you used it.
Conditional rendering means showing different UI depending on a condition. In the stack sidebar, I show an empty message when `stack.length === 0`; otherwise I show the selected technologies.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
The parent passes data through props. The parent can also pass a function as a prop, and the child calls that function to send an event or value back.