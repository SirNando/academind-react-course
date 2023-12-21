import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";

import EventsList from "../components/EventsList";

export async function eventsLoader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // ...
  } else {
    const resData = await response.json();
    return resData.events;
  }
}

function EventsPage() {
  const events = useLoaderData();
  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export default EventsPage;
