import React, {useState} from "react";
import {AddCategory} from "./components/AddCategory.js";
import {GitGrid} from "./components/GitGrid.js";

export const GifExpertApp = () => {
	const [categories, setCategories] = useState(['Digimon']);

	return(
		<>
		<h2>GifExpertApp</h2>
		<AddCategory setCategories={setCategories} />
		<hr />

		<ol>
			{
				categories.map(category => 
					<GitGrid
					key={category} 
					category={category}
					/>
				)
			}
		</ol>
		</>
		)
}