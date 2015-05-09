class AddSongsTable < ActiveRecord::Migration
  def change
    create_table :songs do |t|
      t.string :title, null: false
      t.string :permalink_url, null: false
      t.string :artwork_url
      t.string :genre
      t.string :soundcloud_id
      t.string :key_signature
      t.integer :bpm
      t.timestamps null: false
    end
  end
end
