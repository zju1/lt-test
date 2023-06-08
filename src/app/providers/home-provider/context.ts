/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useContext } from "react";
import {
  BaseProvider,
  BaseResponse,
  WithFormActions,
  WithFormState,
} from "../../../@types";
import { IBookResponse } from "../../api/api.service";

type HomeContextProps = BaseProvider<
  WithFormState<{
    data: BaseResponse<IBookResponse[] | null> | undefined;
    isFetching: boolean;
    isLoading: boolean;
    addOpen: boolean;
    currentBook: IBookResponse | null;
  }>,
  WithFormActions<{
    setAddOpen: any;
    handleAddClose: any;
    setCurrentBook: any;
    handleEditClose: any;
    handleDelete: any;
    handleLogout: any;
  }>
>;

export const homeContext = createContext<HomeContextProps>({
  actions: null as any,
  state: null as any,
});

export function useHome() {
  const homeStore = useContext(homeContext);
  return homeStore;
}
