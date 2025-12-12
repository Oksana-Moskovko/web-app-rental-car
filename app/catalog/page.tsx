import CarsList from "@/components/CarsList/CarsList";
import { getCars } from "@/lib/api";
import css from "./Catalog.module.css";
import FilterCars from "@/components/FilterCars/FilterCars";
// import { FilterCars } from "@/components/FilterCars/FilterCars";

const Catalog = async () => {
  const response = await getCars();
  console.log("cars", response);

  // const handlClik = () => {};

  return (
    <section className={css.sectionCatalog}>
      <div className="container">
        <FilterCars />
        <CarsList cars={response.cars} />
        <button
          className={css.cartListBtn}
          // onClick={handlClik}
        >
          Load more
        </button>
      </div>
    </section>
  );
};

export default Catalog;
