class Seeker < ApplicationRecord
    has_many :applications
    has_many :favorites
    has_many :baskets

    has_many :jobs, through: :applications
    has_many :jobs, through: :favorites
    has_many :values, through: :baskets
    
    has_many :companies, through: :jobs

    has_secure_password

    validates :email, presence: true, uniqueness: true
end
