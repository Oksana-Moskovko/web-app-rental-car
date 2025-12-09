"use client";

import { Car } from "@/type/car";
import Image from "next/image";
import css from "./CarItem.module.css";
import { useRouter } from "next/navigation";

type CarItemProps = {
  item: Car;
};
const CarItem = ({ item }: CarItemProps) => {
  const router = useRouter();
  const type = item.type.toLocaleLowerCase();
  const mileage = new Intl.NumberFormat("uk-UA").format(item.mileage);

  return (
    <li className={css.carItem}>
      <Image
        className={css.carImag}
        src={item.img}
        alt={item.description}
        width={276}
        height={268}
      />
      <div className={css.divHeader}>
        <h3>
          {item.brand}
          <span className={css.carModel}>{item.model}</span>,{item.year}
        </h3>
        <span>${item.rentalPrice}</span>
      </div>

      <div className={css.description}>
        <p>
          {item.address.split(", ")[1]} | {item.address.split(", ")[2]} |
          {item.rentalCompany} |
        </p>
        <p className={css.capitalize}>
          {type} | <span className={css.mileage}>{mileage} km</span>
        </p>
      </div>

      <button
        onClick={() => {
          router.push(`/catalog/${item.id}`);
        }}
        className={css.carBtm}
      >
        Read more
      </button>
    </li>
  );
};

export default CarItem;
