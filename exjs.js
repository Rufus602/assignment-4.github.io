 // JavaScript code for the slot machine game
 var symbols = ["symbol1.png", "symbol2.png", "symbol3.png", "symbol4.png", "symbol5.png"];
 var reel1;
 var reel2;
 var reel3;
 var spinning = false;

 function startGame() {
     if (spinning) return;
     spinning = true;

     reel1 = document.getElementById("reel1");
     reel2 = document.getElementById("reel2");
     reel3 = document.getElementById("reel3");

     var resultElement = document.getElementById("game-result");
     resultElement.innerHTML = "";

     var spins = 3;
     var spinCount = 0;

     var spinInterval = setInterval(function () {
         if (spinCount === spins) {
             clearInterval(spinInterval);
             spinning = false;

             checkResult();
             return;
         }

         spinCount++;
         spinReel(reel1);
         spinReel(reel2);
         spinReel(reel3);
     }, 1000);
 }

 function spinReel(reel) {
     var randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
     reel.innerHTML = "<img src='" + randomSymbol + "'>";
 }

 function checkResult() {
     var symbol1 = reel1.firstChild.getAttribute("src");
     var symbol2 = reel2.firstChild.getAttribute("src");
     var symbol3 = reel3.firstChild.getAttribute("src");

     var resultElement = document.getElementById("game-result");

     if (symbol1 === symbol2 && symbol2 === symbol3) {
         resultElement.innerHTML = "Congratulations! You hit the jackpot!";
         resultElement.style.color = "green";
         var promoCode = generatePromoCode();
         resultElement.innerHTML += "<br><br>Your promo code: " + promoCode;
     } else {
         resultElement.innerHTML = "Better luck next time!";
         resultElement.style.color = "red";
     }
 }

 function generatePromoCode() {
     var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
     var promoCode = "";
     for (var i = 0; i < 8; i++) {
         promoCode += characters.charAt(Math.floor(Math.random() * characters.length));
     }
     return promoCode;
 }

 var personCards = document.querySelectorAll('.person-card');
 var delay = 300; // Delay between fading in each card

 function fadeInCards() {
     personCards.forEach(function (card, index) {
         setTimeout(function () {
             card.classList.add('show');
         }, delay * index);
     });
 }