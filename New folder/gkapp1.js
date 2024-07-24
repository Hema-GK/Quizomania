const quizData = [{
  question: "What is the capital of France ?",
  a: "Rome",
  b: "Madrid",
  c: "Paris",
  d: "Berlin",
  correct: "c",
},
{
  question: "Which planet is known as the Red Planet?",
  a: "Earth",
  b: "Mars",
  c: "Jupiter",
  d: " Venus",
  correct: "b",
},
{
  question: " What is the largest ocean on Earth?",
  a: "Atlantic Ocean",
  b: " Indian Ocean",
  c: "Arctic Ocean",
  d: "Pacific Ocean",
  correct: "d",
},
{
  question: "Which animal is known as the 'King of the Jungle' ?",
  a: "Elephant",
  b: "Lion",
  c: "Tiger",
  d: "Bear",
  correct: "b",
}
];
let index = 0;
let correct = 0,
incorrect = 0,
total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
if (total === index) {
  return quizEnd()
}
reset()
const data = quizData[index]
questionBox.innerHTML = `${index + 1}) ${data.question}`
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
"click",
function() {
  const data = quizData[index]
  const ans = getAnswer()
  if (ans === data.correct) {
      correct++;
  } else {
      incorrect++;
  }
  index++;
  loadQuestion()
}
)

const getAnswer = () => {
let ans;
allInputs.forEach(
  (inputEl) => {
      if (inputEl.checked) {
          ans = inputEl.value;
      }
  }
)
return ans;
}

const reset = () => {
allInputs.forEach(
  (inputEl) => {
      inputEl.checked = false;
  }
)
}

const quizEnd = () => {
// console.log(document.getElementsByClassName("container"));
document.getElementsByClassName("container")[0].innerHTML = `
  <div class="col">
      <h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
  </div>
<div >
<button type="submit" class="col2"><a href="index.html">Close</a></button>
</div>
`
}
loadQuestion(index);