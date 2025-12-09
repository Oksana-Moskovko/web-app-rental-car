import { Car } from "@/type/car";
import CarItem from "../CarItem/CarItem";
import css from "./CarsList.module.css";

type CarsListProps = {
  cars: Car[];
};

const CarsList = ({ cars }: CarsListProps) => {
  return (
    <ul className={css.carsList}>
      {cars.map((car) => (
        <CarItem key={car.id} item={car} />
      ))}
    </ul>
  );
};

export default CarsList;
