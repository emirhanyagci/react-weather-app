import { Outlet } from "react-router-dom";
export default function MainLayout() {
  return (
    <main className=" mt-4 flex min-w-80 justify-center">
      <Outlet />
    </main>
  );
}
