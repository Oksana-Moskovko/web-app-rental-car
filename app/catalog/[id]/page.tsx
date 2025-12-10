import { getCar } from "@/lib/api";
import Image from "next/image";
import css from "./CatalogDetails.module.css";
import { CatalogForm } from "@/components/CatalogForm/CatalogForm";

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
    <section className={css.sectionCatalog}>
      <div className={`container ${css.carDiv}`}>
        <div>
          <div className={css.imageDiv}>
            <Image
              className={css.carImag}
              src={car.img}
              alt={car.description}
              width={640}
              height={512}
            />
          </div>

          <CatalogForm />
        </div>
        <div className={css.carDetalis}>
          <div className={css.carTitleInfo}>
            <h3 className={css.carTitle}>
              {car.brand}
              {car.model},{car.year}
              <span className={css.spanTitle}>Id: {car.id.slice(0, 4)}</span>
            </h3>
            <p>
              {car.address.split(", ")[1]}, {car.address.split(", ")[2]}{" "}
              Mileage: {mileage} km
            </p>
            <p className={css.carPrise}>${car.rentalPrice}</p>
            <p>{car.description}</p>
          </div>

          <div className={css.carDetlInfo}>
            <div className={css.info}>
              <p className={css.listTitle}>Rental Conditions:</p>
              <ul className={css.infoList}>
                {car.rentalConditions.map((coud, i) => (
                  <li className={css.infoListLi} key={i}>
                    {coud}
                  </li>
                ))}
              </ul>
            </div>

            <div className={css.info}>
              <p className={css.listTitle}>Car Specifications:</p>
              <ul className={css.infoList}>
                <li className={css.infoListLi}>Year:{car.year}</li>
                <li className={css.infoListLi}>Type::{car.type}</li>
                <li className={css.infoListLi}>
                  Fuel Consumption:{car.fuelConsumption}
                </li>
                <li className={css.infoListLi}>Engine Size:{car.engineSize}</li>
              </ul>
            </div>

            <div className={css.info}>
              <p className={css.listTitle}>Accessories and functionalities:</p>
              <ul className={css.infoList}>
                {car.functionalities.map((coud, i) => (
                  <li className={css.infoListLi} key={i}>
                    {coud}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CatalogDetails;
