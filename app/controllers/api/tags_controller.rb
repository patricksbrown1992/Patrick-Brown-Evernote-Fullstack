class Api::TagsController < ApplicationController
    # before_action :require_logged_in



    def index

        @tags = current_user.tags
        render json: @tags, status: 200

    end

    def show
        @tag = Tag.find(params[:id])
        if @tag
            render json: @tag, status: 200
        else
            render json: @tag.errors.full_messages, status: 422
        end
    end

    def update
        @tag = Tag.find(params[:id])
        if @tag.update(tag_params)
            render json: @tag, status: 200
        else
            render json: @tag.errors.full_messages, status: 422 
        end
    end

    def create
        @tag = Tag.new(tag_params)
        if @tag.save
            render json: @tag, status: 200
        else
            render json: @tag.errors.full_messages, status: 422
        end
    end

    def destroy
        @tag = Tag.find(params[:id])
        if @tag.destroy
            render json: @tag, status: 200
        else
            render json: @tag.errors.full_messages, status: 422
        end
    end

    private

    def tag_params
        params.require(:tag).permit(:user_id, :name)
    end

end