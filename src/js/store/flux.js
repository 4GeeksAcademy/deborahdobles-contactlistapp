import rigoImage from "../../img/rigo-baby.jpg";
import { ContactCard } from "../component/ContactCard";
const apiUrl=process.env.API_URL
const agendaSlug=process.env.AGENDA_SLUG


const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts:[]
			
		},
		actions: {
			addContact: async (contact) => {
				let response = await fetch(apiUrl + "/", {
				  body: JSON.stringify({ ...contact, agenda_slug: agendaSlug }),
				  method: "POST",
				  headers: {
					"Content-type": "application/json"
				  }
				});
			  
				if (!response.ok) {
				  console.log(response.status + ": " + response.statusText);
				  return;
				}
			  
				let data = await response.json();
				let store = getStore();
				let newContacts = [...store.contacts, { ...contact, id: data.id }];
				setStore({ contacts: newContacts });
			  },
			  
			  delContact: async (id) => {
				let response = await fetch(apiUrl + "/" + id, {
				  method: "DELETE"
				});
			  
				if (response.ok) {
				  let newContacts = [...getStore().contacts];
				  let index = newContacts.findIndex((contact) => contact.id == id);
				  newContacts.splice(index, 1);
				  setStore({ contacts: newContacts });
				} else {
				  console.error(response.status + ": " + response.statusText);
				}
			  },
			  
			
			
			  UpContact: async (updatedContact, id) => {
				const response = await fetch(apiUrl + "/" + id, {
				  body: JSON.stringify({ ...updatedContact, agenda_slug: agendaSlug }),
				  method: "PUT",
				  headers: {
					"Content-type": "application/json",
				  },
				});
			  
				if (!response.ok) {
				  console.log(response.status + ":" + response.statusText);
				  return;
				}
			  
				const newContacts = [...getStore().contacts];
				const index = newContacts.findIndex((contact) => contact.id == id);
				newContacts[index] = updatedContact;
				setStore({ contacts: newContacts });
			  },
			  
			
			

			getAgenda:()=>{
				fetch(apiUrl + "/agenda/"+agendaSlug)
				.then(response=>{
					if(response.ok){
						return response.json()
					}else{
						console.log(response.status + ": " + response.statusText)
					}
				})
				.then(data=>{
					console.log(data)
					setStore({contacts:data})
				})
				.catch(error=>{
					console.log(error)
				})
				console.log("Receiving petition")
			},
			
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;