/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useContext } from "react";
import { BaseProvider, WithFormActions, WithFormState } from "../../../@types";

export type AuthProviderProps = BaseProvider<
  WithFormState<{
    isLoading: boolean;
  }>,
  WithFormActions
>;

export const authContext = createContext<AuthProviderProps>({
  state: null as any,
  actions: null as any,
});

export const useAuth = () => {
  const authStore: AuthProviderProps = useContext(authContext);

  return authStore;
};
