

export const SubscribeForm = () => {
  return (
    <>
<section className="container-fluid bg-dark text-white py-4">
    <div className="container-fluid bg-dark text-white">
      <div className="row">
        <div className="col-lg mt-5 h3">Stay in touch!</div>
        <div className="col-lg py-5">
        <input type="text" id="username" name="username" placeholder="Name*" style={{height: "50px",width:"100%"}} />
        </div>
        <div className="col-lg py-5">
        <input type="email" id="mail" name="mail" placeholder="Email*"  style={{height: "50px",width:"100%"}} />
        </div>
        <div className="col-lg py-5">
        <button className="btn btn-lg align-self-start py-3 px-4" style={{backgroundColor:"aquamarine",borderRadius:"0px"}}>Subscribe</button>
        </div>
      </div>
    </div>
  </section>







    </>
  );
}