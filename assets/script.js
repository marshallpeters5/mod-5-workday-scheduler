// $(function(){}); ensures that all items in the DOM will be loaded before this function fires.
$(function () {
  $('.saveBtn').click(function(){
    var description = $(this).siblings('textarea').val()
    var time = $(this).siblings('.time').attr('id')
    localStorage.setItem(time, description)
  })
  // This for loop iterates over the index in the localStorage and targets the time id.
  for (let index = 9; index < 18; index++) {
    $(`#time${index}`).siblings('textarea').val(localStorage.getItem(`time${index}`))
  }
  // This function parses and splits the id in each row into a number from a string and 
  // compares the times to give appropriate colors to the text areas.
  $('.time').each(function(){
    var currentHour = dayjs().hour()
    var rowHour = parseInt($(this).attr('id').split('time')[1])
    if (currentHour > rowHour){
      $(this).siblings('.description').addClass('past')
    } else if (currentHour === rowHour) {
      $(this).siblings('.description').addClass('present')
    } else {
      $(this).siblings('.description').addClass('future')
    }
  })
});
// Checks DayJS to see the current day of the week and greets the user accordingly.
var currentDay = dayjs().format('MMMM D, YYYY')
$('#currentDay').text("Today is: " + currentDay);

var weekDay = dayjs().format('dddd')
$('#week-day').text("It's going to be a lovely " + weekDay + " ❤");
if (weekDay === 'Saturday' || weekDay === 'Sunday') {
$('#weekEnd').text("Have a wonderful weekend!")
} else {
$('#weekEnd').text("Have a productive work week!")
}