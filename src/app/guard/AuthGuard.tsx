import { Navigate } from "react-router-dom";
import { FCProps } from "../../@types";
import { useAuth } from "../../hooks/useAuth";

export function AuthGuard(props: FCProps) {
  const { authenticated } = useAuth();

  if (authenticated) {
    return props.children;
  }

  return <Navigate to="/auth" />;
}
