class Api::NotebooksController < ApplicationController
    before_action :require_logged_in


    def show
        @notebook = Notebooks.find(params[:id])
        if @notebook
            json 'api/notebooks/show'
        else
            render json: @notebook.errors.full_messages, status: 404
        end
    end

    def index
        @notebooks = current_user.notebooks
        render 'api/notebooks/index'
    end


    def destroy
        @notebook = Notebooks.find(params[:id])
        if @notebook.destroy
            render json: ['You deleted this notebook'], status: 200
        else
            render json: @notebook.errors.full_messages, status: 422
        end
    end

    def create
        @notebook = Notebook.new(notebook_params)
        if @notebook.save
            render json: ['You made a notebook'], status: 200
        else    
            render json: @notebook.errors.full_messages, status: 422
        end
    end

    def update
        @notebook = Notebooks.find(params[:id])
    
    end

    private

    def notebook_params
        params.require(:notebook).permit(:user_id, :name)
    end
end