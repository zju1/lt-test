/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Home } from "../../../pages";
import { homeContext } from "./context";
import {
  ICreateBook,
  useCreateBookMutation,
  useGetAllBooksQuery,
} from "../../api/api.service";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "react-toastify";

export function HomeProvider() {
  const [addOpen, setAddOpen] = useState(false);
  const [createBook, { isLoading }] = useCreateBookMutation();
  const { data, isFetching } = useGetAllBooksQuery();
  const formStore = useForm();

  const handleSubmit = formStore.handleSubmit(async (data) => {
    try {
      await createBook(data as ICreateBook).unwrap();
      toast.success("The book successfully added to your bookshelf");
      setAddOpen(false);
    } catch (error: any) {
      toast.error(error?.data?.message || error?.message || "Unknown error");
    }
  });

  return (
    <homeContext.Provider
      value={{
        actions: { handleSubmit, setAddOpen },
        state: { data, isFetching, formStore, addOpen, isLoading },
      }}
    >
      <Home />
    </homeContext.Provider>
  );
}
