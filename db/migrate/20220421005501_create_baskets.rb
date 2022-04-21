class CreateBaskets < ActiveRecord::Migration[6.1]
  def change
    create_table :baskets do |t|
      t.references :seeker, null: false, foreign_key: true
      t.references :value, null: false, foreign_key: true

      t.timestamps
    end
  end
end
