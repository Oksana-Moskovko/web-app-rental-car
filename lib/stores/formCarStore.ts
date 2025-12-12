import { create } from 'zustand';
import { NewCarData } from '../api';
import { persist } from 'zustand/middleware';

type CarDraftStore = {
  draft: NewCarData;
  setDraft: (carForm: NewCarData) => void;
  clearDraft: () => void;
};

const initialDraft: NewCarData = {
    name: '',
    email: '',
    date: '',
  comment: '',
  categoryId: '',
};

export const useCarDraftStore = create<CarDraftStore>()(
  persist(
    (set) => ({
      draft: initialDraft,
      setDraft: (carForm) => set(() => ({ draft: carForm })),
      clearDraft: () => set(() => ({ draft: initialDraft })),
    }),
    {
      name: 'car-draft',
      partialize: (state) => ({ draft: state.draft }),
    },
  ),
);