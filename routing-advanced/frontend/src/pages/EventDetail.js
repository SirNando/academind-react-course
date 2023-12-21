import { useParams } from "react-router";
import { Link } from "react-router-dom";

export default function EventDetail() {
  const { id: eventId } = useParams();

  return (
    <>
      <h1>Event Detail page</h1>
      <p>Event ID is {eventId}</p>
      <Link to=".." relative="path">
        Go back
      </Link>
    </>
  );
}
