class CreateCompanies < ActiveRecord::Migration[6.1]
  def change
    create_table :companies do |t|
      t.string :title
      t.string :mission_statement
      t.string :tags
      t.integer :rating

      t.timestamps
    end
  end
end
