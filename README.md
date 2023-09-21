# Iago.no Style Guide

This style guide aims to provide some basic rules for this project. It mainly follows standard React conventions. 

## Table of Contents

1. [Basic Rules](#basic-rules)
2. [Naming](#naming)
3. [Declaration](#declaration)
4. [Alignment](#alignment)
5. [Props](#props)
6. [Refs](#refs)
7. [Parentheses](#parentheses)
8. [Methods](#methods)
9. [File/Folder Structure](#filefolder-structure)

---

## Basic Rules

1. **Always use JSX syntax.**
2. **Leave some time to refactor each new feature/component before pushing.**
3. **Do not use `React.createElement` unless you're initializing the app from a file that is not JSX.**
4. **Always use functional components unless you need state, lifecycle hooks, or performance optimizations.**

```jsx
// bad
class MyComponent extends React.Component {
  render() {
    return <div>Hello World</div>;
  }
}

// good
const MyComponent = () => {
  return <div>Hello World</div>;
};
```

---

## Naming

1. **Component Names**: Use PascalCase for React components and camelCase for their instances.

```jsx
// bad
const myComponent = () => {};

// good
const MyComponent = () => {};
```

2. **Props Naming**: Avoid using DOM component prop names for different purposes.

```jsx
// bad
<MyComponent style="fancy" />

// good
<MyComponent variant="fancy" />
```

---

## Declaration

1. **One Component Per File**: Each component should be in its own file.
2. **Single Export**: There should be one export per file.

```jsx
// bad
export const MyComponent = () => {};
export const MyOtherComponent = () => {};

// good
// MyComponent.jsx
export default function MyComponent() {}

// MyOtherComponent.jsx
export default function MyOtherComponent() {}
```

---

## Alignment

1. **Alignment for Props**: When the props don't fit on one line, give each prop its own line and close the tag on a new line.

```jsx
// bad
<MyComponent superLongParam="value" anotherSuperLongParam="value" />

// good
<MyComponent
  superLongParam="value"
  anotherSuperLongParam="value"
/>
```

---

## Props

1. **Props Ordering**: Always put key props first, then other props in alphabetical order.

```jsx
// bad
<MyComponent a="value" key={1} z="value" />

// good
<MyComponent key={1} a="value" z="value" />
```

---

## Refs

1. **String Refs**: We don't recommend using string refs. Use callback refs instead.

```jsx
// bad
<MyComponent ref="myRef" />

// good
<MyComponent ref={(ref) => { this.myRef = ref; }} />
```

---

## Parentheses

1. **Wrap JSX tags** in parentheses when they span more than one line.

```jsx
/// bad
render() {
  return <div className="myComponent">Hello World</div>;
}

// good
render() {
  return (
    <div className="myComponent">
      Hello World
    </div>
  );
}
```

---

## Methods

1. **Use arrow functions to close over local variables.**

```jsx
// bad
function handleClick() {
  console.log(this.state.message);
}

// good
handleClick = () => {
  console.log(this.state.message);
}
```

---

## File/Folder Structure

```
iago/
|-- public/                  # Static files
|   |-- index.html           # HTML template
|   |-- favicon.ico          # Favicon
|
|-- src/                     # Source files
|   |-- assets/              # Uncompiled/raw CSS, LESS, Sass, images, sounds, etc.
|   |   |-- images/          # Image files
|   |   |-- sounds/          # Sound files
|   |   |-- fonts/           # Font files
|   |
|   |-- components/          # React components
|   |   |-- Button/          # Each component gets its own folder
|   |   |   |-- index.jsx    # Main file for the Button component
|   |   |   |-- styles.css   # Styles specific to Button
|   |   |
|   |   |-- Header/
|   |   |   |-- index.jsx
|   |   |   |-- styles.css
|   |   |
|   |   |-- ...
|   |
|   |-- utils/               # Utility functions and classes
|   |
|   |-- styles/              # Global styles
|   |   |-- main.css         # Main stylesheet
|   |   |-- variables.css    # CSS variables and mixins
|   |   |-- ...
|   |  
|   |-- services/             # Scripts folder for large features
|   |   |-- auth.js           # Example script 1
|   |   |-- api.js            # Example script 2
|   |   |-- ...
|   |
|   |-- App.jsx              # Main App component
|   |-- index.js             # Entry point for the app
|
|-- package.json             # List of project dependencies and scripts
|-- README.md                # Project documentation
|-- .gitignore               # Files and folders to be ignored by Git
|-- ...

```

---
