class BasketsController < ApplicationController

    def create
        basket = Basket.create!(params.permit(:seeker_id, :value_id))
        render json: basket
    rescue ActiveRecord::RecordInvalid => invalid
        render json:{errors:invalid.record.errors}, status:422
    end

    def destroy
        basket = Basket.find(params[:id])
        basket.destroy
        head :no_content
    rescue ActiveRecord::RecordNotFound 
        render json:{errors:"Basket Not Found"}, status:404
    end
end
