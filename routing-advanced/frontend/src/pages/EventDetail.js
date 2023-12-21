import { json, redirect, useRouteLoaderData } from "react-router";

import EventItem from "../components/EventItem";

export async function eventDetailLoader({ request, params }) {
  const { id: eventId } = params;
  const response = await fetch("http://localhost:8080/events/" + eventId);

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected event." },
      { status: 500 }
    );
  } else {
    return response;
  }
}

export async function deleteEventAction({ request, params }) {
  const eventId = params.id;
  const response = await fetch("http://localhost:8080/events/" + eventId, {
    method: request.method,
  });

  if (!response.ok) {
    throw json({ message: "Could not delete event." }, { status: 500 });
  } else {
    return redirect("/events");
  }
}

export default function EventDetail() {
  const data = useRouteLoaderData("event-detail");
  return <EventItem event={data.event} />;
}
