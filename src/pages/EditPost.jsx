import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { fetchPost,updatePost } from "../api/posts";
import PostFrom from "../components/PostFrom";

const EditPost = () => {
  const navigate = useNavigate();
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

  const queryClient = useQueryClient()

  const updatePostMutation = useMutation({
    mutationFn:updatePost,
    onSuccess:()=>{
      queryClient.invalidateQueries({queryKey:["posts"]})
      navigate('/')
    }
  })

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>${error.message}</h1>;
  }

  const handleSubmit = (updatedPost)=>{
    updatePostMutation.mutate({id, ...updatedPost})
  }

  return (
    <div>
      <PostFrom onSubmitProp={handleSubmit} initialValue={post}/>
    </div>
  );
};

export default EditPost;
