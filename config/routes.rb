Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
    root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    get 'users/verify', to: 'users#verify'
    resources :users, only: [:create] 
    resources :notesbooks, only: [:index, :create, :destroy, :update]
    resources :notebooks, only: [:show] do 
      resources :notes, only: [:show, :index, :create, :destroy, :update]
    end
    resource :session, only: [:destroy, :create]
  end
end
