import React from "react";

export const PicGallery = () => {
  return (
    <>
    <div className="row mt-5">
        <div className="col-lg-3 col-md-12 text-center">
            <img  src="../assets/img-1.jpg"  alt="foodies"  className="img-fluid Picx"    />
        </div>
        <div className="col-lg-3 col-md-12 text-center">
            <img  src="../assets/img-2.jpg"  alt="foodies"  className="img-fluid Picx"  />
        </div>
        <div className="col-lg-3 col-md-12 text-center">
            <img  src="../assets/img-3.jpg" alt="foodies"  className="img-fluid Picx"   />
        </div>
        <div className="col-lg-3 col-md-12 text-center">
            <img  src="../assets/img-4.jpg"  alt="foodies" className="img-fluid Picx"   />
        </div>
    </div>
    </>
  );
}