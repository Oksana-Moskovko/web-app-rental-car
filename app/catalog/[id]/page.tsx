import { getCar } from "@/lib/api";
import Image from "next/image";

type Props = {
  params: Promise<{ id: string }>;
};

const CatalogDetails = async ({ params }: Props) => {
  const { id } = await params;
  console.log(id);

  const car = await getCar(id);
  console.log(car);

  const mileage = new Intl.NumberFormat("uk-UA").format(car.mileage);

  return (
    <div>
      <div>
        <Image
          // className={css.carImag}
          src={car.img}
          alt={car.description}
          width={640}
          height={512}
        />
        Catalog form
      </div>
      <div>
        <div>
          <h3>
            {car.brand}
            {car.model},{car.year}
          </h3>
          <p>
            {car.address.split(", ")[1]}, {car.address.split(", ")[2]} Mileage:{" "}
            {mileage} km
          </p>
          <p>${car.rentalPrice}</p>
          <p>{car.description}</p>
        </div>

        <div>
          <p>Rental Conditions:</p>

          <ul>
            {car.rentalConditions.map((coud, i) => (
              <li key={i}>{coud}</li>
            ))}
          </ul>

          <p>Car Specifications:</p>
          <ul>
            <li>Year:{car.year}</li>
            <li>Type::{car.type}</li>
            <li>Fuel Consumption:{car.fuelConsumption}</li>
            <li>Engine Size:{car.engineSize}</li>
          </ul>

          <p>Accessories and functionalities:</p>
          <ul>
            {car.functionalities.map((coud, i) => (
              <li key={i}>{coud}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CatalogDetails;
