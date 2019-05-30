class Api::UsersController < ApplicationController

    def verify
        @user = User.find_by(email);
        if @user 
            return true
        else
            render json: @user.errors.full_messages, status: 404
        end
    end

    def create
    
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render "api/users/show"
      
        else
            render json: @user.errors.full_messages
        end
    end

    private 

    def user_params
      
        params.require(:user).permit(:email, :password)
    end

end