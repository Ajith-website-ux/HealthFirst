import Cooking from '../Videos/Cooking.mp4'

export const VideoPage = () => {
  return (
    <>
     <section className="container-fluid py-5 bg-dark">
    <div className="row container" style={{paddingTop:"30px",paddingBottom:"30px"}}>
      <div className="col-lg-7 d-flex align-items-center justify-content-center my-5">
        <div className="card bg-secondary">
        <video muted autoplay loop controls style={{borderRadius:"0px"}}>
                    <source src={Cooking} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
          <div className="card-body">
            <h2 className="text-white text-center">Supplements - Do we need them?</h2>
            <p className="text-white text-center">Expert insights on dietary supplements and their role in your health journey.</p>
          </div>
        </div>
      </div>
      <div className="col-lg-5 d-flex flex-column justify-content-center p-4 text-white my-5">
        <h2 className="mb-4">Listen to our podcast, or <u>Subscribe</u><br/> to get it right to your mail every week.</h2>
        <button className="btn btn-lg align-self-start py-3 px-4" style={{backgroundColor:"aquamarine",borderRadius:"0px"}}>Subscribe</button>
      </div>
    </div>
  </section>
    </>
  );
}