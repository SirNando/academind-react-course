import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Root from "./Root";
import Error from "./pages/Error";
import Home from "./pages/Home";
import EventsRoot from "./EventsRoot";
import Events, { loader as eventsLoader } from "./pages/Events";
import EventDetail, {
  eventDetailLoader,
  deleteEventAction,
} from "./pages/EventDetail";
import EditEvent from "./pages/EditEvent";
import { action as manipulateEventAction } from "./components/EventForm";
import NewEvent from "./pages/NewEvent";
import Newsletter, {
  action as newsletterAction,
} from "./components/Newsletter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "events",
        element: <EventsRoot />,
        children: [
          {
            index: true,
            element: <Events />,
            loader: eventsLoader,
          },
          {
            path: ":id",
            id: "event-detail",
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetail />,
                action: deleteEventAction,
              },
              {
                path: "edit",
                element: <EditEvent />,
                action: manipulateEventAction,
              },
            ],
          },
          {
            path: "new",
            element: <NewEvent />,
            action: manipulateEventAction,
          },
        ],
      },
      {
        path: "newsletter",
        element: <Newsletter />,
        action: newsletterAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
