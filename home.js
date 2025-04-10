import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const [search, setSearch] = useState("");

<input
  type="text"
  placeholder="Search blogs..."
  className="p-2 border rounded mb-4"
  onChange={(e) => setSearch(e.target.value)}
/>

{blogs
  .filter((blog) => blog.title.toLowerCase().includes(search.toLowerCase()))
  .map((blog) => (
    <div key={blog.id}>
      {/* Blog card */}
    </div>
))}


const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setBlogs(res.data.slice(0, 10))) // Fetch 10 blogs
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {blogs.map((blog) => (
          <div key={blog.id} className="p-4 border rounded-lg shadow">
            <h2 className="text-xl font-semibold">{blog.title}</h2>
            <p className="text-gray-600">{blog.body.substring(0, 100)}...</p>
            <Link to={`/blog/${blog.id}`} className="text-blue-500 mt-2 block">Read More</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
