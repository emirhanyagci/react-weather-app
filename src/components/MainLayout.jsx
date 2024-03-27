import { Outlet } from "react-router-dom";
export default function MainLayout() {
  return (
    <main className=" flex min-w-80 justify-center pt-4">
      <Outlet />
    </main>
  );
}
