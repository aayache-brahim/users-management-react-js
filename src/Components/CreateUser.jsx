import React, { useContext, useRef } from "react";
import { usersContext } from "../App";

const CreateUser = () => {

    
    const fullName = useRef() 
    const city = useRef() 
    const context = useContext(usersContext)

  
         const handleSubmit=(e)=>{
            e.preventDefault()
            context.addUser({
                    payload:{
                        fullName : fullName.current.value,
                        city     :city.current.value,
                        id :context.lastId++}
                })

                fullName.current.value = ""
                city.current.value =" "
        
    } 


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
					<div class='mb-3'>
						<label for='' class='form-label'>
							City
						</label>
						<select ref={city} class='form-select form-select-lg'>
							<option>Select one</option>
							<option value='Ta'>Tan Tan </option>
							<option value='La'>Laayoune</option>
							<option value='Ag'>Agadir</option>
						</select>
					</div>
					<button type="submit" className='btn btn-primary w-100'>Add User</button>
				</div>
			</form>
		</>
	);
};

export default CreateUser;
