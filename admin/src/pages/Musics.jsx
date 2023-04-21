import PageHeader from "../components/PageHeader";

const Musics = () => {
  return (
    <>
      <PageHeader title="Music" from={"musics"} to={"list"} />
      <div className="row">
        <div className="col-lg-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">mussic Table</h4>
              <p className="card-description">
                {" "}
                Add class <code>.table</code>
              </p>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Profile</th>
                      <th>VatNo.</th>
                      <th>Created</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Jacob</td>
                      <td>53275531</td>
                      <td>12 May 2017</td>
                      <td>
                        <label className="badge badge-danger">Pending</label>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Musics;
