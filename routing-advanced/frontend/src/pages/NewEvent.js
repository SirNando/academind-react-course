import EventForm from "../components/EventForm";
import { json, redirect } from "react-router";

export async function newEventAction({ request, params }) {
  const data = await request.formData();

  const eventData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };

  const response = await fetch("http://localhost:8080/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  });

  if (!response.ok) {
    console.log(response);
    throw json({ message: "Could not save event" }, { status: 500 });
  }

  return redirect("/events");
}

export default function NewEvent() {
  return <EventForm />;
}