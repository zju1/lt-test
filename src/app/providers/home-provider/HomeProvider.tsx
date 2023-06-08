/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Home } from "../../../pages";
import { homeContext } from "./context";
import {
  ICreateBook,
  useCreateBookMutation,
  useDeleteBookMutation,
  useGetAllBooksQuery,
  useSearchBooksQuery,
  useUpdateBookMutation,
} from "../../api/api.service";
import { useForm } from "react-hook-form";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { IBookResponse } from "../../api/api.service";
import { useAppDispatch } from "../../store/store";
import { logout } from "../../store/slices/authSlice";
import { useDebouncedValue } from "../../../hooks/useDebouncedValue";

export function HomeProvider() {
  const [searchKey, setSearchKey] = useState("");
  const key = useDebouncedValue(searchKey, 500);
  const { data: searchResults, isFetching: searchFetching } =
    useSearchBooksQuery(key, {
      skip: !(key.length > 2),
    });
  const [addOpen, setAddOpen] = useState(false);
  const [currentBook, setCurrentBook] = useState<IBookResponse | null>(null);
  const [createBook, { isLoading }] = useCreateBookMutation();
  const [updateBook, { isLoading: updateLoading }] = useUpdateBookMutation();
  const [deleteBook, { isLoading: deleteLoading }] = useDeleteBookMutation();
  const dispatch = useAppDispatch();
  const { data, isFetching } = useGetAllBooksQuery();

  const formStore = useForm();

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleAddClose = () => {
    setAddOpen(false);
    formStore.reset({});
  };

  const handleEditClose = () => {
    setCurrentBook(null);
    formStore.reset({});
  };

  useEffect(() => {
    if (currentBook) {
      formStore.reset(currentBook.book);
    } else {
      formStore.reset();
    }
  }, [currentBook]);

  const handleSubmit = formStore.handleSubmit(async (data) => {
    if (!currentBook) {
      try {
        await createBook(data as ICreateBook).unwrap();
        toast.success("The book successfully added to your bookshelf");
        handleAddClose();
      } catch (error: any) {
        toast.error(error?.data?.message || error?.message || "Unknown error");
      }
    } else {
      try {
        await updateBook({
          id: currentBook.book.id.toString(),
          status: currentBook.status,
        }).unwrap();
        toast.success("The status successfully changed");
        handleEditClose();
      } catch (error: any) {
        toast.error(error?.data?.message || error?.message || "Unknown error");
      }
    }
  });

  const handleDelete = useCallback(async () => {
    if (currentBook) {
      const isConfirmed = confirm(
        `Are you sure to delete ${currentBook.book.title} from your bookshelf?`
      );
      if (isConfirmed) {
        try {
          await deleteBook({ id: currentBook.book.id.toString() }).unwrap();
          toast.success("The book successfully removed from your bookshelf");
          handleEditClose();
        } catch (error: any) {
          toast.error(
            error?.data?.message || error?.message || "Unknown error"
          );
        }
      }
    } else {
      handleEditClose();
    }
  }, [currentBook, handleEditClose]);

  return (
    <homeContext.Provider
      value={{
        actions: {
          handleSubmit,
          setAddOpen,
          handleAddClose,
          setCurrentBook,
          handleEditClose,
          handleDelete,
          handleLogout,
          setSearchKey,
        },
        state: {
          data,
          isFetching,
          formStore,
          addOpen,
          isLoading: isLoading || updateLoading || deleteLoading,
          currentBook,
          searchResults,
          searchKey,
          searchFetching,
        },
      }}
    >
      <Home />
    </homeContext.Provider>
  );
}
