import { Outlet } from "react-router";
import MainNavigation from "./components/MainNavigation";
import EventsNavigation from "./components/EventsNavigation";

export default function EventsRoot() {
  return (
    <>
      <EventsNavigation />
      <Outlet />
    </>
  );
}
