class Value < ApplicationRecord
    has_many :baskets
    has_many :seekers, through: :baskets

end
