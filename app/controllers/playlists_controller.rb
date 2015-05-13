class PlaylistsController < ApplicationController
  require 'soundcloud'

  def index
    @playlists = Playlist.all
  end

  def new
    @playlist = Playlist.new
  end

  def create
    @playlist = Playlist.new(playlist_params)
    @playlist.save
    redirect_to playlists_path
  end

  def show
    @playlist = Playlist.find(params[:id])
  end

  def edit
  end

  def search
    client = Soundcloud.new(client_id: '8e9e076931762d84d99f341ccb71fe3f')
    @tracks = client.get('/tracks', q: params[:q])
    @playlist = Playlist.find(params[:playlist_id])
    respond_to do |format|
      format.js
    end
  end


  private

  def playlist_params
    params.require(:playlist).permit(:name, :description)
  end


end
