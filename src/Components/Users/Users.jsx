import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './Users.css'

const Users = () => {

    const users = useLoaderData();
    console.log(users)
    return (
        <div>
            <p>Our users{users.length}</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus esse impedit magnam doloremque fugiat quisquam hic minima quas ex obcaecati.</p>
            <div className="users">
                {
                    users.map(user => <User
                    key={user.id}
                    user={user}
                    ></User>)
                }
            </div>
        </div>
    );
};

export default Users;