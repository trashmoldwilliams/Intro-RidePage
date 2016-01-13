$(function() {
  var feet = parseInt(prompt('How tall are you? Enter feet first.'));
  var inch = parseInt(prompt('How many Inches?'));
  inch = inch + feet * 12;

  if (inch >= 70) {
    $('#flume').addClass('highlight');
  };
  if (inch >= 84) {
    $('#merry').addClass('highlight');
  };
  if (inch >= 72) {
    $('#slide').addClass('highlight');
  };
  if (inch <= 60) {
    $('#kiddie').addClass('highlight');
  };
  if (inch >= 66) {
    $('#sidewinder').addClass('highlight');
  };

})
