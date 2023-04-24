import "../assets/css/toast.css";

const Toast = ({ type,massage }) => {
  return (
    <div className="wrapper">
      <div className={`toast ${type || 'error'}`}>
        <div className="outer-container">
          <i className="fas fa-exclamation-circle"></i>
        </div>
        <div className="inner-container">
          <p>{massage}</p>
         
        </div>
        <button>&times;</button>
      </div>
    </div>
  );
};

export default Toast;
