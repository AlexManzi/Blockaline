class BasketsController < ApplicationController

    def create
        basket = Basket.create!(params.permit(:seeker_id, :value_id))
        render json: basket
    rescue ActiveRecord::RecordInvalid => invalid
        render json:{errors:invalid.record.errors}, status:422
    end

    def destroy
        number = Seeker.find(params[:seeker_id]).values.find(params[:value_id]).id
        basket = Basket.find(number)
        # user = Seeker.find(params[:seeker_id]) 
        # basket = user.baskets.find(params[:id])
        basket.destroy
        render json: {done:"Done"}
    rescue ActiveRecord::RecordNotFound 
        render json:{errors:"Basket Not Found"}, status:404
    end
end
