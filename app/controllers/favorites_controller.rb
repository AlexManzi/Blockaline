class FavoritesController < ApplicationController

    def show
        favorites = Favorites.seeker.find(params[:id]).all
        render json: favorites, status:200
    rescue ActiveRecord::RecordNotFound
        render json:{errors:"Episode Not Found"}, status:404
    end
    
end
