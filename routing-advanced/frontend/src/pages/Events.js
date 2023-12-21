import { useEffect, useState } from "react";
import { json, useLoaderData } from "react-router";

import EventsList from "../components/EventsList";

export async function eventsLoader() {
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
    return response;
  }
}

function EventsPage() {
  const data = useLoaderData();
  if (data.isError) {
    return <p>{data.message}</p>;
  }

  const events = data.events;
  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export default EventsPage;
