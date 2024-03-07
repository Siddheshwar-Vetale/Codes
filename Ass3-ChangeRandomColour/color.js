const changeBackgroundColor = () => {
  let color = ["red", "orange", "blue", "green", "pink"];
  let btn = document.getElementById("btn");
  btn.addEventListener(
    "click",
    (changeColor = () => {
      let randomColor = color[Math.floor(Math.random() * color.length)];
      document.body.style.background = randomColor;
      let showColor = (document.getElementById("colorName").innerHTML =
        randomColor);
    })
  );
};
