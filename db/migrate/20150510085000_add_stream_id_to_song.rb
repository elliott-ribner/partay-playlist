class AddStreamIdToSong < ActiveRecord::Migration
  def change
    add_column :songs, :stream_url, :string
  end
end
