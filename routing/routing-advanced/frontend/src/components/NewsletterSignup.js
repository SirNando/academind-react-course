import { useEffect } from "react";
import classes from "./NewsletterSignup.module.css";
import { useFetcher } from "react-router-dom";

function NewsletterSignup() {
  // Fetcher calls an action from another route
  // without leaving the current one
  // Sort of loading "in the background" so to say
  const fetcher = useFetcher();
  const { data, state } = fetcher;

  useEffect(() => {
    if (state === "idle" && data && data.message) {
      window.alert(data.message);
    }
  }, [data, state]);

  return (
    <fetcher.Form
      method="post"
      action="/newsletter" // Using the "newsletterAction" assigned to that route
      className={classes.newsletter}
    >
      <input
        type="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button>Sign up</button>
    </fetcher.Form>
  );
}

export default NewsletterSignup;
