const emojiDetails = [
  { description: "Smiling face with sunglasses", emoji: "😎" },
  { description: "Thumbs up", emoji: "👍" },
  { description: "Heart eyes", emoji: "😍" },
  { description: "Crying face", emoji: "😢" },
  { description: "Party popper", emoji: "🎉" },
  { description: "Moon", emoji: "🌕" },
  { description: "poop", emoji: "💩" },
  { description: "Rocket", emoji: "🚀" },
  { description: "Sunflower", emoji: "🌻" },
  { description: "Fire", emoji: "🔥" },
  { description: "Pizza", emoji: "🍕" },
  { description: "Rainbow", emoji: "🌈" },
  { description: "Coffee", emoji: "☕" },
  { description: "Book", emoji: "📖" },
  { description: "Guitar", emoji: "🎸" },
  { description: "Football", emoji: "⚽" },
  { description: "Surfer", emoji: "🏄‍♂️" },
  { description: "Taco", emoji: "🌮" },
  { description: "Unicorn", emoji: "🦄" },
  { description: "Movie camera", emoji: "🎥" },
  { description: "Microphone", emoji: "🎤" },
  { description: "Smiling cat", emoji: "😺" },
  { description: "Angry face", emoji: "😡" },
  { description: "Snowman", emoji: "⛄" },
  { description: "Rain umbrella", emoji: "☔" },
  { description: "Bicycle", emoji: "🚲" },
  { description: "Dancing woman", emoji: "💃" },
  { description: "Fishing pole", emoji: "🎣" },
  { description: "Helicopter", emoji: "🚁" },
  { description: "Pineapple", emoji: "🍍" },
  { description: "Toilet", emoji: "🚽" },
  { description: "Smiling sun", emoji: "☀️" },
  { description: "Running shoe", emoji: "👟" },
  { description: "Kangaroo", emoji: "🦘" },
  { description: "Alarm clock", emoji: "⏰" },
  { description: "Sushi", emoji: "🍣" },
  { description: "Hot air balloon", emoji: "🎈" },
  { description: "Police car", emoji: "🚓" },
  { description: "Penguin", emoji: "🐧" },
  { description: "Computer", emoji: "💻" },
  { description: "Money bag", emoji: "💰" },
];



  let currentEmojiIndex = 0;
  let score = 0;
  let seconds=100;
  let timer;
  //


  //
  const guessInput = document.getElementById("guess-input");
  const resultElement = document.getElementById("result");
  const scoreElement = document.getElementById("score");
  const timerElement =document.getElementById("timer")

  function displayEmoji() {
    const descriptionElement = document.getElementById("description");
    descriptionElement.textContent = emojiDetails[currentEmojiIndex].emoji;
    timerElement.textContent=`Time Left:${seconds}s`
  }

  function checkGuess() {
    const guess = guessInput.value.trim().toLowerCase();
    const correctEmoji = emojiDetails[currentEmojiIndex].description.trim().toLowerCase();

    if (guess === correctEmoji) {
      resultElement.textContent = "✅";
      score++;
    } else {
      resultElement.textContent = "❌";
    }
    console.log(score);
    scoreElement.textContent = `Score: ${score}`;
    guessInput.value = "";
    guessInput.focus();
    nextEmoji();
  }

  function nextEmoji() {
    currentEmojiIndex++;
    setInterval(()=>{resultElement.textContent = ""},2000)
    if (currentEmojiIndex === emojiDetails.length) {
      currentEmojiIndex = 0;
      score=0;
    }

    displayEmoji();
    
  }

  document
    .getElementById("guess-input")
    .addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        checkGuess();
      }
    });

  document.addEventListener("DOMContentLoaded", () => {
    
    let n=emojiDetails.length;
    for (let i=0;i<n;i++){
      let j=Math.floor(Math.random()*n)
      let temp = emojiDetails[i];
      emojiDetails[i] = emojiDetails[j];
      emojiDetails[j] = temp;
    }
    displayEmoji();
    startTimer();
  });

  function startTimer(){
    timer=setInterval(()=>{
      seconds--;
      timerElement.textContent=`Time Left:${seconds}s`;
      if (seconds<=0){
        endGame();
      }

    },1000)
  }
  function endGame(){
    clearInterval(timer);
    guessInput.value=emojiDetails[currentEmojiIndex].description.trim().toLowerCase();
    guessInput.disabled=true;
    timerElement.textContent=''

  }
  