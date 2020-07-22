const correctAnswers = ["B", "B", "A", "B", "A", "B"];

const form = document.querySelector(".quiz-form");

const result = document.querySelector(".result");
const span = document.querySelector("span");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let score = 0;
  let correct = 0;

  const userAnswers = [
    e.target.q1.value,
    e.target.q2.value,
    e.target.q3.value,
    e.target.q4.value,
    e.target.q5.value,
    e.target.q6.value,
  ];
  // check answers

  for (let i = 0; i < correctAnswers.length; i++) {
    if (correctAnswers[i] === userAnswers[i]) {
      correct += 1;

      score = Math.round((correct / correctAnswers.length) * 100, 2);
    }
  }

  scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });

  result.classList.remove("d-none");

  let output = 0;
  const timer = setInterval(() => {
    result.querySelector("span").textContent = `${output}%`;
    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);
});
