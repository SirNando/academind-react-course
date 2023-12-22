import { useRouteLoaderData } from "react-router";
import EventForm from "../components/EventForm";

export default function EditEvent() {
  const data = useRouteLoaderData("event-detail");
  return <EventForm event={data.event} method="patch" />;
}
