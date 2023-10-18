import React, { createContext, useState } from "react";
import UsersLayout from "./Components/UsersLayout";

export const usersContext = createContext({
	users: [],
	lastId: 0,
	addUser: () => null,
	edituser:()=>null,
	deleteUser:()=>null
});
const App = () => {
	const [users, setUsers] = useState([]);
	const [lastId, setLastId] = useState(0);

	const addUser = ({ payload }) => {
		console.table(payload);
		setUsers((prev) => [...prev, payload]);
		setLastId((prev) => prev + 1);
		window.history.back()
	};

	const editUser = ({payload}) => {
		console.table(payload)
		const {id,...rest} = payload
		console.log(id , rest)
		setUsers(prevState=>prevState.map(user=>{ if(user.id === id) { return {id :user.id ,...rest} } return user}))
		window.history.back()
	};

	const deleteUser = ({payload})=>{
		const {id} = payload
		setUsers(prev=>prev.filter(user=>user.id !== id   ))
	}

	return (
		<>
			<div className='container'>
				<usersContext.Provider
					value={{
						users: users,
						lastId: lastId,
						addUser: addUser,
						edituser:editUser,
						deleteUser:deleteUser
					}}>
					<UsersLayout />
				</usersContext.Provider>
			</div>
		</>
	);
};

export default App;
