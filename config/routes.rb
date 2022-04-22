Rails.application.routes.draw do
  resources :baskets
  resources :values
  resources :favorites
  resources :applications
  resources :jobs
  resources :baskets, only:[:create]
  resources :companies
  resources :seekers, only:[:create]
  # resources :sessions
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get "/me", to: "seekers#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  post "/bdestroy", to: "baskets#destroy"

end
