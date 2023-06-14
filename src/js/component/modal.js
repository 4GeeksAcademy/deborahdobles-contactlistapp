import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const Modal = props => {
  const [contactName, setContactName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const { store, actions } = useContext(Context);

  useEffect(() => {
    if (props.index === -1) {
		setAddress("");
		setPhone("");
		setEmail("");
		setContactName("");
    } else if (props.index >= 0) {

      let updateContact = store.contacts.find(contact=>contact.id==props.index);
      setAddress(updateContact.address);
      setPhone(updateContact.phone);
      setEmail(updateContact.email);
      setContactName(updateContact.full_name);
      
    } else {
    }
  }, []);

  function guardar() {
    let newContact = {
      full_name: contactName,
      email: email,
      phone: phone,
      address: address,
      
    };
    if (props.index === -1) {
      actions.addContact(newContact);
    } else if (props.index >= 0) {
      actions.UpContact(newContact, props.index);
    } else {
    }
  }

  return (
    <div
      className="modal fade"
      tabIndex="-1"
      role="dialog"
      id={"editModal-" + props.index}
      aria-labelledby={"modalLabel-" + props.index}
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Contact Info</h5>
            {props.onClose ? (
              <button
                onClick={() => props.onClose()}
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            ) : (
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            )}
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <label htmlFor="nameInput" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="nameInput"
                placeholder="Put your full name here"
                value={contactName}
                onChange={e => setContactName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="addressInput" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                id="addressInput"
                placeholder="Place your address here"
                value={address}
                onChange={e => setAddress(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phoneInput" className="form-label">
                Phone Number
              </label>
              <input
                type="text"
                className="form-control"
                id="phoneInput"
                placeholder="Put your phone number here"
                value={phone}
                onChange={e => setPhone(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email">
				Email
              	</label>
			  <input
                type="text"
                className="form-control"
                id="emailInput"
                placeholder="Put your email here"
				value={email}
				onChange={e=>setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="modal-footer">
            <button data-bs-dismiss="modal"  onClick={guardar} type="button" className="btn btn-primary">
          Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Define the data-types for
 * your component's properties
 **/
Modal.propTypes = {
  history: PropTypes.object,
  onClose: PropTypes.func,
  show: PropTypes.bool
};

/**
 * Define the default values for
 * your component's properties
 **/
Modal.defaultProps = {
  show: false,
  onClose: null
};