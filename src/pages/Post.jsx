import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { fetchPost } from "../api/posts";

const Post = () => {
  const navigate = useNavigate()
  const { id } = useParams();
  const {
    isLoading,
    isError,
    data: post,
    error,
  } = useQuery({
    queryKey: ["posts", id],
    queryFn: () => fetchPost(id),
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>${error.message}</h1>;
  }
  return <div>
    <h2>{post.title}</h2>
    <p>{post.body}</p>
    <button onClick={()=>navigate("/")}>back to home</button>
  </div>;
};

export default Post;
