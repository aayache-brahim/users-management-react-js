import React, { useContext, useEffect } from 'react'
import { usersContext } from '../App'
import { useParams } from 'react-router-dom'

const DeleteUser = () => {
    const context = useContext(usersContext)
    const params = useParams()

    const handleSubmit=(e)=>{
        e.preventDefault()
        context.deleteUser({payload:{
          id:parseInt(params.id)
      }})

    }

    useEffect(()=>{
      console.log(context.users)
      console.log(context.users[params.id])%
    },[])

  return (
    <div>
        <div class="alert alert-danger" role="alert">
          <h4 class="alert-heading">Do You Want To delete the user {context.users.lenght > 0 && context.users[params.id]?.fullName}</h4>
          <hr/>
          <p class="mb-0">Athis action not </p>
        </div>
    </div>
  )
}

export default DeleteUser