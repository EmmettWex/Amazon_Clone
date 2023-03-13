Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  namespace :api, defaults: {format: :json} do
      resources :users, only: [:create, :show] do
        resources :carts, only: [:index]
      end
      resources :items, only: [:show, :index]
      resources :carts, only: [:show, :create, :destroy, :update]
      resources :reviews, only: [:show, :index, :create, :destroy, :update]
      resource :session, only: [:create, :show, :destroy]
  end

  get '*path', to: 'static_pages#frontend_index'

end
