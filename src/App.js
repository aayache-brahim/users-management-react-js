import React, { useState } from "react";
import UsersList from "./Components/UsersList";

const App = () => {
	const data = [
		{
			id: 1,
			fullName: "brahim aayache",
			city: "tan-tan",
		},
		{
			id: 2,
			fullName: "hassan aayache",
			city: "tan-tan",
		},
		{
			id: 3,
			fullName: "ayoub aarnouz",
			city: "agadir",
		},
	];

	const [users, setUsers] = useState(data);

	return (
		<>
			<div className='container'>
				<UsersList users={users} />
			</div>
		</>
	);
};

export default App;
