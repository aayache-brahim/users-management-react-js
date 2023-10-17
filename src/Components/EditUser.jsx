import React, { useContext, useEffect, useRef, useState } from "react";
import { usersContext } from "../App";
import { useParams } from "react-router-dom";

const EditUser = () => {
	const params = useParams();
	const [currentUser, setCurrentUser] = useState();
	const fullName = useRef(null);
	const city = useRef(null);
	const context = useContext(usersContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		context.edituser({
			payload: {
				fullName: fullName.current.value,
				city: city.current.value,
				id: context.lastId++,
			},
		});
	};

	useEffect(() => {
		let { id } = params;
		console.log(id)
		const user = context.users.filter((user) => user.id === parseInt(id));
		setCurrentUser(user)
	}, []);
	return (
		<>
			<form onSubmit={handleSubmit}>
				<div className='mt-3'>
					<label for='' className='form-label'>
						ID
					</label>
					<input type='text' readOnly value={context.lastId} className='form-control' />
					<label for='' className='form-label'>
						Full Name
					</label>
					<input
						ref={fullName}
						defaultValue={fullName}
						type='text'
						className='form-control'
					/>
					<div className='mb-3'>
						<label for='' className='form-label'>
							City
						</label>
						<select
							ref={city}
							defaultValue={city}
							className='form-select form-select-lg'>
							<option>Select one</option>
							<option value='Ta'>Tan Tan </option>
							<option value='La'>Laayoune</option>
							<option value='Ag'>Agadir</option>
						</select>
					</div>
					<button type='submit' className='btn btn-primary w-100'>
						Add User
					</button>
				</div>
			</form>
		</>
	);
};

export default EditUser;
