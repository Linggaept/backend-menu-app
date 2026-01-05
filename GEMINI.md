LIST PENGERJAAN BUAT API EXPRESSJS
1. Login Admin Only
2. Beranda User (Read Menu, Filter, Search)
3. Profile (Read Update)
4. Admin CRUD Produk

Kebutuhan Teknologi
1. Express JS (BE)
2. MongoDB (DB)
3. Docker Sekalian

schema db
1. admin
    admin_id, username, email, password
2. menu
    menu_id, categories_id(relasi 1 categories punya banyak menu), menu_name, menu_image, menu_description, menu_time, menu_slot
3. categories
    categories_id, categories_name