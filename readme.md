
## About laravel_graphql_react

laravel_graphql_react is a boilerplate of laravel 5.7, GraphQL, 
GraphQL Apollo Client(React.Js), React Js (16.7.0-alpha.2), Bootstrap 4.1,
Laravel Prerender, Laravel Swoole, Laravel Horizon

Support i18n based on React i18Next.

This boilerplate support Swoole!  <br>
(Swoole not working with Laravel Prerender, choose one of them)

Package that I have modified from Original Package (You can also check composer.json)

- a70537952/graphql based on Folkloreatelier/laravel-graphql (To support upload file feature)
- a70537952/imagecache based on Intervention/imagecache (To support AWS S3)
- a70537952/laravel-prerender based on jeroennoten/Laravel-Prerender (To support rendertron)

## We have provide example env and config file.
- .env.example  (Laravel example env file)
- .env.laradock.example  (Laradock example env file)
- supervisor-horizon.conf  (supervisor horizon config file)
- buildspec.yml  (AWS codebuild file, not sure is this still working O.O)
## How To Use

Clone this repo, check init-local-env.sh <br>
There's some example of Graphql and React code under this project.<br>
- Graphql: app\GraphQL
- React: resources\js


Init Project with Laradock (docker)

```
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
```
