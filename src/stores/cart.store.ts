import { create } from 'zustand';

type State = {
  isOpenedModal: boolean;
};

type Actions = {
  open: () => void;
  hide: () => void;
};

export const useCartStore = create<State & Actions>((set) => ({
  isOpenedModal: false,
  open: () => set({ isOpenedModal: true }),
  hide: () => set({ isOpenedModal: false }),
}));
