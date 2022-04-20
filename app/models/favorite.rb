class Favorite < ApplicationRecord
  belongs_to :seeker
  belongs_to :job
end
