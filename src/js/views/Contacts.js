import React, { useContext } from "react";
import "../../styles/index.css";
import { Context } from "../store/appContext";
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import UserImage from "./RandomImg";

export const Contacts = () => {

	const { store, actions } = useContext(Context);

	const { deleteContact } = actions;
	const navigate = useNavigate();



	return (

		<div className="text-center mt-2">


			<div className="m-5 d-flex p-3">
				<h1>Contact List:</h1>
				<Button onClick={() => { navigate("/ContactForm") }} style={{ marginLeft: '70%' }} variant="warning">
					Add Contact
				</Button>
			</div>
			< div className="contactBox">
				<ul>
					{
						store.contacts.map((element) => {
							return (
								<ListGroup.Item
									as="li"
									key={element.id}
									className="d-flex oneContact"
									style={{ height: '150px', marginBottom: '50px', borderBottom: '1px solid' }}
								>
									<UserImage />
									<div className="content">

										<div className="fw-bold">{element.full_name}  </div>
										<div className="phone">{element.phone} </div>
										<div className="email">{element.email}  </div>
										<div className="address">{element.address}  </div>
									</div>
									<div className="buttons">
										<Button variant="dark" onClick={() => { navigate(`/EditContactForm/${element.id}`) }} className="m-2">
											<i class="fa-solid fa-pen"></i>
										</Button>
										<Button onClick={() => {
											deleteContact(element.id);
										}} variant="danger" className="m-2">
											<i class="fa-solid fa-trash"></i>
										</Button>
									</div>
								</ListGroup.Item>
							)
						})}
				</ul>

	
			</div>
		</div>

	)
};


