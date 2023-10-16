import { BrowserRouter ,Link, Outlet, Route ,Routes } from "react-router-dom"
import UsersList from "./UsersList"
import CreateUser from "./CreateUser"

const UsersLayout = () => {
  return (
    <>
    <BrowserRouter>
        <nav class="navbar navbar-expand-sm navbar-light bg-light">
              <div class="container">
                <a class="navbar-brand" href="#">Users Management </a>
                <div class="collapse navbar-collapse  " id="collapsibleNavId">
                    <ul class="navbar-nav me-auto mt-2 mt-lg-0 flex-row  ">
                        <li class="nav-item">
                            <Link className="nav-link active" to={'/'}>Users</Link>                     
                        </li>
                        <li class="nav-item">
                        <Link className="nav-link active" to={'/user/create'} >create User </Link>                   
                        </li>
                        <li class="nav-item dropdown">
                        {/* <Link className="nav-link active" to={'/users'} />                       */}
                            
                        </li>
                    </ul>
                   
                </div>
          </div>
        </nav>
        

    <Routes>
        <Route path="/" element={<UsersList/>} />
        <Route path="user/create" element={<CreateUser/>} />
    </Routes>
    </BrowserRouter>

    <Outlet/>
    </>
  )
}

export default UsersLayout