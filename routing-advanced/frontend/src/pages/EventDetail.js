import { Await, defer, json, redirect, useRouteLoaderData } from "react-router";

import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";
import { Suspense } from "react";

async function loadEvent(id) {
  const eventId = id;
  const response = await fetch("http://localhost:8080/events/" + eventId);

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected event." },
      { status: 500 }
    );
  } else {
    const repsonseData = await response.json();
    return repsonseData.event;
  }
}

async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // return { isError: true, message: "Could not fetch events" };
    // throw { message: "Could not fetch events.", status: 500 };
    /* throw new Response(
      JSON.stringify({ message: "There was an internal server error." }),
      { status: 500 }
    ); */
    throw json({ message: "Could not fetch events." }, { status: 500 });
  } else {
    const repsonseData = await response.json();
    return repsonseData.events;
  }
}

export async function eventDetailLoader({ request, params }) {
  const id = params.id;

  return defer({
    event: await loadEvent(id),
    events: loadEvents(),
  });
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
  const { event, events } = useRouteLoaderData("event-detail");

  return (
    <>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={event}>
          {(loadedEvent) => <EventItem event={loadedEvent} />}
        </Await>
      </Suspense>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={events}>
          {(loadedEvents) => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
}
