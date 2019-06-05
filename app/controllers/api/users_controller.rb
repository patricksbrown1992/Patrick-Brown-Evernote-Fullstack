class Api::UsersController < ApplicationController

    def verify
        @user = User.find_by(email: params[:email]);
    
        if @user
            
            render json: {verified: true}, status: 200
        else
            
            render json: ['There is no account for the email you entered.'], status: 422
        end
    end

    def create
    
        @user = User.new(user_params)

    
        if @user.save
            login!(@user)
            render "api/users/show"
      
        else
          
            render json: @user.errors.full_messages, status: 422
        end
    end

    private 

    def user_params
      
        params.require(:user).permit(:email, :password)
    end

end