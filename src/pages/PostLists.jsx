import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { fetchPosts } from "../api/posts";
import AddPost from "../components/AddPost";

const PostLists = () => {
  const navigate = useNavigate()
  const {isLoading, isError, data:posts, error} = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  if(isLoading){
    return <h1>Loading...</h1>
  }

  if(isError){
    return <h1>${error.message}</h1>
  }

  return (
    <div>
      <AddPost />
      {posts.map((post)=>(
        <div key={post.id} style={{background:"#f8f8f8"}}>
          <h4 onClick={()=>navigate(`/post/${post.id}`)}>{post.title}</h4>
          <p>{post.body}</p>
          <button onClick={()=>navigate(`/post/${post.id}/edit`)}>Edit</button>
          <button>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default PostLists;
