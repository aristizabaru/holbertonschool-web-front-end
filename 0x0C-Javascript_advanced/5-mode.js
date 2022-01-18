function changeMode(size, weight, transform, background, color) {
  return function applyMode() {
    document.body.style.fontSize = `${size}px`;
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.background = background;
    document.body.style.color = color;
  };
}

function createElement(element) {
  return function generateContent(content) {
    const tag = document.createElement(element);
    const innerHTML = document.createTextNode(content);
    tag.appendChild(innerHTML);
    return document.body.appendChild(tag);
  };
}

function main() {
  // clousures
  const spooky = changeMode(9, "bold", "uppercase", "pink", "green");
  const darkMode = changeMode(12, "bold", "capitalize", "black", "white");
  const screamMode = changeMode(12, "normal", "lowercase", "white", "black");
  const paragraph = createElement("p");
  const button = createElement("button");

  // generate elements
  paragraph("Welcome Holberton!");
  const buttons = [
    button("Spooky"),
    button("Dark mode"),
    button("Scream mode"),
  ];

  // listeners
  buttons[0].addEventListener("click", () => {
    spooky();
  });
  buttons[1].addEventListener("click", () => {
    darkMode();
  });
  buttons[2].addEventListener("click", () => {
    screamMode();
  });
}
main();
