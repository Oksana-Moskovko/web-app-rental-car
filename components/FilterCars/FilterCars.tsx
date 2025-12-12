"use client";

import { useEffect, useState } from "react";
import css from "./FilterCars.module.css";
import { getBrands } from "@/lib/api";
import { prices } from "@/type/car";

const FilterCars = () => {
  const [isOpenBrand, setIsOpenBrand] = useState(false);
  const [isOpenPrice, setIsOpenPrice] = useState(false);
  const [brands, setBrands] = useState<string[]>([]);

  const toggleBrand = () => setIsOpenBrand(!isOpenBrand);
  const togglePrice = () => setIsOpenPrice(!isOpenPrice);

  useEffect(() => {
    const fetchBrands = async () => {
      const data = await getBrands();
      setBrands(data);
    };
    fetchBrands();
  }, []);
  return (
    <form>
      <button onClick={toggleBrand} className={css.menuButton}>
        Choose a brand ▾
      </button>
      {isOpenBrand && (
        <ul className={css.menuList}>
          {brands.map((brand) => (
            <li key={brand} className={css.menuItem} onClick={toggleBrand}>
              {brand}
            </li>
          ))}
        </ul>
      )}
      <button onClick={togglePrice} className={css.menuButton}>
        Choose a price ▾
      </button>
      {isOpenPrice && (
        <ul className={css.menuList}>
          {prices.map((price) => (
            <li onClick={togglePrice} key={price} className={css.menuItem}>
              {price}
            </li>
          ))}
        </ul>
      )}
      <div className={css.mileageLabel}>
        <label>
          <input type="number" name="mileageStart" />
        </label>
        <label>
          <input type="number" name="mileageEnd" />
        </label>
      </div>

      <button className={css.search} type="submit">
        Search
      </button>
    </form>
  );
};

export default FilterCars;
