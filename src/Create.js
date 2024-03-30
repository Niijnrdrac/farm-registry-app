import { useState } from "react";
import { useHistory } from 'react-router-dom'; 

const Create = () => {
    const[ name, setName]= useState('');
    const[ role, setRole]= useState('');
    const[ gender, setGender]= useState('Male');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();



    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { name, role, gender };

        setIsPending(true);



        fetch('http://localhost:3000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added')
            setIsPending(false);
            history.push('/');
        })

        
    }
    return (
        <div className="create">
            <h2>Add a new Employee</h2>
            <form onSubmit={handleSubmit}>
                <label>Employee Name:</label>
                <input
                type="text"
                required
                value={ name }
                onChange={(e) => setName(e.target.value)}
                />
                <label>Employee Role:</label>
                <textarea
                  required
                  value={ role }
                  onChange={(e) => setRole(e.target.value)}
                ></textarea>
                <label>Employee gender</label>
                <select 
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="bi">Bi</option>
                    <option value="queer">Queer</option>
                    </select>
                    {!isPending && <button>Add Employee</button>}
                    {isPending && <button disabled>Addind Employee...</button>}
            </form>
        </div>
    );
}
 
export default Create;