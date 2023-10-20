import { BrowserRouter ,Link, Outlet, Route ,Routes } from "react-router-dom"
import UsersList from "./UsersList"
import CreateUser from "./CreateUser"
import EditUser from "./EditUser"
import DeleteUser from "./DeleteUser"



const UsersLayout = () => {
  return (
    <>
    <BrowserRouter>
        <nav className="navbar navbar-expand-sm navbar-light bg-light my-4">
              <div className="container">
                <h1 className="navbar-brand" >Users Management </h1>
                <div className="collapse navbar-collapse  " id="collapsibleNavId">
                    <ul className="navbar-nav   ">
                        <li className="nav-item">
                            <Link className="btn btn-light active mx-1 " to={'/'}>Users</Link>                     
                        </li>
                        <li className="nav-item">
                        <Link className="btn btn-light active" to={'/user/create'} >create User </Link>                   
                        </li>
                        <li className="nav-item dropdown">
                        {/* <Link className="nav-link active" to={'/users'} />                       */}
                            
                        </li>
                    </ul>
                </div>
          </div>
        </nav>
        

    {/* the routes of tha application  */}
    <Routes>
        <Route path="/" element={<UsersList/>} />
        <Route path="user/create" element={<CreateUser/>} />
        <Route path="user/:id/edit" element={<EditUser/>} />
        <Route path="user/:id/delete" element={<DeleteUser/>} />
    </Routes>
    </BrowserRouter>

    <Outlet/>
    </>
  )
}

export default UsersLayout