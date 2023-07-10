import { Route, Routes } from "react-router-dom";
import PostLists from "./pages/PostLists";
import Post from "./pages/Post";
import EditPost from './pages/EditPost'

const App = () => {
  return (
    <div>
      <h1>Blog Posts</h1>
      <Routes>
        <Route path="/" element={<PostLists />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/post/:id/edit" element={<EditPost />} />
      </Routes>
    </div>
  );
};

export default App;
