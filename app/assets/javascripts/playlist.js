SC.initialize({
  client_id: '8e9e076931762d84d99f341ccb71fe3f'
});

var volume = 25;


function notPlaying() {
  $('.fa-pause').addClass('fa-play-circle-o');
  $('.fa-pause').removeClass('fa-pause');
  $('.playing').addClass('not-playing');
  $('.playing').removeClass('playing');
};

function playing(trackId) {
  notPlaying();
  $('#'+ trackId).parent().removeClass('not-playing');
  $('#'+ trackId).parent().children('.fa').addClass('fa-pause');
  $('#'+ trackId).parent().addClass('playing');
};

function playTrack(trackId) {
  soundManager.stopAll();
  if ($('#'+trackId).parent().hasClass('playing')) {
    return notPlaying();
  }
  playing(trackId);
  SC.stream("/tracks/"+ trackId, { autoPlay: true , volume: volume, onfinish: function() {
    var nextId = $('#'+ trackId).parent().next().children('.playlink').attr('id');
    playTrack(nextId);
    }
  });
};

function nextTrack() {
  var nextId = $('.playing').next().children('.playlink').attr('id');
  playTrack(nextId);
};

function prevTrack() {
  var prevId = $('.playing').prev().children('.playlink').attr('id');
  playTrack(prevId);
};

function stopAll() {
  soundManager.stopAll();
  notPlaying();
};

function playFirst() {
  var firstId = $('#playlist').children('.song').first().children('.playlink').attr('id');
  playTrack(firstId);
};

function setVolume(userVolume) {
  console.log('test');
  volume = userVolume;
};

$(function() {
    $( "#slider" ).slider();
  });


var slider = $('#slider');

slider.slider({
    range: "min",
    value: 35,
    slide: function(event, ui) {
    setVolume(ui.value);
  }
});


