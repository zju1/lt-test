import { UseFormReturn, FieldValues } from "react-hook-form";

/* eslint-disable @typescript-eslint/no-explicit-any */
declare module "@mui/material/Button" {
  declare interface ButtonPropsVariantOverrides {
    light: true;
  }
}

export type RequestMethods = "GET" | "POST" | "DELETE" | "PATCH" | "PUT";

/**
 * @param {any} StateType Simple states like loading, data, errors etc.
 * @param {any} ActionsType Callable functions like setLoading, setErrors, handleSubmit etc.
 * @example ```tsx //
 * import { createContext } from "react";
 *
 * interface DataState {
 *    loading: boolean;
 *    data: string[]
 * }
 *
 * interface DataActions {
 *    fetchData: () => Promise<string[]>
 * }
 *
 * const dataContext = createContext<BaseProvider<DataState,DataActions>>({
 *  // Initialize...
 * })
 * ```
 */
export type BaseProvider<StateType = unknown, ActionsType = unknown> = {
  state: StateType;
  actions: ActionsType;
};

export type WithFormState<T = unknown> = T & {
  formStore: UseFormReturn<FieldValues, any, undefined>;
};

export type WithFormActions<T = unknown> = T & {
  handleSubmit: (
    e?: React.BaseSyntheticEvent<object, any, any> | undefined
  ) => Promise<void>;
};

export type FCProps<Props = unknown> = Props & {
  children: React.ReactElement;
};

export type BaseResponse<T = unknown> = {
  data: T;
  isOk: boolean;
  message: string;
};
