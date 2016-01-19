// $(document).ready(function() {
  // $("form#quiz").submit(function(event) {

$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    var ageNumber = parseInt( $("input#age").val() );
    var daysOff = parseInt( $("input#days").val() );
    var moneyAmount = parseInt( $("input#money").val() );
    var travelerAmount = parseInt( $("input#people").val() );
    var funLevel = parseInt( $("input#fun").val() );

    // $(".year").text(year);

    // if (!result) {                 // same as writing if (result === false)
    //   $(".not").text("not");
    // } else {
    //   $(".not").text("");
    // }

    $("#result").show();
    event.preventDefault();
  });
});

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
