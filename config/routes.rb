Rails.application.routes.draw do
  resources :favorites
  resources :applications
  resources :jobs
  resources :companies
  resources :seekers
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get "/me", to: "seekers#show"

end