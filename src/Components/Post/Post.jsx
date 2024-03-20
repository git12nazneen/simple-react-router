import { Link, useNavigate } from "react-router-dom";


const Post = ({post}) => {
    const navigate = useNavigate();
    const postStyle = {
        border : '2px solid yellow',
        padding:'10px',
        borderRadius :'20px',
        margin : '20px',
     
    }
    const {id, title} = post;
    const handleshowDetail = ()=>{
        navigate(`/post/${id}`)
    }


    
    return (
        <div style={postStyle}>
        <h4>Post of id:{id}</h4>
        <h4>Title of the post{title}</h4>
        <Link to={`/post/${id}`}>Post detail</Link>
        <Link to={`/post/${id}`}> <button>Show detail</button></Link>
       <button onClick={handleshowDetail}>Click to see detail</button>
        </div>

    );
};

export default Post;