class CompaniesController < ApplicationController
    def create
        company = Company.create(params.permit(:title, :rating))
        render json: company
    end
end
