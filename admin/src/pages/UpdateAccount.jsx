import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { findone, update } from "../api/account";

const UpdateAccount = () => {
  const { id } = useParams();
  const [account, setAccount] = useState({});
  const navigate = useNavigate();
  const handelSumit = (e) => {
    e.preventDefault();
    update(account)
      .then(() => navigate("/accounts"))
      .catch((e) => alert(e.message));
  };
  useEffect(() => {
    findone({ _id: id })
      .then(({ data }) => {
        setAccount(data);
      })
      .catch((e) => console.log(e.message));
  }, [id]);
  return (
    <div className="col-12 grid-margin stretch-card">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Cập Nhật Tài Khoản</h4>
          <p className="card-description"> Cập Nhật Tài Khoản </p>
          <form className="forms-sample" onSubmit={handelSumit}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail3">User Name</label>
              <input
                placeholder={account.userName}
                onChange={(e) => {
                  setAccount({ ...account, userName: e.target.value });
                }}
                type="text"
                className="form-control"
                id="exampleInputEmail3"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword4">Password</label>
              <input
                placeholder={account.passwordHash}
                onChange={(e) => {
                  setAccount({ ...account, passwordHash: e.target.value });
                }}
                type="text"
                className="form-control"
                id="exampleInputPassword4"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputRole5">Role</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputRole5"
                placeholder={account.role}
                onChange={(e) =>
                  setAccount({ ...account, role: e.target.value })
                }
              />
            </div>
            <button
              onClick={handelSumit}
              type="submit"
              className="btn btn-primary mr-2"
            >
              Submit
            </button>
            <button className="btn btn-dark">Cancel</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateAccount;
