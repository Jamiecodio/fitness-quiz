// HOVER EFFECT FOR ALL ANSWER BUTTONS 
$('.answer').mouseenter(function() {
  $(this).addClass("hover-effect");
});

$('.answer').mouseleave(function() {
  $(this).removeClass("hover-effect");
});

// SELECTING CORRECT ANSWER
$('#q1__answer-selection-3').on('click', function() {
  $('.feedback').text('Correct Answer!').addClass("correct-answer");
  $('.answer').attr('disabled',true).removeClass("hover-effect").off('mouseenter').off('mouseleave');
  $('.next-question').attr('disabled', false).on("click", function(){
    alert("Thank You! Play Again");
    location.reload();
  });
  $(this).addClass("correct-answer");
});

//SELECTING WRONG ANSWERS
$('#q1__answer-selection-1,#q1__answer-selection-2, #q1__answer-selection-4').on('click', function() {
  $('.feedback').text('Incorrect Answer!').addClass("incorrect-answer");
  $('.answer').attr('disabled',true).removeClass("hover-effect").off('mouseenter').off('mouseleave');
  $('.next-question').attr('disabled', false).text("Try Again").on("click", function(){
    location.reload();
  });
  $(this).addClass("incorrect-answer");
});


