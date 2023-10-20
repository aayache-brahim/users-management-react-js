import React, { useContext } from "react";
import{usersContext} from "../App"
import { Link } from "react-router-dom";

const UsersList = () => {

	// using the users context
	const context = useContext(usersContext)

	return (

		//displaying the users list 
		<>
			<div className='table-responsive'>
				<table className='table table-default my-3 '>
					<thead className=''>
						<tr>
							<th># ID</th>
							<th>Full Name</th>
							<th>Age</th>
							<th>Gender</th>
							<th>City</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody className=''>
						{context.users && context.users.map(user=>(
                        <tr className='table-default' key={user.id}>
							<td>{user.id}</td>
							<td>{user.fullName}</td>
							<td>{user.age}</td>
							<td>{user.gender}</td>
							<td>{user.city}</td>
							<td className="">
								<Link to={`user/${user.id}/edit`} className="btn btn-outline-primary me-3">Edit</Link>
								<Link to={`user/${user.id}/delete`} className="btn btn-outline-danger">Delete</Link>
							</td>
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
