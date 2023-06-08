import React, { useEffect, useState} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faPencil, faLocationDot, faPhoneFlip, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    return (
        <div className="card mb-3" style = {{width: "600px;"}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={rigoImage} className="rounded-circle img-fluid contactImage" alt="..."/>
                </div>
                <div className="col-md-6 text start">
                    <div className="card-body">
                        <h5 className="card-title">Card Title</h5>
                        <p className="card-text"><FontAwesomeIcon icon={faLocationDot} className="me-4"/>Location</p>
                        <p className="card-text"><FontAwesomeIcon icon={faPhoneFlip} className="me-4"/>Phone</p>
                        <p className="card-text"><FontAwesomeIcon icon={faEnvelope} className="me-4"/>Email</p>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="card-body d-flex justify-content-end">
                        <button className="btn btn-light">
                            <FontAwesomeIcon icon={faPencil} />
                        </button>
                        <button className="btn btn-light">
                            <FontAwesomeIcon icon={faTrashCan} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact