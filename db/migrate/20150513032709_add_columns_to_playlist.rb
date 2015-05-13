class AddColumnsToPlaylist < ActiveRecord::Migration
  def change
    add_column :playlists, :description, :string
    add_column :playlists, :username, :string
  end
end
