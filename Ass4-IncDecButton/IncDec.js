let count = document.getElementById("counter");
let error = document.getElementById("error");
let counter = 0;
count.innerHTML = counter;
// const increment = () => {
//   counter++;
//   count.innerHTML = counter;
// };
const increment = () => {
  return new Promise((resolve, reject) => {
    this.addEventListener('click',function(e) {
        counter++;
        count.innerHTML = counter;
        resolve(something);
    }, {once: true});
  });
};
// const decrement = () => {
//   counter--;
//   count.innerHTML = counter;
// };
const decrement = () => {
  return new Promise((resolve, reject) => {
    this.addEventListener('click',function(e) {
        counter--;
        count.innerHTML = counter;
        resolve(something);
    }, {once: true});
  });
}
// const reset = () => {
//   counter = 0;
//   count.innerHTML = counter;
// };
const Reset = () => {
  return new Promise((resolve, reject) => {
    this.addEventListener('click',function(e) {
        counter = 0;
        console.log(counter);
        count.innerHTML = counter;
        resolve(something);
    }, {once: true});
  });
}