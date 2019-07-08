class Api::SearchesController < ApplicationController

    def show

        if params[:id] == ""
            @notebooks = []
        else
            str = "%#{params[:id]}%"
            @notebooks = Notebook 
                .joins("LEFT OUTER JOIN notes ON notes.notebook_id = notebooks.id")
                .joins("LEFT OUTER JOIN taggings ON taggings.note_id = notes.id")
                .joins("LEFT OUTER JOIN tags ON tags.id = taggings.tag_id")
                .where("UPPER(notebooks.name) LIKE UPPER(:query) OR UPPER(notes.title) LIKE UPPER(:query) OR UPPER(notes.body) LIKE UPPER(:query) OR Upper(tags.name) LIKE UPPER(:query)", query: str)


            @notebooks = @notebooks.uniq
        end
        render @notebooks, status: 200
    end

end