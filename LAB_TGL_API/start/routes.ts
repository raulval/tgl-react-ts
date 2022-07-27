/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.post('/login', 'SessionsController.session')
Route.get('/cart_games', 'CartController.index')

Route.group(() => {
  Route.post('/create', 'UsersController.create')
  Route.group(() => {
    Route.put('/update', 'UsersController.update')
    Route.delete('/delete', 'UsersController.delete')
    Route.get('/my-account', 'UsersController.index')
  }).middleware('auth')
}).prefix('/user')

Route.group(() => {
  Route.post('/create-game', 'GamesController.createGame')
  Route.delete('/delete-game/:gameId', 'GamesController.deleteGame')
  Route.put('/update-game/:gameId', 'GamesController.updateGame')
  Route.put('/promote-user/:id', 'AdminController.promoteUser')
  Route.delete('/delete-user/:id', 'AdminController.deleteUser')
  Route.get('/all-users', 'AdminController.index')
})
  .middleware('auth')
  .prefix('/admin')
  .middleware('adminVerify')

Route.group(() => {
  Route.post('/new-bet/', 'BetsController.create')
  Route.delete('/delete-bet/:betId', 'BetsController.delete')
  Route.put('/update-bet/:gameId/:betId', 'BetsController.update')
  Route.get('/all-bets', 'BetsController.index')
})
  .middleware('auth')
  .prefix('/bet')

Route.group(() => {
  Route.post('/', 'ResetPasswordController.store')
  Route.post('/:token', 'ResetPasswordController.update')
}).prefix('/reset')

Route.get('file/:id', 'UserPicsController.show')
Route.group(() => {
  Route.post('/add-pic', 'UserPicsController.create')
})
  .middleware('auth')
  .prefix('/file')
