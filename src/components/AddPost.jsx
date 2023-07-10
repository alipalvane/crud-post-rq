import { useMutation, useQueryClient,  } from "@tanstack/react-query";
import React from "react";
import { createPost } from "../api/posts";
import PostFrom from "./PostFrom";
import {v4 as uuidv4} from 'uuid'

const AddPost = () => {
  const queryClient = useQueryClient()
  const createPostMutation = useMutation({
    mutationFn: createPost,
    onSuccess:()=>{
      queryClient.invalidateQueries({queryKey:["posts"]})
    }
  });

  const handleAddPost = (post)=>{
    createPostMutation.mutate({
      id:uuidv4(),
      ...post
    })
  }
  return (
    <div>
      <h2>Add New Post</h2>
      <PostFrom onSubmitProp={handleAddPost} initialValue={{}}/>
    </div>
  );
};

export default AddPost;
