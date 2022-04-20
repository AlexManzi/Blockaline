class Company < ApplicationRecord
    has_many :jobs
    has_many :applications, through: :jobs
    has_many :favorites, through: :jobs
end
