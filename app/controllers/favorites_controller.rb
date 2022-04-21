class FavoritesController < ApplicationController

    def index
        favorites = Favorite.all
        render json: favorites, include: [:job]
    end

    def show
        favorites = Favorite.seeker.find(params[:id]).all
        render json: favorites, status:200
    rescue ActiveRecord::RecordNotFound
        render json:{errors:"Episode Not Found"}, status:404
    end

    def create
        favorite = Favorite.create!(params.permit(:seeker_id, :job_id))
        render json: favorite, status: :ok
    rescue ActiveRecord::RecordInvalid
        render json: {errors:"fav not added"}, status: 404
    end
    
end
