class Api::SessionsController < ApplicationController
    def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if @user
      login!(@user)
      render "api/users/show"
    else
      render json: {message: "Invalid email or password"}
    end
  end

  def destroy
    @user = current_user
    if @user
      logout!
      render json: {message: 'You have logged out of Evernote.'}
    else
      render json: {message: "No one is signed in"}
    end
  end

end