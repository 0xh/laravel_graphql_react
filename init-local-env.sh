git submodule init
git submodule update
cp ./.env.example .env
cp ./.env.laradock.example ./laradock/.env
cd laradock
docker-compose up -d nginx mysql redis phpmyadmin
docker-compose exec workspace bash
composer install
npm install
php artisan key:generate
####### I AM COMMENT ����ע�� you should have already create an mysql user and create database before execute below script #########
php artisan storage:link
php artisan migrate
php artisan passport:install
php artisan db:seed
npm run dev

####### if use supervisor manage QUEUE
sudo apt-get install supervisor
sudo cp ./supervisor-horizon.conf  /etc/supervisor/conf.d/
sudo supervisorctl reread
sudo supervisorctl update
sudo supervisorctl start horizon:*