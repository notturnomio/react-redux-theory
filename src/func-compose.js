import React from "react";
import { compose, pipe } from "lodash/fp";

const FuncCompose = (params) => {
  const x = 2;
  const double = (num) => num * 2;
  const square = (num) => num * num;
  const divide = (num) => num / 2;

  const currying = (num2) => {
    return function (num1) {
      return num1 / num2;
    };
  };

  const mathCalculateCompose = compose(divide, square, double);

  const mathCalculatePipe = pipe(double, square, divide, currying(3));

  return (
    <h1>
      Compose: {mathCalculateCompose(x)} and Pipe: {mathCalculatePipe(x)}{" "}
    </h1>
  );
};

export default FuncCompose;
