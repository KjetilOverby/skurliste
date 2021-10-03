import React from "react";
import CreateMainPage from "../src/components/common/create/CreateMainPage";

const create = () => {
  return (
    <>
      <div className="container">
        <CreateMainPage />
      </div>
      <style jsx>
        {`
          .container {
          }
        `}
      </style>
    </>
  );
};

export default create;
