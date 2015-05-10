Rails.application.routes.draw do
  root 'playlists#index'
  devise_for :users
  resources :playlists do
    resources :songs
  end

  match 'search', to: 'playlists#search', via: :get

end
