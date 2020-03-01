class Api::NotesController < ApplicationController
    # before_action :require_logged_in

 


    def show
        # @notebook = Notebook.find(params[:notebook_id])
        @note = Note.find(params[:id])
        if @note
            render json: @note, status: 200
        else
            render json: @note.errors.full_messages, status: 404
        end

    end


    def index
        
        @notebook = Notebook.find(params[:notebook_id])
        @notes = @notebook.notes
        # .includes(:tags)
        render json: @notes, status: 200
    end
    
    def create
        @note = Note.new(note_params)
    
        if @note.save
          
            render json: @note, status: 200
        else
        
            render json: @note.errors.full_messages, status: 422
        end
    end

    def destroy
      
        @note = Note.find(params[:id])
      
        if @note.destroy
          
            render json: @note, status: 200
        else

            render json: @note.errors.full_messages, status: 422
        end
    end

    def update
        
        @note = Note.find(params[:id])
        if @note.update(note_params)
            render json: @note, status: 200
        else
            render json: @note.errors.full_messages, status: 422
        end
    end

    private

    def note_params
        params.require(:note).permit(:notebook_id, :title, :body, :shortcut)
    end

end