SC.initialize({
  client_id: '8e9e076931762d84d99f341ccb71fe3f',
  redirect_uri: 'http://www.elrwebsolutions.com'
});





function search(playlist) {

  var song = document.getElementById('song').value;
  SC.get('https://api.soundcloud.com/tracks/', { song: song }, function(tracks) {
    $('#results').empty();
    $(tracks).each(function(index, track) {
      $('#results').append('<a href="/playlists/' + playlist + '/edit?param1=valuex">'+ track.title+'</a><br>');
    });
  });

}


// ('<%= link_to 'track.title', edit_playlist_path(@shop) %>');
