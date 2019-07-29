class Api::TaggingsController < ApplicationController
    before_action :require_logged_in

    def index
        # @user = 
        # @taggengs = 
    end

    def show
        @tagging = Tagging.find(params[:id])
        if @tagging
            render json: @tagging, status: 200
        else
            render json: @tagging.errors.full_messages, status: 404
        end
    end

    def create 
        @tagging = Tagging.new(tagging_params)
        if @tagging.save
            render json: @tagging, status: 200
        else
            render json: @tagging.errors.full_messages, status: 422
        end
    end

    def destroy
        @tagging = Tagging.find(params[:id])
        if @tagging.destroy
            render json: @tagging, status: 200
        else
            render json: @tagging.errors.full_messages, status: 422
        end
    end

    def update
         @tagging = Tagging.find(params[:id])
        if @tagging.update(tagging_params)
            render json: @tagging, status: 200
        else
            render json: @tagging.errors.full_messages, status: 422
        end
    end

    private

    def tagging_params
        params.require(:tagging).permit(:note_id, :tag_id)
    end
end