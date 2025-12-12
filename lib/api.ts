import { Car } from '@/type/car'
import axios from 'axios'

axios.defaults.baseURL = 'https://car-rental-api.goit.global/'

export type NewCarData = {
  name: string;
  email: string;
  date: string;
  comment: string;
  categoryId: string;
};


export interface CarsListResponse {
    cars: Car[],
    totalCars: number,
  page: number,
  totalPages: number,
}

export interface FetchCarsParams {
    page: number, 
    perPage: number,
}

export const getCars = async () => {
    const res = await axios.get<CarsListResponse>("/cars")
    return res.data
}

// export async function getCars(page: number, perPage: number, brend?: string, prise?: string, mileage?: string, ) {
//   try {
//     const response = await axios.get("/cars", {
//       params: {
//         page,
//         perPage,
//         ...(brend && { brend }),
//         ...(prise && { prise }),
//         ...(mileage && { mileage }),
        
//       },
//     })

//     return response.data;
//   } catch {
//     throw new Error("Fetch tasks failed");
//   }
// }

export async function getCar(id: string) {
  const res = await axios.get(`/cars/${id}`);
  return res.data;
}

export async function getBrands() {
  const res = await axios.get('/brands');
  return res.data;
}