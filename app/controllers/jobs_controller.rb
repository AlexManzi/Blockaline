class JobsController < ApplicationController

    def index
        jobs = Job.all 
        render json: jobs, include: [:company]
    end

end
