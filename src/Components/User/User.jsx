import { Link } from "react-router-dom";


const User = ({user}) => {
    const userStyle = {
        border : '2px solid yellow',
        padding:'10px',
        borderRadius :'20px',
        margin : '20px',
     
    }

    const {id, name,email, phone} = user;
    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <p>{id}</p>
            <p>{email}</p>
            <p>{phone}</p>
            <Link to={`/user/${id}`}>Show details</Link>
        </div>
    );
};

export default User;