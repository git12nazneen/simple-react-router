import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    const {name, website} = user;
    return (
        <div>
            <h5>user details:{name}</h5>
            <h6>Website : {website}</h6>
        </div>
    );
};

export default UserDetails;