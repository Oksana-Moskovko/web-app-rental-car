"use client";
import css from "./CatalogForn.module.css";

export const CatalogForm = () => {
  return (
    <div className={css.formDiv}>
      <h3 className={css.title}>Book your car now</h3>
      <p className={css.description}>
        Stay connected! We are always ready to help you.
      </p>

      <form
        className={css.form}
        //   action={handleSubmit}
      >
        <label className={css.labelForm}>
          <input
            type="text"
            name="name"
            placeholder="Name*"
            className={css.input}
            //   onChange={handleChange}
            required
          />
        </label>

        <label className={css.labelForm}>
          <input
            type="text"
            name="email"
            className={css.input}
            placeholder="Email*"
            //   onChange={handleChange}
            required
          />
        </label>

        <label className={css.labelForm}>
          <input
            type="text"
            name="data"
            placeholder="Booking date"
            className={css.input}
            //   onChange={handleChange}
            required
          />
        </label>

        <label className={css.labelCommen}>
          <textarea
            name="comment"
            placeholder="Comment"
            className={css.textarea}
            //   onChange={handleChange}
          />
        </label>

        <button type="submit" className={css.submitButton}>
          Send
        </button>
      </form>
    </div>
  );
};
