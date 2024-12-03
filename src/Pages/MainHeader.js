import React from "react";

export const MainHeader = () => {
  return (
    <>
    <div className="container-fluid Main">
    <div
        className="container"
        style={{ paddingTop: "100px", paddingBottom: "100px" }}
      >
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10">
            <h1 className="headen">
              If you're ready to change your relationship with food for the
              better, follow us<b> @healthfirst </b>for daily meal plans and
              updates.
            </h1>
            <p className=" mt-lg-5">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor adhuc invidunt.
            </p>
          </div>
          <div className="col-1"></div>
        </div>
      </div>
    </div>
    </>
  );
};
