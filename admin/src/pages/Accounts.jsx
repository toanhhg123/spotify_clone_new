import { useEffect } from "react";
import { Link, } from "react-router-dom";
import { deleteAccount, getAll } from "../api/account";
import LoadingSpinner from "../components/loadingSpinner";
import PageHeader from "../components/PageHeader";

import useFetch from "../hooks/useFetch";
const Accounts = () => {

  const [accountState, call] = useFetch();
  
  useEffect(()=>{
    call(getAll)
  },[])
  console.log(accountState)
  return (
    <>
      <PageHeader title="Accounts" from={"accounts"} to={"list"} />
      {
        accountState.loading && <LoadingSpinner/> 
      }
      {
        accountState.error && <h1 className="text-danger">{accountState.error}</h1>
      }
      
      {
        accountState.payload && 
        <div className="row" style={{left:0, right:0, margin: 'auto'}}>

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
                      accountState.payload.data.map(acc => {
                        return <tr key={acc._id}>
                                  <td>{acc._id}</td>
                                  <td>{acc.userName}</td>
                                  <td>{acc.role}</td>
                                  <td>
                                      <Link  to={`/Update/Account/${acc._id}`} className='btn btn-danger btn-sm'>Edit</Link>
                                  </td>
                                  <td>
                                      <button onClick={(e) => {
                                            e.preventDefault();
                                           
                                            call(deleteAccount({_id: acc._id}))
                                              .then(() => window.location.reload(true))
                                              .catch((err) => alert(err.message));
                                          }}  className='btn btn-danger btn-sm'>Delete
                                        </button>
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
      }

    </>
  );
};

export default Accounts;
