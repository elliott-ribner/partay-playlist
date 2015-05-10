class SongsController < ApplicationController
  require 'soundcloud'

  def create
    @playlist = Playlist.find(params[:playlist_id])
    @song = @playlist.songs.new(title: params[:title], permalink_url: params[:permalink_url],
      soundcloud_id: params[:soundcloud_id], stream_url: params[:stream_url])
    if @song.save
      redirect_to playlist_path(@playlist)
    end
  end


end
