import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs.js'
import { GifGridItem } from './GifGridItem.js'


export const GitGrid = ({category}) => {

	const { data:images, loading } = useFetchGifs(category);


	
	
	

	return (
		<div>
			<h3 className='animate__animated animate__fadeIn'>{category}</h3>

           {loading && <p className='animate__animated animate__flash'>Loading</p>}
			<div className='card-grid'>
				{
					images.map( img => {
						return(
							<GifGridItem key={img.id} {...img}/>	
						)					
					})
				}
			</div>
			
		</div>
	)
}
