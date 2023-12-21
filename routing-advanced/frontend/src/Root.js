import { Outlet } from "react-router";
import MainNavigation from "./components/MainNavigation";

export default function Root() {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}
