import React from "react";
function Blog2() {
  return (
    <div>
      <h1>Managing State in React</h1>
      <p>
        State management is an essential part of building dynamic applications in React. State represents data that can change over time in your application.
      </p>
      <h2>How to Manage State</h2>
      <ul>
        <li><strong>useState Hook:</strong> For managing local state in functional components.</li>
        <li><strong>useReducer Hook:</strong> For more complex state management.</li>
        <li><strong>Context API:</strong> For sharing state globally without prop drilling.</li>
        <li><strong>Redux:</strong> A powerful library for large-scale state management.</li>
      </ul>
      <p>
        Understanding state management helps build interactive and scalable web applications with React.
      </p>
    </div>
  );
}
export default Blog2;
