class PlaylistsController < ApplicationController
  require 'soundcloud'

  def index
    @playlists = Playlist.all
  end

  def new
    @playlist = Playlist.new
  end

  def create
    @playlist = Playlist.new(name: params[:playlist][:name])
    @playlist.save
    redirect_to playlists_path
  end

  def show
    client = Soundcloud.new(client_id: '8e9e076931762d84d99f341ccb71fe3f')
    @tracks = client.get('/tracks', q: 'ta-ku')
    @playlist = Playlist.find(params[:id])
  end

  def edit
  end

  def search
    client = Soundcloud.new(client_id: '8e9e076931762d84d99f341ccb71fe3f')
    @tracks = client.get('/tracks', q: params[:q])
    @playlist = Playlist.find(params[:playlist_id])
    render :show
  end


end
