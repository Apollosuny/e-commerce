import { create } from 'zustand';

type State = {
  isShowing: boolean;
};

type Actions = {
  show: () => void;
  hide: () => void;
};

export const useMenuStore = create<State & Actions>((set) => ({
  isShowing: false,
  show: () => set({ isShowing: true }),
  hide: () => set({ isShowing: false }),
}));
