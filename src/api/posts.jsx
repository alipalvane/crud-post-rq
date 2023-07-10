export async function fetchPosts() {
  const response = await fetch("http://localhost:3000/posts");
  return response.json();
}

// 1- GET METHOD (Read)
export async function fetchPost(id) {
  const response = await fetch(`http://localhost:3000/posts/${id}`);
  return response.json();
}

// 2- POST METHOD (Create)
export async function createPost(newPost) {
  const response = await fetch(`http://localhost:3000/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPost),
  });
  return response.json();
}

// 3- UPDATE POST (Upadte)
export async function updatePost(updatedPost) {
  const response = await fetch(
    `http://localhost:3000/posts/${updatedPost.id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedPost),
    }
  );
  return response.json();
}

// 4- DELETE POST (Delete)
export async function deletePost(id) {
  const response = await fetch(`http://localhost:3000/posts/${id}`, {
    method: "DELETE",
  });
  return response.json();
}
