class Job < ApplicationRecord
  belongs_to :company

  has_many :applications
  has_many :favorites

  has_many :seekers, through: :favorites
  has_many :seekers, through: :applications
end
