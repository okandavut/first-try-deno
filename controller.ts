
import { ICar } from './carinterface.ts'

let cars: Array<ICar> = [{
  id: "1",
  carName: "BMW",
}, {
  id: "1",
  carName: "AUDI",
}]

const getCars = ({ response }: { response: any }) => { response.body = cars; }
const searchById = (id: string): (ICar | undefined) => cars.filter(car => car.id === id)[0];

const addCar = async ({ request, response }: { request: any; response: any }) => {
  const body = await request.body()
  const car: ICar = body.value
  cars.push(car)
  response.body = { message: 'New car added.' }
  response.status = 200
}

const updateCar = async ({ params, request, response }: { params: { id: string }; request: any; response: any }) => {
  let car: ICar | undefined = searchById(params.id)
  if (car) {
    const body = await request.body()
    const updateInfos: { carName?: string; } = body.value
    car = { ...car, ...updateInfos }
    cars = [...cars.filter(car => car.id !== params.id), car]
    response.status = 200
    response.body = { message: 'Car Info Updated' }
  }
}

const deleteCar = ({ params, response }: { params: { id: string }; response: any }) => {
  cars = cars.filter(car => car.id !== params.id)
  response.body = { message: 'Car Deleted' };
  response.status = 200;
}

const getCar = ({ params, response }: { params: { id: string }; response: any }) => {
  const car: ICar | undefined = searchById(params.id)
  response.body = car;
  response.status = 200;
}

export { getCars, getCar, addCar, updateCar, deleteCar }
