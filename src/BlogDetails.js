import { useHistory, useParams } from  "react-router-dom";
import useFetch from "./useFetch";



const BlogDetails = () => {
    const {id} = useParams();
    const { data: blog, error, isPending } = useFetch('http://localhost:3000/blogs/' +id);
    const history = useHistory();

    const handleClick= () => {
        fetch('http://localhost:3000/blogs/' +blog.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/')
        })

    }


    return (
        <div className="blog-details">
            
            { isPending && <div>Loading...</div> }
            { error && <div> { error } </div>}
            { blog && (
                <article>
                    {/* <div>{blog.img}</div> */}
                    <div>
                        <img src={blog.img} alt="img" />
                    </div>
                    <h2>{ blog.name }</h2>
                    <p>{ blog.gender }</p>
                    <div>
                        { blog.role }
                    </div>
                    <button onClick={handleClick}>delete</button>
                </article>
            )}
            {/* {img && img.map((blog) => {
                return(
                    <div key={blog.id}>
                        <img src={ blog.img } alt="" />
                    </div>
                )
            })} */}
        </div>
    );
}
 
export default BlogDetails;