$(document).ready(function() {

var randomNumberToMatch;
        
var crystalOneValue;
var crystalTwoValue;
var crystalThreeValue;
var crystalFourValue;

var totalScore = 0;
var wins = 0;
var losses = 0;

// On start or reset (startUp function)
function startUp() {
    // Generate random number to match (between 19 and 120)
    randomNumberToMatch = Math.floor(Math.random() * 120) + 19;
    // Display in '#random-number'
    $('#random-number').text(randomNumberToMatch);
    // Assign random values to 4 crystals (between 1 and 12)
    function randomValue() {
        return Math.floor(Math.random() * 12) + 1;
    }
    crystalOneValue = randomValue();
    crystalTwoValue = randomValue();
    crystalThreeValue = randomValue();
    crystalFourValue = randomValue();
    console.log(crystalOneValue + ", " + crystalTwoValue + ", " + crystalThreeValue + ", " + crystalFourValue);
    // Reset total score to 0
    totalScore = 0;
    $('.total-score').text('Total Score: ' + totalScore);
    $('.total-wins').text('Wins: ' + wins);
    $('.total-losses').text('Losses: ' + losses);
}
startUp();

function checkProgress() {
    // When total score = random number to match
    if (totalScore === randomNumberToMatch) {
        // Display 'You win!!' in '.progress-report'
        $('.progress-report').text('You win!!!');
        // Add 1 to wins
        wins++;
        // Display total wins
        $('.total-wins').text('Wins: ' + wins);
        // Call startUp function to reset game
        startUp();
    }
     // If score > random number to match
    else if (totalScore > randomNumberToMatch) {
        // Display 'You lose' in '.progress-report'
        $('.progress-report').text('Sorry, you lose!');
        // Add 1 to losses
        losses++;
        // Display total losses
        $('.total-losses').text('Losses: ');
        // Call startUp function to reset game
        startUp();
    }   
}
    
// Every time a crystal button is clicked (on click event)
// Add value to total score
$('.crystal-1-button').on("click", function() {
   totalScore = totalScore + crystalOneValue;
   $('.total-score').text('Total Score: ' + totalScore);
   checkProgress();
});
$('.crystal-2-button').on("click", function() {
   totalScore = totalScore + crystalTwoValue;
   $('.total-score').text('Total Score: ' + totalScore);
   checkProgress();
});
$('.crystal-3-button').on("click", function() {
   totalScore = totalScore + crystalThreeValue;
   $('.total-score').text('Total Score: ' + totalScore);
   checkProgress();
});
$('.crystal-4-button').on("click", function() {
   totalScore = totalScore + crystalFourValue;
   $('.total-score').text('Total Score: ' + totalScore);
   checkProgress();
});

});