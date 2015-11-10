Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resources :todos do
      resources :todo_steps
    end
  end


  root to: "static_pages#root"
end
