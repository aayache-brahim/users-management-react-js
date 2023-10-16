import React, { useContext } from "react";
import{usersContext} from "../App"

const UsersList = () => {

	const context = useContext(usersContext)

	return (


		<>
			<div className='table-responsive'>
				<table className='table table-default my-3 '>
					<thead className=''>
						<tr>
							<th># ID</th>
							<th>Full Name</th>
							<th>City </th>
						</tr>
					</thead>
					<tbody className=''>
						{context.users && context.users.map(user=>(
                        <tr className='table-default' key={user.id}>
							<td>{user.id}</td>
							<td>{user.fullName}</td>
							<td>{user.city}</td>
						</tr>
                        ))}
					</tbody>
					<tfoot></tfoot>
				</table>
			</div>
		</>
	);
};

export default UsersList;
