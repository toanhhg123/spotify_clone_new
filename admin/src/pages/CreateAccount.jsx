import { useState } from "react";
import { insert } from "../api/account";
import LoadingSpinner from "../components/loadingSpinner";
import useFetch from "../hooks/useFetch";

const CreateAccount = () => {
  const [accountState, call] = useFetch();
  const [userName, setUserName] = useState("");
  const [passwordHash, setPasswordHash] = useState("");
  const handleCreateUser = async () => {
    return await insert({ userName: userName, passwordHash: passwordHash });
  };
  const handelSumit = async (e) => {
    e.preventDefault();
    await call(handleCreateUser);
  };
  return (
    <>
      {accountState.loading && <LoadingSpinner />}
      {accountState.error && (
        <h1 className="text-danger">{accountState.error}</h1>
      )}

      <div className="col-12 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Khởi Tạo Tài Khoản</h4>
            <p className="card-description"> Khởi Tạo Tài Khoản </p>
            {!accountState.loading && (
              <form className="forms-sample" onSubmit={handelSumit}>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail3">User Name</label>
                  <input
                    placeholder={"userName"}
                    onChange={(e) => {
                      setUserName(e.target.value);
                    }}
                    type="text"
                    className="form-control"
                    id="exampleInputEmail3"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword4">Password</label>
                  <input
                    placeholder={"password"}
                    onChange={(e) => {
                      setPasswordHash(e.target.value);
                    }}
                    type="password"
                    className="form-control"
                    id="exampleInputPassword4"
                  />
                </div>
                <button type="submit" className="btn btn-primary mr-2">
                  Submit
                </button>
                <button type="button" className="btn btn-dark">
                  Cancel
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateAccount;
