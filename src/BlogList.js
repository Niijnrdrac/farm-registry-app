import { Link } from "react-router-dom";

const BlogList = ({blogs, title, }) => {
    

    return (
         <div className="blog-list">
            <h2>{ title }</h2>
             {blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
                <Link to={`/blogs/${blog.id}`}>
                <h1>{ blog.name }</h1>
                <h2>{ blog.role }</h2>
                <p>{ blog.gender }</p>
                </Link>
                
            </div> 
           ))}
         </div>
    );
}
 
export default BlogList;