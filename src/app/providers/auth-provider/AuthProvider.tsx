/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import { useForm } from "react-hook-form";
import { authContext } from "./context";
import { SignUp } from "../../../pages";
import {
  ICreateUser,
  useGetMeMutation,
  useSignUpMutation,
} from "../../api/api.service";
import { useAppDispatch } from "../../store/store";
import { toast } from "react-toastify";
import { setUser } from "../../store/slices/authSlice";
import { envVars } from "../../constants/envVars";
import { useAuth } from "../../../hooks/useAuth";
import { Navigate } from "react-router-dom";

export function AuthProvider() {
  const { authenticated } = useAuth();
  const [signUp, { isLoading }] = useSignUpMutation();
  const [getMe, { isLoading: getMeLoading }] = useGetMeMutation();

  const dispatch = useAppDispatch();

  const formStore = useForm();

  const handleSubmit = formStore.handleSubmit(async (data) => {
    try {
      const body = {
        ...data,
        key: (data.name as string).replace(" ", "").toLowerCase(),
        secret: envVars.userSecret,
      };
      const response = await signUp(body as ICreateUser).unwrap();
      dispatch(
        setUser({
          user: response.data,
        })
      );
      const userResponse = await getMe().unwrap();
      dispatch(
        setUser({
          user: userResponse.data,
          authenticated: true,
        })
      );
    } catch (error: any) {
      toast.error(error?.data?.message || error.message || "Unknown error!");
    }
  });

  return authenticated ? (
    <Navigate to="/" />
  ) : (
    <authContext.Provider
      value={{
        actions: {
          handleSubmit,
        },
        state: {
          formStore,
          isLoading: isLoading || getMeLoading,
        },
      }}
    >
      <SignUp />
    </authContext.Provider>
  );
}
