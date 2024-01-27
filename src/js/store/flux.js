const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [
				{
					"id": "1",
					"full_name": "Dave Bradley",
					"email": "dave@gmail.com",
					"agenda_slug": "KarenContacts",
					"address": "47568 NW 34ST, 33434 FL, USA",
					"phone": "7864445566"
				},
				
			]
		},
		actions: {
			getAllContacts: () => {
				fetch("https://playground.4geeks.com/apis/fake/contact/agenda/KarenContacts").then(data => data.json())
					.then(data => data);
			},
			createContact: (contact) => {fetch("https://playground.4geeks.com/apis/fake/contact/" ,{
            method : 'POST',
			headers: {
                'Content-type': 'application/json'
            },
			body: contact
			})
				// mando al servidor
			},
			addContact: () => { },
			updateContact: () => {
				// actualizar servidor....
				getStore();
			},
			fetchDeleteContact: (id) => { return console.log(`borrando del server el contact con id ${id}`) },
			deleteContact: (id) => {
				const prevStore = getStore();

				const actions = getActions();

				const newContacts = prevStore.contacts.filter(contact => contact.id !== id);


				const newStore = {
					...prevStore,
					contacts: newContacts
				}

				setStore(newStore);
				actions.fetchDeleteContact(id);
			}
		}
	};
};

export default getState;