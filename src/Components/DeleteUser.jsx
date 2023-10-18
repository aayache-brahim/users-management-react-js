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
      window.history.back()

    }

    useEffect(()=>{
      console.log(context.users)
      console.log(context.users[params.id])
      console.log(context.users[parseInt(params.id+1)]?.fullName)
    },[])

  return (
    <div>
        <div className="alert alert-danger" role="alert">
          <h4 className="alert-heading">Do You Want To delete the user <span className='fw-bold'>{context.users[parseInt(params.id-1)]?.fullName}</span></h4>
          <hr/>
          <p className="mb-0">You can't go back </p>
          <button className="btn btn-danger my-2 mt-2" onClick={handleSubmit}>DELETE</button>
        </div>
    </div>
  )
}

export default DeleteUser