class AddForeignKeyToSongs < ActiveRecord::Migration
  def change
    add_reference :songs, :playlist, index: true
  end
end
