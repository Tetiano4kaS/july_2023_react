import {useState} from "react";
import PostDetails from "../postDetail/PostDetails";

const Post = (props) => {
    const {post} = props;
    const [isShow, setIsShow]=useState(false)
    return (
        <div className={'postDiv'}>
            <h4>{post.id}</h4>
            <h3>{post.title}</h3>
     <button onClick={()=>setIsShow(prev=>!prev)}>{isShow? 'Hide':'Show'}</button>
            {isShow && <PostDetails post={post}/>}
        </div>
    );
};

export default Post;