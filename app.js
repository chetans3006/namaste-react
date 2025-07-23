const heading = React.createElement(
  "h1",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h2", null, "I am an h2 tag"),
    React.createElement("h3", null, "I am an h3 tag")
  ),
  "hello world from React"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
