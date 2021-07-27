import { Spinner } from "react-bootstrap";

const LodingButtonContent = () => {
  return (
    <>
      <Spinner
        as="span"
        animation="grow"
        size="sm"
        role="status"
        aria-hidden="true"
      />
      <Spinner
        as="span"
        animation="grow"
        size="sm"
        role="status"
        aria-hidden="true"
      />
      &nbsp;&nbsp;Loading...
    </>
  );
};

export default LodingButtonContent;
