import { useRouteError } from "react-router";
import LinkButton from "./LinkButton";

function Error() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const error: any = useRouteError();

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>

      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
}

export default Error;
