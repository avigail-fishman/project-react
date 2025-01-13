import { useContext } from "react";
import MyConext from "../context/context";

function UsersManager() {

    const {users} = useContext(MyConext);
    return<>
    <h1>רשימת המשתמשים</h1>
    <ul>
        {users && users.map(u => <li>{u.id } | {u.username} | { u.email}</li>)}
    </ul>
    

    
    </>

}
export default UsersManager;