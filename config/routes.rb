Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    get 'users/verify', to: 'users#verify'
    get 'notebooks/search', to: 'notebooks#search'
    get 'notes/search', to: 'notes#search'
    get 'tags/search', to: 'tags#search'
    resources :users, only: [:create] 
    resources :notebooks, only: [:index, :create, :destroy, :update]
    resources :taggings, only: [:index, :create, :destroy, :show, :update]
    resources :tags, only: [:index, :create, :destroy, :show, :update]
    resources :notebooks, only: [:show] do 
      resources :notes, only: [:show, :index, :create, :destroy, :update]
    end
    resource :session, only: [:destroy, :create]
  end
end
