import { useState } from "react";
import { insert } from "../api/music";
import LoadingSpinner from "../components/loadingSpinner";
import Toast from "../components/Toast";
import useFetch from "../hooks/useFetch";

const CreateMusic = () => {
  const [singer, setSinger] = useState("");
  const [title, setTitle] = useState("");
  const [vip, setVip] = useState(false);
  const [duration, setDuration] = useState("");
  const [img, setImg] = useState(null);
  const [audio, setAudio] = useState(null);
  const [musicState, call] = useFetch();

  const handelCallApi = async () => {
    return await insert({
      singer: singer,
      title: title,
      duration: duration,
      img: img,
      audio: audio,
      isVip: vip,
    });
  };
  const handelOnSubmit = async (e) => {
    e.preventDefault();
    return await call(handelCallApi);
  };

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImg(event.target.files[0]);
    }
  };
  const handelTime = (e) => {
    const value = e.target.value;
    if (!isNaN(value)) {
      setDuration(Math.round(parseFloat(value)));
    } else setDuration("");
  };

  const onAudioChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const audioUrl = URL.createObjectURL(event.target.files[0]);
      const audioElement = new Audio(audioUrl);
      audioElement.addEventListener("loadedmetadata", () => {
        setDuration(Math.round(parseFloat(audioElement.duration))); //lấy ra thời lượng và làm tròn
        setAudio(event.target.files[0]);
      });
    }
  };

  return (
    <>
      {musicState.loading && <LoadingSpinner />}
      {musicState.payload?.massage && (
        <Toast
          massage={musicState.payload.massage}
          type={musicState.payload.status}
        />
      )}
      <div className="col-12 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Thêm mới nhạc</h4>
            <p className="card-description"> Thêm mới nhạc </p>
            <form className="forms-sample" onSubmit={handelOnSubmit}>
              <div className="form-group">
                <label htmlFor="exampleInputName1">Singer</label>
                <input
                  onChange={(e) => {
                    setSinger(e.target.value);
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
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  type="text"
                  className="form-control"
                  id="exampleInputEmail3"
                  placeholder="Title"
                />
              </div>

              <div className="form-group">
                <label>Image Upload</label>
                <div className="input-group col-xs-12">
                  <input
                    id="img-input"
                    type="file"
                    className="form-control"
                    onChange={onImageChange}
                  />
                  <span className="input-group-append">
                    <button
                      className="file-upload-browse btn btn-primary"
                      type="button"
                      onClick={() => {
                        document.getElementById("img-input").click();
                      }}
                    >
                      Upload
                    </button>
                  </span>
                </div>
              </div>
              <div className="form-group">
                <label>Audio Upload</label>
                <div className="input-group col-xs-12">
                  <input
                    id="audio-input"
                    type="file"
                    className="form-control"
                    onChange={onAudioChange}
                  />
                  <span className="input-group-append">
                    <button
                      className="file-upload-browse btn btn-primary"
                      type="button"
                      onClick={() => {
                        document.getElementById("audio-input").click();
                      }}
                    >
                      Upload
                    </button>
                  </span>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword4">
                  Duration (seconds)
                </label>
                <input
                  type="number"
                  value={duration || ""}
                  onChange={(e) => {
                    onAudioChange(e);
                    handelTime(e);
                  }}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <div className="form-check">
                  <label className="form-check-label">
                    <input
                      type="radio"
                      className="form-check-input"
                      name="vipCheck"
                      id="vipCheck1"
                      checked={!vip}
                      onChange={() => setVip(false)}
                    />{" "}
                    Normal <i className="input-helper"></i>
                  </label>
                </div>
                <div className="form-check">
                  <label className="form-check-label">
                    <input
                      type="radio"
                      className="form-check-input"
                      name="vipCheck"
                      id="vipCheck2"
                      checked={vip}
                      onChange={() => setVip(true)}
                    />{" "}
                    Vip <i className="input-helper"></i>
                  </label>
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
    </>
  );
};

export default CreateMusic;
