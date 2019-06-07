# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Notebook.destroy_all
Note.destroy_all
u1 = User.create!(email: 'admin@admin.com', password: '123456')
u2 = User.create!(email: 'buzz@lightyear.com', password: '123456')
nb1 = Notebook.create!(name: 'demo notebook', user_id: u1.id)
nb3 = Notebook.create!(name: 'To Infinity!', user_id: u2.id)
n1 = Note.create!(title: 'And Beyond!', body: 'And Beyond!', notebook_id: nb3.id)

