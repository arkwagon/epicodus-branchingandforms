// $(document).ready(function() {
  // $("form#quiz").submit(function(event) {

$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    var ageNumber = parseInt( $("input#age").val() );
    var daysOff = parseInt( $("input#days").val() );
    var moneyAmount = parseInt( $("input#money").val() );
    var travelerAmount = parseInt( $("input#people").val() );
    var funLevel = parseInt( $("input#fun").val() );

    if ((ageNumber >= 65 && ageNumber <= 85) || (moneyAmount > 100000) || ) {
      $("#lakeoswego").show();
    } else if ((ageNumber >= 30) && (daysOff >= 10) && (moneyAmount >= 10000) && (moneyAmount <= 99999) (travelerAmount <= 2) {
      $("#paris").show();
    } else if ((ageNumber > 21) && (daysOff > 4) && (moneyAmount > 500) (moneyAmount < 10000) && (travelerAmount <= 4) && (funLevel >= 5)) {
      $("#lasvegas").show();
    } else if ((ageNumber >= 18) && (ageNumber <= 21) && (daysOff >= 4) && (moneyAmount >= 500) && (travelerAmount = 1) && (funLevel >= 5)) {
      $("#cancun").show();
    } else if ((ageNumber >= 16) && (ageNumber <= 65) && (daysOff >= 2) && (daysOff <= 4) && (moneyAmount < 500) && (travelerAmount <= 4) && (funLevel > 5)) {
      $("#roadtrip").show();
    } else if ((ageNumber < 16) || (ageNumber > 85) || (daysOff <= 2) || (moneyAmount < 50) || (travelerAmount >= 4) || (funLevel <= 4)) {
      $("#staycation").show();
    } else {
      alert("Please fill in all fields with numeric values.");
    }


    event.preventDefault();
  });
});

// if ((ageNumber >= 18) && (ageNumber <= 85) && (daysOff >= 7) && (moneyAmount >= 100000) && (travelerAmount >= 1) && (funLevel >= 4)) {
//   $("#lakeoswego").show();
// } else if ((ageNumber >= 30) && (daysOff >= 10) &&    (moneyAmount >= 10000) && (travelerAmount = 2) && (funLevel >= 5)) {
//   $("#paris").show();
// } else if ((ageNumber > 21) && (daysOff > 4) && (moneyAmount > 500) (moneyAmount < 10000) && (travelerAmount <= 4) && (funLevel >= 5)) {
//   $("#lasvegas").show();
// } else if ((ageNumber >= 18) && (ageNumber <= 21) && (daysOff >= 4) && (moneyAmount >= 500) && (travelerAmount = 1) && (funLevel >= 5)) {
//   $("#cancun").show();
// } else if ((ageNumber >= 16) && (ageNumber <= 65) && (daysOff >= 2) && (daysOff <= 4) && (moneyAmount < 500) && (travelerAmount <= 4) && (funLevel > 5)) {
//   $("#roadtrip").show();
// } else if ((ageNumber < 16) || (ageNumber > 85) || (daysOff <= 2) || (moneyAmount < 50) || (travelerAmount >= 4) || (funLevel <= 4)) {
//   $("#staycation").show();
// } else {
//   alert("Please fill in all fields with numeric values.");
// }


// if (moneyAmount >= 100000){
//   $("#lakeoswego").show();
// } else if ((ageNumber >= 21) && (daysOff >= 7) && (moneyAmount >= 5000) && (travelerAmount <= 2) {
//   $("#paris").show();
// } else if ((ageNumber >= 30) && (daysOff >= 10) && (moneyAmount >= 10000) && (travelerAmount <= 2) && (funLevel >= 5)) {
//   $("#japan").show();
// } else if ((ageNumber >= 18) && (daysOff >= 4) && (moneyAmount <= 750) && (travelerAmount = 1)) {
//   $("#cancun").show();
// } else if ((ageNumber >= 16) && (daysOff >= 2) && (moneyAmount >= 200) && (travelerAmount >= 1)) {
//   $("#roadtrip").show();
// } else if ((ageNumber <= 15) || (daysOff <= 1) || (moneyAmount <= 50) || (travelerAmount >= 4) || (funLevel <= 4)) {
//   $("#staycation").show();
// } else {
//   alert("Please fill in all fields with numeric values.");
// }


  // var score = 0;
  //
  // var ageNumber = prompt("Enter your age number");
  // if ( parseInt(ageNumber) <= 35 || parseInt(ageNumber) >= 21 ) {
  //   score += 20;
  // } else if ( parseInt(ageNumber) <= 75 || parseInt(ageNumber) <= 21 ) {
  //   score += 10;
  // } else if ( parseInt(ageNumber) < 18 || parseInt(ageNumber) > 75 ) {
  //   score += 5;
  // } else {
  //   score = 0;
  // }
  //
  // var daysOff = prompt("Enter the number of days you can take off");
  // var moneyAmount = prompt("How much money can you spend? (enter numerals only)");
  // var peopleAmount = prompt("Enter the number of people traveling");
  // var funRating = prompt("How fun are you on a scale of 1 - 10?");
  //
  // var score = 0;

  //   event.preventDefault();
  // })
// });


    // if (parseInt(ageNumber) > 65 ) && parseInt(daysOff) > 7 && parseInt(moneyAmount) > 10000 && parseInt(peopleAmount) >= 1 && parseInt(funRating) > 5 {
    //   $("#paris").show();
    // }

// var ageNumber = parseInt$("input#age").val();
// console.log("Working");

    // $(document).getElementById("#age").val();
    //   alert("You entered " + ("#age") );

    // if ( parseInt$("#age") <= 21 ) {
    //   alert("You're under 21");
    // }
