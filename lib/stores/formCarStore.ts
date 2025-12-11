import { create } from 'zustand';
import { NewCarData } from '../api';
import { persist } from 'zustand/middleware';

type CarDraftStore = {
  draft: NewCarData;
  setDraft: (note: NewCarData) => void;
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
      setDraft: (note) => set(() => ({ draft: note })),
      clearDraft: () => set(() => ({ draft: initialDraft })),
    }),
    {
      name: 'note-draft',
      partialize: (state) => ({ draft: state.draft }),
    },
  ),
);