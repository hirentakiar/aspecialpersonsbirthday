document.addEventListener("DOMContentLoaded", () => {
    const startGameButton = document.getElementById("start-game");
    const gameArea = document.getElementById("game-area");
    const balloonContainer = document.getElementById("balloon-container");
    const scoreDisplay = document.getElementById("score");

    let score = 0;

    startGameButton.addEventListener("click", () => {
        gameArea.classList.remove("hidden");
        balloonContainer.innerHTML = ""; // Clear previous balloons
        score = 0;
        scoreDisplay.textContent = "Score: " + score;
        spawnBalloons(10);
    });

    function spawnBalloons(count) {
        for (let i = 0; i < count; i++) {
            let balloon = document.createElement("div");
            balloon.classList.add("balloon");
            balloon.style.backgroundColor = getRandomColor();
            balloon.addEventListener("click", popBalloon);
            balloonContainer.appendChild(balloon);
        }
    }

    function popBalloon(event) {
        event.target.remove();
        score += 10;
        scoreDisplay.textContent = "Score: " + score;
    }

    function getRandomColor() {
        const colors = ["red", "blue", "green", "yellow", "purple", "pink", "orange"];
        return colors[Math.floor(Math.random() * colors.length)];
    }
});
