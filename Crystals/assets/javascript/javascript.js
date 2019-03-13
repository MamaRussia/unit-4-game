//Here are the variables 
var counter = 0;
var wins = 0;
var loss = 0;
var targetNum = Math.floor(Math.random() * 207) + 19;;
var numberOptions = [14, 72, 9, 23] ;
var increment = numberOptions[Math.round(Math.random() * numberOptions.length)];
// var winsText = document.getElementById("wins");
// var lossesText = document.getElementById("loss");
var totalText = document.getElementById("counter");

// winsText.textContent = "Wins: " + wins;
// lossesText.textContent = "Losses: " + losses;
// totalText.textContent = "Total Loot: " + counter;

//swap out number to guess with the targetNum
$("#number-to-guess").text(targetNum);


// for ( var i = 0; i < numberOptions.length; i++) {

//     var imgHolder = $("<img>");
//     imgHolder.addClass("diamond-img");
//     imgHolder.attr("src", "assets/images/diamond.png");
//     imgHolder.attr("img-value-data", numberOptions[i]);
//     $("#diamond-img").append(imgHolder);
// }

//here we have the on click events for the images
$(".diamond-img").on("click",    //diamond img function
  function() {

    // var imgValue = ($(this).attr("img-value-data"));
    // imgValue = parseInt(imgValue);

    counter += increment
    $("#counter").text(counter);

    if(counter === targetNum){
        alert("How did you win?");
    } else if (counter >= targetNum) {
        alert("I smell failure in the air");
       
    }
  });

$(".gold-img").on("click",   //gold img function
  function() {
    counter += increment;
    $("#counter").text(counter);
    if(counter === targetNum){
        alert("How did you win?");
    } else if (counter >= targetNum) {
        alert("I smell failure in the air");
    }
  })

$(".baby-img").on("click",   //baby img function
  function() {
    counter += increment;
    $("#counter").text(counter);
    alert("Nothing beats the power of a child. Your points are " + counter + ". But please stop touching the baby");
    if(counter === targetNum){
        alert("How did you win?");
    } else if (counter >= targetNum) {
        alert("I smell failure in the air");
        
    }
})

  $(".silver-img").on("click", function() {   //silver img function
    counter += increment;
    $("#counter").text(counter);
    if(counter === targetNum){
        alert("How did you win?");
    } else if (counter >= targetNum) {
        alert("I smell failure in the air");
        loss++;
    }    
})

function loser() {
  counter = 0;
}

function reset() {
  wins=0;
  loss=0
}

$(".btn").on("click", function() {

  reset()
});