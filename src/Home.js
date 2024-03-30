import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    const { error, isPending, data:blogs } = useFetch('http://localhost:8000/blogs')


    return (
        <div className="home">
            { error && <div> Oops! Failed to load data... </div>}
            {isPending &&  <div>Loading...</div>}
          {blogs &&<BlogList blogs={blogs} title="Your Workers" />} 
        </div>
    );
}
 
export default Home; 