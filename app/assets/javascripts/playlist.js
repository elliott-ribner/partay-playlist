SC.initialize({
  client_id: '8e9e076931762d84d99f341ccb71fe3f'
});




function playTrack(trackId) {
soundManager.stopAll();
SC.stream("/tracks/"+ trackId, { autoPlay: true , volume: 25, onfinish: function() {
      var nextId = $('#'+ trackId).next('.playlink').attr('id');
      playTrack(nextId);
    }
  });
};



