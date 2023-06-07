import { useSelector } from "react-redux";
import { RootState } from "../app/store/store";

export function useAuth() {
  const authStore = useSelector((store: RootState) => store.auth);
  return authStore;
}
