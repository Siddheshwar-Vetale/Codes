let history = document.getElementById("btn1");
let vision = document.getElementById("btn2");
let goals = document.getElementById("btn3");
let text = document.getElementById("text");
const showHistory = () => {
  text.innerHTML = `<b>History</b>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>`;
  history.style.backgroundColor = "white";
  vision.style.backgroundColor = "#E3E8F0";
  goals.style.backgroundColor = "#E3E8F0";
};
const showVision = () => {
  text.innerHTML = `<b>Vision</b>
    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy</p>`;
    history.style.backgroundColor = "#E3E8F0";
    vision.style.backgroundColor = "white";
    goals.style.backgroundColor = "#E3E8F0";
};
const showGoals = () => {
  text.innerHTML = `<b>Goals</b>
    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,</p>`;
    history.style.backgroundColor = "#E3E8F0";
    vision.style.backgroundColor = "#E3E8F0";
    goals.style.backgroundColor = "white";
};
showHistory();