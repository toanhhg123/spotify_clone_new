import { useEffect } from "react";
import { deleteMusic, getAll } from "../api/music";
import LoadingSpinner from "../components/loadingSpinner";
import PageHeader from "../components/PageHeader";
import useFetch from "../hooks/useFetch";

const Musics = () => {
  const [musicState, call] = useFetch();
  useEffect(() => {
    call(getAll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <PageHeader title="Music" from={"musics"} to={"list"} />
      {musicState.loading && <LoadingSpinner />}
      {musicState.error && <h1 className="text-danger">{musicState.error}</h1>}

      {musicState.payload && (
        <div className="row" style={{ left: 0, right: 0, margin: "auto" }}>
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
                        <th>Title</th>
                        <th>Duration</th>
                        <th>Release Date</th>
                        <th>Type</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {musicState.payload.data.map((music) => {
                        return (
                          <tr key={music._id}>
                            <td>{music.title}</td>
                            <td>{music.duration}</td>
                            <td>{music.releaseDate}</td>
                            <td>{music.isVip ? "Vip" : "Nomal"}</td>
                            <td>
                              <button
                                onClick={(e) => {
                                  e.preventDefault();

                                  call(deleteMusic({ _id: music._id }))
                                    .then(() => window.location.reload(true))
                                    .catch((err) => alert(err.message));
                                }}
                                className="btn btn-danger btn-sm"
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Musics;
