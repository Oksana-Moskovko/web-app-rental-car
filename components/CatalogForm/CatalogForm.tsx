"use client";
import Calendar from "react-calendar";
import css from "./CatalogForn.module.css";
import { useRef, useState } from "react";
import "react-calendar/dist/Calendar.css";
import { useRouter } from "next/navigation";
import { useCarDraftStore } from "@/lib/stores/formCarStore";
import { useMutation } from "@tanstack/react-query";
import { NewCarData } from "@/lib/api";
import { Value } from "react-calendar/dist/shared/types.js";

const calendarProps = {
  next2Label: null,
  prev2Label: null,
  nextLabel: ">",
  prevLabel: "<",
  minDate: new Date(),
  locale: "en-US",
};

type Props = {
  carId: string;
};

export const CatalogForm = ({ carId }: Props) => {
  const router = useRouter();
  const { draft, setDraft, clearDraft } = useCarDraftStore();

  const [date, setDate] = useState<Date | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const formatted = date
    ? date.toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
    : draft.date
    ? new Date(draft.date).toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
    : "";

  const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    if (
      wrapperRef.current &&
      !wrapperRef.current.contains(e.relatedTarget as Node)
    ) {
      setIsOpen(false);
    }
  };

  const handleChangeDate = (value: Value) => {
    if (value instanceof Date) {
      setDate(value);
      setDraft({
        ...draft,
        date: value.toISOString(),
      });
      setIsOpen(false);
    }
  };

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setDraft({
      ...draft,
      categoryId: carId,
      [event.target.name]: event.target.value,
    });
  };

  const { mutate } = useMutation<
    void,
    unknown,
    NewCarData & { categoryId: string }
  >({
    mutationFn: (data) => {
      console.log("Отримані дані:", data);
      return Promise.resolve();
    },
    onSuccess: () => {
      clearDraft();
      router.push("/catalog");
    },
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const values = Object.fromEntries(formData) as NewCarData;
    console.log("values:", values);

    mutate({
      ...values,
      categoryId: carId,
    });
  };

  return (
    <div className={css.formDiv}>
      <h3 className={css.title}>Book your car now</h3>
      <p className={css.description}>
        Stay connected! We are always ready to help you.
      </p>

      <form className={css.form} onSubmit={onSubmit}>
        <label className={css.labelForm}>
          <input
            type="text"
            name="name"
            placeholder="Name*"
            className={css.input}
            value={draft.name}
            onChange={handleChange}
            required
          />
        </label>

        <label className={css.labelForm}>
          <input
            type="text"
            name="email"
            className={css.input}
            placeholder="Email*"
            value={draft.email}
            onChange={handleChange}
            required
          />
        </label>

        <div
          ref={wrapperRef}
          tabIndex={0}
          onBlur={handleBlur}
          className={css.dateWrapper}
        >
          <label className={css.labelForm}>
            <input
              type="text"
              name="date"
              placeholder="Booking date"
              className={css.input}
              readOnly
              value={formatted || draft.date}
              onFocus={() => setIsOpen(true)}
              onChange={handleChange}
              required
            />
          </label>

          {isOpen && (
            <div style={{ position: "absolute", top: "50px", zIndex: 10 }}>
              <Calendar
                className="myCalendar"
                onChange={handleChangeDate}
                value={date}
                {...calendarProps}
              />
            </div>
          )}
        </div>

        <label className={css.labelCommen}>
          <textarea
            name="comment"
            placeholder="Comment"
            className={css.textarea}
            value={draft.comment}
            onChange={handleChange}
          />
        </label>

        <button type="submit" className={css.submitButton}>
          Send
        </button>
      </form>
    </div>
  );
};
