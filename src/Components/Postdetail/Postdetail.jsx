import { useLoaderData, useNavigate } from "react-router-dom";

const Postdetail = () => {
    const post = useLoaderData();
    const navigate = useNavigate();
    const {id, title,body} = post;

    const handleGoBack = () =>{
        navigate(-1);
    }

    return (
        <div>
            <h3>post details about : {id}</h3>
            <h4>Title: {title}</h4>
            <h4><small>{body}</small></h4>
            <button onClick={handleGoBack}>Go back</button>
        </div>
    );
};

export default Postdetail;