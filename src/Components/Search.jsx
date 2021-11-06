import React, {useState} from 'react'
import { useHistory } from 'react-router';


const Search = () => {
    const [resource,setResource] = useState();
    const [id,setId] = useState();
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`/${resource}/${id}`)
    }

    return (
        <form onSubmit={handleSubmit}>
            Search for:
            <select onChange={(e)=>{
                setResource(e.target.value)
            }}>
                <option selected disabled hidden>Choose an option</option>
                <option>people</option>
                <option>planets</option>
            </select>
            ID:
            <input type='number' onChange={(e)=>{
                setId(e.target.value)
            }}></input>
            <input type='submit' value='Search'></input>
        </form>
    )
}

export default Search;