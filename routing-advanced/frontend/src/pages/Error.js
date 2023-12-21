import { useRouteError } from "react-router";
import PageContent from "../components/PageContent";
import MainNavigation from "../components/MainNavigation";

export default function Error() {
  const error = useRouteError();
  let title = "An error occurred";
  let message = "Something went wrong!";

  switch (error.status) {
    case 500: {
      message = error.data.message;
      break;
    }
    case 404: {
      title = "Page not found";
      message = "Could not find resource or page";
    }
    default: {
      title = "No error code specified.";
      message = "Maybe make sure programmers do their job correctly?";
    }
  }

  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
}
