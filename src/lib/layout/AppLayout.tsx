import { Outlet } from "react-router-dom";
import { AuthGuard } from "../../app/guard/AuthGuard";

export function AppLayout() {
  return (
    <AuthGuard>
      <Outlet />
    </AuthGuard>
  );
}
