import { Await, defer, json, useLoaderData } from "react-router";

import EventsList from "../components/EventsList";
import { Suspense } from "react";

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

export function loader() {
  return defer({
    events: loadEvents(),
  });
}

function EventsPage() {
  const { events } = useLoaderData();

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
}

export default EventsPage;
