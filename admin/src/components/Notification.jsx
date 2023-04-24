import '../assets/css/notification.css'


const Notification = ()=>{

    return(

        <div className="new-message-box">
            <div className="new-message-box-alert">
                        <div className="info-tab tip-icon-alert" title="error"><i></i>
                        </div>
                        <div className="tip-box-alert">
                            <p>
                                <strong>Tip:</strong> If you want to enable the fading transition effect while closing the alert boxes, apply the classes <code>.fade</code> and <code>.in</code> to them along with the contextual class.</p>
                            <p>Ha ocurrido un problema por favor 
                                <a className="btn btn-sm" href="555"> intente nuevamente</a>
                            </p>
                    </div>
            </div>
        </div>
    
    )
    
}
export default Notification