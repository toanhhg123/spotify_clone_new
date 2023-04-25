import { useEffect, useState } from "react";
import { getAll } from "../api/music";
import PageHeader from "../components/PageHeader";

const Musics = () => {
  const [musics, setMusics] = useState([])
  useEffect(() => {
      getAll().then(({data}) => {
        setMusics(data)
      }).catch(e => console.log(e.message)) ;
  }, [])
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
                      <th>Title</th>
                      <th>Duration</th>
                      <th>Release Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                  {
                    musics.map(music => {
                      return <tr key={music._id}>
                                <td>{music.title}</td>
                                <td>{music.duration}</td>
                                <td>{music.releaseDate}</td>
                                <td>
                                  <label className="badge badge-danger">Sửa</label>
                                </td>
                                <td>
                                  <label className="badge badge-danger">Xoá</label>
                                </td>
                              </tr>
                    
                    })
                  }
                    
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
