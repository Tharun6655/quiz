const questions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "Madrid", "Berlin", "London"],
      correctAnswer: 1
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Mars", "Venus", "Earth", "Jupiter"],
      correctAnswer: 1
    },
    {
      question: "What is the largest mammal in the world?",
      options: ["Elephant", "Giraffe", "Blue Whale", "Hippopotamus"],
      correctAnswer: 3
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  function displayQuestion() {
    const questionText = document.getElementById("question-text");
    const optionElements = document.querySelectorAll(".option");
  
    if (currentQuestion < questions.length) {
      const current = questions[currentQuestion];
      questionText.textContent = current.question;
  
      for (let i = 0; i < optionElements.length; i++) {
        optionElements[i].textContent = current.options[i];
      }
    } else {
      questionText.textContent = "Quiz completed! Your score is: " + score + "/" + questions.length;
      optionElements.forEach((option) => option.style.display = "none");
      document.getElementById("result-text").style.display = "none";
      document.getElementById("next-button").style.display = "none";
    }
  }
  
  function checkAnswer(selectedOption) {
    const resultText = document.getElementById("result-text");
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      resultText.textContent = "Correct!";
      score++;
    } else {
      resultText.textContent = " Incorrect the correct  answer : " + questions[currentQuestion].options[questions[currentQuestion].correctAnswer];
    }
  
    resultText.style.display = "block";
    document.querySelectorAll(".option").forEach((option) => option.disabled = true);
  }
  
  function nextQuestion() {
    currentQuestion++;
    document.querySelectorAll(".option").forEach((option) => option.disabled = false);
    document.getElementById("result-text").style.display = "none";
    displayQuestion();
  }
  
  displayQuestion();
  