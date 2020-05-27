import { Router } from 'https://deno.land/x/oak/mod.ts'
import { getCars, getCar, addCar, updateCar, deleteCar } from './controller.ts'

const router = new Router()
router.get('/cars', getCars)
    .get('/cars/:id', getCar)
    .post('/cars', addCar)
    .put('/cars/:id', updateCar)
    .delete('/cars/:id', deleteCar)

export default router
