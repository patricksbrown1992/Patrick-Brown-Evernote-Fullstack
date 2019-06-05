class Api::NotebooksController < ApplicationController
    before_action :require_logged_in


    def show
        @notebook = Notebook.find(params[:id])
        if @notebook
            render json: @notebook, status: 200
        else
            render json: @notebook.errors.full_messages, status: 404
        end
    end

    def index
        @user = User.find(params[:user_id])
    
        @notebooks = @user.notebooks
     
        render json: @notebooks, status: 200
    end


    def destroy
       
        @notebook = Notebook.find(params[:id])
        if @notebook.destroy
            render json: @notebook, status: 200
        else
            render json: @notebook.errors.full_messages, status: 422
        end
    end

    def create
        @notebook = Notebook.new(notebook_params)
        if @notebook.save
            render json: @notebook, status: 200
        else    
            render json: @notebook.errors.full_messages, status: 422
        end
    end

    def update
        @notebook = Notebook.find(params[:id])
        if @notebook.update(notebook_params)
            render json: @notebook, status: 200
        else
            render json: @notebook.errors.full_messages, status: 422
        end
    end

    private

    def notebook_params
        params.require(:notebook).permit(:user_id, :name)
    end
end