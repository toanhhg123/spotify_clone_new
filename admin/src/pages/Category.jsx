import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteCategory, getAll } from "../api/category";
import PageHeader from "../components/PageHeader";


const Category = () => {
  const [category, setCategory] = useState([])
  const navigate = useNavigate();
  const handelOnclickDelete = (_id)=>{
     deleteCategory({_id:_id}).then( navigate("/category"))
    }
  useEffect(() => {
      getAll().then(({data}) => {
        setCategory(data)
      }).catch(e => console.log(e.message)) ;
  }, [])
  console.log(category)
  return (
    <>
      <PageHeader title="Category" from={"musics"} to={"list"} />
      
      <div className="row">

        <div className="col-lg-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Category Table</h4>
              <p className="card-description">
                {" "}
                Add class <code>Category table</code>
              </p>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Tên Danh Mục</th>
                      <th>Mô Tả</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                  {
                    category.map(cat => {
                      return <tr key={cat._id}>
                                <td>{cat._id}</td>
                                <td>{cat.name}</td>
                                <td>{cat.description}</td>
                                               
                                <td>
                                  <button onClick={handelOnclickDelete(cat._id)} className="btn badge-danger">Xoá</button>
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

export default Category;
