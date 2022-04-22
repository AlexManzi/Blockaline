class SeekersController < ApplicationController
    
    def create
        seeker = Seeker.create!(params.permit(:name, :email, :frontier, :password, :first_name, :last_name))
        session[:seeker_id] ||= seeker.id
        render json: seeker, status: :created
    rescue ActiveRecord::RecordInvalid => invalid
        render json: { errors: [invalid.record.errors] }, status: :unprocessable_entity
    end

    def show
        seeker_id = session[:seeker_id]
        if seeker_id
            seeker = Seeker.find(seeker_id)
            render json: seeker, status: :created, include: [:values]
        else
            render json: { error: "Unauthorized" }, status: :unauthorized
        end
    end


end