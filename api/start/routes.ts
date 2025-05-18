/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import type { ApiResponseTypeExample } from 'shared'

router.get('/', async (): Promise<ApiResponseTypeExample> => {
  return {
    message: 'Hello world',
    success: true,
  }
})
