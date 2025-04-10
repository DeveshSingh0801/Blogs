import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const [comments, setComments] = useState([]);

useEffect(() => {
  axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
    .then((res) => setComments(res.data))
    .catch((err) => console.log(err));
}, [id]);
<div className="mt-6">
  <h2 className="text-xl font-semibold">Comments</h2>
  {comments.map((comment) => (
    <div key={comment.id} className="p-2 border-b">
      <p className="text-gray-600">{comment.body}</p>
    </div>
  ))}
</div>
const [likes, setLikes] = useState(0);
<button onClick={() => setLikes(likes + 1)} className="mt-2 p-2 bg-blue-500 text-white rounded">
  Like ({likes})
</button>

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [country, setCountry] = useState(null);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => setBlog(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/name/india")
      .then((res) => setCountry(res.data[0]))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="p-6">
      {blog ? (
        <>
          <h1 className="text-2xl font-bold">{blog.title}</h1>
          <p className="text-gray-700">{blog.body}</p>

          {country && (
            <div className="mt-6 p-4 border rounded">
              <h2 className="text-xl font-semibold">Country Info</h2>
              <p><strong>Name:</strong> {country.name.common}</p>
              <p><strong>Capital:</strong> {country.capital[0]}</p>
              <img src={country.flags.svg} alt={country.name.common} className="w-16 h-10 mt-2" />
            </div>
          )}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BlogDetails;
