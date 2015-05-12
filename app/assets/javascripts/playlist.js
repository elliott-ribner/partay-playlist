SC.initialize({
  client_id: '8e9e076931762d84d99f341ccb71fe3f'
});

function playing(trackId) {
  $('.fa-pause').addClass('fa-play-circle-o');
  $('.fa-pause').removeClass('fa-pause');
  $('.playing').addClass('not-playing');
  $('.playing').removeClass('playing');
  $('#'+ trackId).parent().removeClass('not-playing');
  $('#'+ trackId).parent().children('.fa').addClass('fa-pause');
  $('#'+ trackId).parent().addClass('playing');
};

function notPlaying(trackId) {

};

function playTrack(trackId) {
  soundManager.stopAll();
  playing(trackId);
  SC.stream("/tracks/"+ trackId, { autoPlay: true , volume: 20, onfinish: function() {
    var nextId = $('#'+ trackId).parent().next().children('.playlink').attr('id');
    playTrack(nextId);
    }
  });
};



