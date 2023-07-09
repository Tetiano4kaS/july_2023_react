const PostDetails = (props) => {
    const {post}=props;
    return (
        <div>
            <hr/>
            <div>{post.id}</div>
            <div>{post.title}</div>
            <div>{post.body}</div>
            <hr/>
        </div>
    );
};

export default PostDetails;