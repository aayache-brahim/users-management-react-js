import { BrowserRouter ,Link, Outlet, Route ,Routes } from "react-router-dom"
import UsersList from "./UsersList"
import CreateUser from "./CreateUser"
import EditUser from "./EditUser"

const UsersLayout = () => {
  return (
    <>
    <BrowserRouter>
        <nav className="navbar navbar-expand-sm navbar-light bg-light my-4">
              <div className="container">
                <a className="navbar-brand" href="#">Users Management </a>
                <div className="collapse navbar-collapse  " id="collapsibleNavId">
                    <ul className="navbar-nav me-auto mt-2 mt-lg-0 flex-row  ">
                        <li className="nav-item">
                            <Link className="nav-link active" to={'/'}>Users</Link>                     
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link active" to={'/user/create'} >create User </Link>                   
                        </li>
                        <li className="nav-item dropdown">
                        {/* <Link className="nav-link active" to={'/users'} />                       */}
                            
                        </li>
                    </ul>
                   
                </div>
          </div>
        </nav>
        

    <Routes>
        <Route path="/" element={<UsersList/>} />
        <Route path="user/create" element={<CreateUser/>} />
        <Route path="user/:id/edit" element={<EditUser/>} />
    </Routes>
    </BrowserRouter>

    <Outlet/>
    </>
  )
}

export default UsersLayout