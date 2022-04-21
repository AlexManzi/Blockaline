class SessionsController < ApplicationController

    def create
        seeker = Seeker.find_by(email: params[:email])
        if seeker&.authenticate(params[:password])
            session[:seeker_id] = seeker.id
            render json: seeker, status: :created
        else
            render json: { errors: ["Invalid username or password"] }, status: :unauthorized
        end
    end

    def destroy
        if session.include? :seeker_id
            session.delete :seeker_id
            head :no_content
        else
            render json: { errors: ["Unauthorized"] }, status: :unauthorized
        end
    end
end

# add password to migration with bcrypt syntax