Rails.application.routes.draw do
  resources :answers
  resources :questions
  
  root "questions#new"
end
