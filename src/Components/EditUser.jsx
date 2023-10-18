import React, { useContext, useEffect, useRef, useState } from "react";
import { usersContext } from "../App";
import { useParams } from "react-router-dom";

const EditUser = () => {
	const params = useParams();
	const [currentUser, setCurrentUser] = useState();
	const fullName = useRef();
	const city = useRef();
	const context = useContext(usersContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		context.edituser({
			payload: {
				fullName: fullName.current.value,
				city: city.current.value,
				id:parseInt(params.id)
			},
		});

		
	};

	 useEffect(() => {
        const {id} = params
        const user = context.users.filter(user => user.id === parseInt(id))
        if(user.length > 0){
            setCurrentUser(...user)
        }else {
            console.error('User not found')
        }
		
    }, []);
	return (
		<>
			<form onSubmit={handleSubmit}>
				<div className='mt-3'>
					<label for='' className='form-label'>
						ID
					</label>
					<input
						type='text'
						readOnly
						defaultValue={currentUser?.id}
						className='form-control'
					/>
					<label for='' className='form-label'>
						Full Name
					</label>
					<input
						ref={fullName}
						defaultValue={currentUser?.fullName}
						type='text'
						className='form-control'
					/>
					<div className='mb-3'>
						<label for='' className='form-label'>
							City
						</label>
						<select
							ref={city}
							key={currentUser?.city}
							defaultValue={currentUser?.city}
							className='form-select form-select-lg'>
							<option>Select one</option>
							<option value='Tan-Tan'>Tan Tan </option>
							<option value='Laayoune'>Laayoune</option>
							<option value='Agadir'>Agadir</option>
						</select>
					</div>
					<button type='submit' className='btn btn-primary w-100'>
						Edit User
					</button>
				</div>
			</form>
		</>
	);
};

export default EditUser;
