class CreateJobs < ActiveRecord::Migration[6.1]
  def change
    create_table :jobs do |t|
      t.string :title
      t.string :description
      t.string :benefits
      t.boolean :remote
      t.boolean :hybrid
      t.references :company, null: false, foreign_key: true
      t.string :salary
      t.string :logo

      t.timestamps
    end
  end
end
