class CreateSeekers < ActiveRecord::Migration[6.1]
  def change
    create_table :seekers do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :frontier
      t.string :password_digest

      t.timestamps
    end
  end
end
