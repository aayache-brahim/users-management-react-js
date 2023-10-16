import React, { createContext, useState } from "react";
import UsersLayout from "./Components/UsersLayout";

export const usersContext = createContext({
	users : [],
	lastId : 0,
	addUser:()=> null
}) 
const App = () => {
	

	const [users, setUsers] = useState([]);
	const [lastId, setLastId] = useState(0);

  const addUser=({payload})=>{
    console.table(payload);
    setUsers(prev=>[...prev,payload])
    setLastId(prev=>prev+1)
  }

 

	return (  
		<>
			<div className='container'>
			<usersContext.Provider value={
				{
					users:users,
					lastId:lastId,
					addUser:addUser
				}
			}>
			<UsersLayout/>
			</usersContext.Provider>
			</div>
		</>
	);
};

export default App;
