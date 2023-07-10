import { useMutation } from "@tanstack/react-query";
import React from "react";
import { createPost } from "../api/posts";
import PostFrom from "./PostFrom";
import {v4 as uuidv4} from 'uuid'

const AddPost = () => {
  const createPostMutation = useMutation({
    mutationFn: createPost,
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
      <PostFrom onSubmitProp={handleAddPost}/>
    </div>
  );
};

export default AddPost;
