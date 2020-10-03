import React, { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import {
  CardWrapper,
  Card,
  CardBody,
  CardHeader,
  Button,
  Reviews,
  Review,
} from "./styles";
function Restraunt({ data }) {
  const [show, setShow] = useState(false);
  return (
    <CardWrapper className=" m-4 p-0 pb-4">
      <Card className="m-0 p-0 pb-3">
        <CardHeader img={data.image}></CardHeader>
        <CardBody className>
          <span>{data.price}</span>
          <h2>{data.name}</h2>
          <p>{data.description}</p>
        </CardBody>
        <div className="d-flex align-items-center justify-content-around pt-4">
          <Button className="btn w-30" onClick={() => setShow(true)}>
            Reviews
          </Button>
          <Button className="btn w-30">Book</Button>
        </div>
      </Card>
      <Reviews className="row m-0" show={show}>
        <span>
          <RiCloseLine size={22} onClick={() => setShow(false)} />
        </span>
        {data.reviews.map((review, idx) => (
          <Review
            key={idx}
            className="col-12 d-flex w-100 justify-content-between m-0 p-0 my-3 px-2"
          >
            <img src={review.image} alt="review" />
            <p>{review.description}</p>
          </Review>
        ))}
      </Reviews>
    </CardWrapper>
  );
}

export default Restraunt;
