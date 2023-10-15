import React, { useState } from "react";
import UsersList from "./Components/UsersList";
import AddUser from "./Components/AddUser";

const App = () => {
	

	const [users, setUsers] = useState([]);
	const [lastId, setLastId] = useState(0);

  const addUser=({payload})=>{
    console.table(payload);
    setUsers(prev=>[...prev,payload])
  }

 

	return (  
		<>
			<div className='container'>
				<AddUser lastId={lastId+1} addUser={addUser} />
				<UsersList users={users} />
			</div>
		</>
	);
};

export default App;
