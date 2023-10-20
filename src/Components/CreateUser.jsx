import React, { useContext, useRef } from "react";
import { usersContext } from "../App";

const CreateUser = () => {
	const fullName = useRef();
	const city = useRef();
	const age = useRef()
	const gender = useRef()
	const context = useContext(usersContext);

	const handleSubmit = (e) => {
		e.preventDefault()
		context.addUser({
			payload: {
				fullName: fullName.current.value,
				city: city.current.value,
				age: age.current.value,
				gender: gender.current.value,
				id: context.lastId + 1,
			},
		});
		// console.log({payload})

		fullName.current.value = "";
		city.current.value = " ";
		age.current.value = " ";
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<div class='mt-3'>
					<label for='' class='form-label'>
						ID
					</label>
					<input type='text' readOnly value={context.lastId} class='form-control' />
					<label for='' class='form-label'>
						Full Name
					</label>
					<input ref={fullName} type='text' class='form-control' />
					<label className="form-label">Age</label>
					<input className="form-control " ref={age}/>
					<div class='mb-3'>
						<label for='' class='form-label'>
						Gender
						</label>
						<select ref={gender} class='form-select form-select-lg'>
							<option>Select Gender</option>
							<option value='male'>Male</option>
							<option value='female'>Memale</option>
						</select>
					</div>
					<div class='mb-3'>
						<label for='' class='form-label'>
							City
						</label>
						<select ref={city} class='form-select form-select-lg'>
							<option>Select one</option>
							<option value='Tan Tan'>Tan Tan</option>
							<option value='Laayoune'>Laayoune</option>
							<option value='Agadir'>Agadir</option>
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

export default CreateUser;
