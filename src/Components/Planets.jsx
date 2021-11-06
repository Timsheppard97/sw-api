import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router';

const Planets = () => {

    const {id} = useParams();
    const [planet,setPlanet] = useState();

    useEffect(()=> {
        axios.get(`https://swapi.dev/api/planets/${id}/`)
            .then(res=>{
            setPlanet(res.data)
            console.log('res: ',res)
            })
            .catch(err=>{console.log(err)})
    },[id])

    return (
        planet ? <div>
            <h1>Name: {planet.name}</h1>
            <p>Rotation Period: {planet.rotation_period}</p>
            <p>Orbital Period: {planet.orbital_period}</p>
            <p>Diameter: {planet.diameter}</p>
            <p>Climate: {planet.climate}</p>
            <p>Population: {planet.population}</p>
        </div> :
        <div>
            <h2>These aren't the droids you're looking for</h2>
            <img src="https://www.mensjournal.com/wp-content/uploads/2020/01/ewan-mcgregor-obi-wan-kenobi-1.jpg?w=700&quality=86&strip=all"></img>
        </div>
    )
}

export default Planets;