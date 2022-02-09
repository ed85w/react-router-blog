import { useParams, Link } from "react-router-dom";

const PostPage = ({posts, handleDelete}) => {
  const {id} = useParams(); //as defined in app.js route
  const post = posts.find(post => (post.id).toString() === id);
  return ( 
    <main className="PostPage">
      <article className="post">
        {post && 
          <>
            <h2>{post.title}</h2>
            <p className="postDate">{post.datetime}</p>
            <p className="postBody">{post.body}</p>
            <button
              onClick={() => handleDelete(post.id)}
            >
              Delete post
            </button>
          </>
        }

        {!post &&
        <>
          <p>Oh dear! no post here</p>
          <Link to="/">Back to home</Link>
        </>
        
        }
      </article>
    </main>
   );
}
 
export default PostPage;