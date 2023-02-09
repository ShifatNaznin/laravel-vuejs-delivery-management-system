### Installation

### Clone the repository
git clone https://github.com/ShifatNaznin/laravel-vue-inventory.git

### Install all the dependencies using composer
composer install

### Install all the dependencies using npm
npm install

### Start the local development server
npm run serve

### Copy the example env file and make the required configuration changes in the .env file
.env.example to .env

### Database configuration
DB_DATABASE=your_database_name <br>
DB_USERNAME=your_user_name <br>
DB_PASSWORD=your_password

### For Database create
php artisan migrate

### Generate a new application key & storage link create
php artisan key:generate <br>
php artisan storage:link

### Start the local development server
php artisan serve
