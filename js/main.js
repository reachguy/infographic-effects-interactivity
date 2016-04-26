var $woof = $('.woof');
var $core = $('.core');
var $personality = $('.personality');
var $speakingOf = $('.speaking-of');
var $tech = $('.tech');

$woof.waypoint(function (direction) {
  if (direction == 'down') {
    $woof.addClass('js-woof-animate');
  } else {
  $woof.removeClass('js-woof-animate');
  }
}, { offset: '100%' });

$core.waypoint(function (direction) {
  if (direction == 'down') {
    $core.addClass('js-core-animate');
  } else {
  $core.removeClass('js-core-animate');
  }
}, { offset: '50%' });

$personality.waypoint(function (direction) {
  if (direction == 'down') {
    $personality.addClass('js-personality-animate');
  } else {
  $personality.removeClass('js-personality-animate');
  }
}, { offset: '50%' });

$speakingOf.waypoint(function (direction) {
  if (direction == 'down') {
    $speakingOf.addClass('js-speaking-of-animate');
  } else {
  $speakingOf.removeClass('js-speaking-of-animate');
  }
}, { offset: '50%' });

$tech.waypoint(function (direction) {
  if (direction == 'down') {
    $tech.addClass('js-tech-animate');
  } else {
  $tech.removeClass('js-tech-animate');
  }
}, { offset: '50%' });
