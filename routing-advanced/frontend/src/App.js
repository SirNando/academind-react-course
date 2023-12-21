import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./pages/Home";
import Events, { eventsLoader } from "./pages/Events";
import EventDetail from "./pages/EventDetail";
import NewEvent from "./pages/NewEvent";
import EditEvent from "./pages/EditEvent";
import EventsRoot from "./EventsRoot";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
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
            element: <EventDetail />,
          },
          {
            path: "new",
            element: <NewEvent />,
          },
          {
            path: ":id/edit",
            element: <EditEvent />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
