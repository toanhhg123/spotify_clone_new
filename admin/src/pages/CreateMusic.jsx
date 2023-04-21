import { useState } from "react";

const CreateMusic = () => {
 const options = []
  const [singer,setSinger] = useState("");
  const [title,setTitle] = useState("");
  const [duration,setDuration] = useState("");
  const [selectedOption, setSelectedOption] = useState(options[0].value);
  const [image,setImage] = useState();
  const [audio,setAudio] = useState();
  return (
    <div className="col-12 grid-margin stretch-card">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Thêm mới nhạc</h4>
          <p className="card-description"> Thêm mới nhạc </p>
          <form className="forms-sample">
            <div className="form-group">
              <label htmlFor="exampleInputName1">Singer</label>
              <input
                onChange={(e)=>{
                  setSinger(e.target.value) 
                }}
                type="text"
                className="form-control"
                id="exampleInputName1"
                placeholder="Singer"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail3">Title</label>
              <input
                onChange={(e)=>{
                  setTitle(e.target.value) 
                }}
                type="text"
                className="form-control"
                id="exampleInputEmail3"
                placeholder="Title"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleSelectGender">Category</label>
              <select
                value={selectedOption}
                onChange={e => setSelectedOption(e.target.value)}>
                {
                  options.map(o => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))
                }
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword4">Duration</label>
              <input
                onChange={(e)=>{
                  setDuration(e.target.value) 
                }}
                type="text"
                className="form-control"
                id="exampleInputPassword4"
                placeholder="Duration"
              />
            </div>
            <div className="form-group">
              <label>Image Upload</label>
              <input type="file" name="img[]" className="file-upload-default" />
              <div className="input-group col-xs-12">
                <input
                  onChange={(e)=>{setImage(e.target.files)}}
                  type="file"
                  className="form-control file-upload-info"
                  disabled=""
                  placeholder="Upload Image"
                />
                <span className="input-group-append">
                  <button
                    className="file-upload-browse btn btn-primary"
                    type="button"
                  >
                    Upload
                  </button>
                </span>
              </div>
            </div>
            <div className="form-group">
              <label>Audio Upload</label>
              <input type="file" name="img[]" className="file-upload-default" />
              <div className="input-group col-xs-12">
                <input
                  onChange={(e)=>{setAudio(e.target.files)}}
                  type="file"
                  className="form-control file-upload-info"
                  disabled=""
                  placeholder="Upload Image"
                />
                <span className="input-group-append">
                  <button
                    className="file-upload-browse btn btn-primary"
                    type="button"
                  >
                    Upload
                  </button>
                </span>
              </div>
            </div>
            <button type="submit" className="btn btn-primary mr-2">
              Submit
            </button>
            <button className="btn btn-dark">Cancel</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateMusic;
