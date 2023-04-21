import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAll } from "../api/account";
import PageHeader from "../components/PageHeader";

const Accounts = () => {
  const [accounts, setAccount] = useState([])

  useEffect(() => {
      getAll().then(({data}) => {
        setAccount(data)
      }).catch(e => console.log(e.message)) ;
  }, [])
  console.log(accounts)
  return (
    <>
      <PageHeader title="Accounts" from={"accounts"} to={"list"} />
      
      <div className="row">

        <div className="col-lg-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Account Table</h4>
              <p className="card-description">
                {" "}
                Add class <code>.table</code>
              </p>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>User Name</th>
                     
                      <th>Role</th>
                    </tr>
                  </thead>
                  <tbody>
                  {
                    accounts.map(acc => {
                      return <tr key={acc._id}>
                                <td>{acc._id}</td>
                                <td>{acc.userName}</td>
                                <td>{acc.role}</td>
                                <td>
                                    <Link  to={`/Update/Account/${acc._id}`} className='btn btn-danger btn-sm'>Edit</Link>
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

export default Accounts;
