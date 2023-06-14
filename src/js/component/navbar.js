import rigoImage from "../../img/rigo-baby.jpg";
import React ,{useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Modal } from "./modal";

export const Navbar = () => {
	const {store,action}=useContext(Context)
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Contact List App Using React & Context</span>
			</Link>
			<div className="ml-auto">
				<button type="button" data-bs-toggle="modal" className="btn btn-success" data-bs-target={"#editModal-"+-1}>ADD NEW CONTACT</button>	
			</div>
			<Modal index={-1}></Modal>
		</nav>
	);
};