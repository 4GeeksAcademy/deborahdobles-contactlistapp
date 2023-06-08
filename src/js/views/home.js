import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import {Navbar} from "../component/navbar";
import {Contact} from "../component/contacts.jsx";

export const Home = () => (
	<div className="text-center mt-5">
		<Navbar/>
		<Contact/>
	</div>
);