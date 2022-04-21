class Basket < ApplicationRecord
  belongs_to :seeker
  belongs_to :value

  # validates :seeker_id, uniqueness:{scope: :value_id}

end
