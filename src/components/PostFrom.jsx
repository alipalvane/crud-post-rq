import { useState } from "react";

const PostFrom = ({onSubmitProp}) => {
  const [post, setPost] = useState({
    title: "",
    body: "",
  });
  const handleChangeInput = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };
  const renderField = (label) => (
    <div>
      <label>{label}</label>
      <input
        type="text"
        name={label.toLowerCase()}
        value={post[label.toLowerCase()]}
        onChange={handleChangeInput}
      />
    </div>
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitProp(post)
    setPost({
      title: "",
      body: "",
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      {renderField("Title")}
      {renderField("Body")}
      <button type="submit">Submit</button>
    </form>
  );
};

export default PostFrom;
