function Post({ post }) {
  return (
    <div>
      <img src={post.photoUrl} />
      <h4>{post.input}</h4>
    </div>
  );
}

export default Post;
