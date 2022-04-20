class ValuesController < ApplicationController
    def index
        values = Value.all
        render json:values
    end
end
