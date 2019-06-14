class TaggingsController < ApplicationController
    before_action :require_logged_in

    def index
        # something
    end

    def show
        @tag = Tag.find(params[:tag_id])
        @note = Note.find(params[:note_id])
        if @tag && @note
            # something
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
        @tag = Tag.find(params[:tag_id])
        @note = Note.find(params[:note_id])
        if @tag && @note
            # something
        end
    end

    def update
        # something
    end

    private

    def tagging_params
        params.require(:tagging).permit(:note_id, :tag_id)
    end
end