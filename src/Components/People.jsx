import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router';

const People = () => {

    const {id} = useParams();
    const [person,setPerson] = useState();

    useEffect(()=> {
        axios.get(`https://swapi.dev/api/people/${id}/`)
            .then(res=>{
            setPerson(res.data)
            })
            .catch(err=>{console.log(err)})
    },[id])

    return (
        person ? <div>
            <h1>Name: {person.name}</h1>
            <p>Height: {person.height}</p>
            <p>Mass: {person.mass}</p>
            <p>Hair Color: {person.hair_color}</p>
            <p>Skin Color: {person.skin_color}</p>
        </div> :
        <div>
            <h2>These aren't the droids you're looking for</h2>
            <img src="https://www.mensjournal.com/wp-content/uploads/2020/01/ewan-mcgregor-obi-wan-kenobi-1.jpg?w=700&quality=86&strip=all"></img>
        </div>
    )
}

export default People;