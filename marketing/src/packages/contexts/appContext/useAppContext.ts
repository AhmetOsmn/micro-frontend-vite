import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { User } from "../../dtos/app/User";

type Store = {
  user: User | null;
  users: User[];
  setUser: (user: User | null) => void;
  createNewUser: (user: User) => void;
};

export const useAppContext = create<Store>()(
  devtools(
    persist<Store>(
      (set) => ({
        user: null,
        users: [],
        setUser: (user) => set(() => ({ user })),
        createNewUser: (user) =>
          set((state) => ({ users: [...state.users, user] })),
      }),
      {
        name: "app-context",
      }
    )
  )
);
