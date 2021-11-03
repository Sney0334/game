// General function that will update the HTML content dinamically
const buildDom = (html) => {
    const main = document.querySelector("main");
    main.innerHTML = html;
  };
  
  // First Screen => Splash Screen
  const buildSplashScreen = () => {
    buildDom(`
    <img src="./images/game_logo.jpeg" alt="" style="width:50%;" />
    <br />
    <button id="start-button">
        <img src="./images/game_start_button.png">
    </button>
    `);
    const startButton = document.getElementById("start-button");
    startButton.addEventListener("click", buildGameScreen);
  };
  
   // Second Screen => Game Screen
  const buildGameScreen = () => {
    buildDom(`
    <canvas id="canvas"></canvas>  
    <button id="end-button">End Game</button>
    `);
  
    const endButton = document.getElementById("end-button");
    endButton.addEventListener("click", buildGameOver);
    const canvas1=document.getElementById('canvas')
    const canvas = new Canvas2dGraphics(canvas1);
    canvas.init();
  };
  /*
  // Third Screen => Game Over
  const buildGameOver = () => {
    buildDom(`
    <section class="game-over">
    <h1>Game Over</h1>
    <button id = "game"> TRY AGAIN</button>
    <div class= "pointer"> </div>
    </section>
    `);
  
    const restartButton = document.querySelector("button");
    restartButton.addEventListener("click", buildGameScreen);
  };
  
  // When the window loads, then we will run the "buildSplashScreen" function
  // "load" waits for the html and JS */
  window.addEventListener("load", buildSplashScreen);