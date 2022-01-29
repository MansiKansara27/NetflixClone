import React, {useState, useEffect} from 'react'
import axios from './axios';


function Row({title,fetchUrl}){
	const [movies, setMovies] = useState([]);

	useEffect(()=>{
		// if[], run once when row loads, and dont run again 
		async function fetchData(){
			const request = await axios.get(fetchUrl);
			setMovies(request.data.results);
			return request;
		}
		fetchData();

	},[fetchUrl]); 
	
	console.log(movies);

	return(
		
		<div className="row">
		
			<h2> {title}</h2>

			{/* container -> posters */}
		
		</div>
		)
}

export default Row