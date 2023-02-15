### Installation

### Clone the repository
git clone https://github.com/ShifatNaznin/laravel-vuejs-delivery-management-system.git

### Install all the dependencies using composer
composer install

### Copy the example env file and make the required configuration changes in the .env file
.env.example to .env

### Database configuration
DB_DATABASE=your_database_name <br>
DB_USERNAME=your_user_name <br>
DB_PASSWORD=your_password

### Configure `.env` file for sending mail and registration
MAIL_HOST=your_mail_host <br>
MAIL_PORT=your_mail_port <br>
MAIL_USERNAME=your_user_name <br>
MAIL_PASSWORD=your_password <br>
MAIL_ENCRYPTION=your_mail_encryption

### command for Generate JWT secret key
php artisan jwt:secret

### Install all the dependencies using npm
npm install

### Start the local development server
npm run serve

### For Database create
php artisan migrate

### Generate a new application key & storage link create
php artisan key:generate <br>
php artisan storage:link

### Start the local development server
php artisan serve
