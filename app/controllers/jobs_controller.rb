class JobsController < ApplicationController

    def index
        jobs = Job.all 
        render json: jobs, include: [:company]
    end

    def create
        job = Job.create!(params.permit(:title, :logo, :company_id))
        render json: job
    rescue ActiveRecord::RecordInvalid => invalid
        render json: {errors: invalid.record.errors }, status:420
    end



    def destroy
        job = Job.find(params[:id])
        job.destroy
        render json: {done:"Done"}
    end

end
