export const BMICharts = () => {
  return (
    <>
      <section className="container py-5">
        <div className="row">
          <div className="col-lg-6">
            <h2 className="mb-4">Calculate Your BMI</h2>
            <p className="mb-4">
              BMI calculator generates the number of calories your body burns
              per day at rest. Your BMR with activity factor is the number of
              calories your body burns per day based on the activity factor you
              selected.
            </p>
            <form>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label for="height">
                    Height(cm) <span className="text-danger">*</span>
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    name="height"
                    id="height"
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label for="weight">
                    Weight(kg) <span className="text-danger">*</span>
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    name="weight"
                    id="weight"
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label for="age">
                    Age <span className="text-danger">*</span>
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    name="age"
                    id="age"
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label for="gender">
                    Gender <span className="text-danger">*</span>
                  </label>
                  <select
                    className="form-select"
                    name="gender"
                    id="gender"
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div className="col-12 mb-3">
                  <label for="activity">
                    Select An Activity Level <span className="text-danger">*</span>
                  </label>
                  <select
                    className="form-select"
                    name="activity"
                    id="activity"
                    required
                  >
                    <option>Little or no Exercise/Desk job</option>
                    <option>Light Exercise (1-3 days/week)</option>
                    <option>Moderate Exercise (3-5 days/week)</option>
                    <option>Heavy Exercise (6-7 days/week)</option>
                  </select>
                </div>
                <div className="col-12 my-2">
                  <button
                    type="submit"
                    className="btn btn-dark px-4 py-3 h1"
                    style={{ borderRadius: "0px" }}
                  >
                    Calculate
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-6">
            <h2 className="mb-4">BMI Calculator Chart</h2>
            <table className="table">
              <thead>
                <tr>
                  <th>BMI</th>
                  <th className="msp">Weight Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Below 18.5</td>
                  <td className="msp">Under Weight</td>
                </tr>
                <tr>
                  <td>18.5-24.9</td>
                  <td className="msp">Healthy</td>
                </tr>
                <tr>
                  <td>25.0-29.9</td>
                  <td className="msp">Overweight</td>
                </tr>
                <tr>
                  <td>30.0-and Above</td>
                  <td className="msp">Obese</td>
                </tr>
              </tbody>
            </table>
            <p>
              <b>
                <sup>*</sup>BMR
              </b>{" "}
              Metabolic Rate / <b>BMI</b> Body Mass Index
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
