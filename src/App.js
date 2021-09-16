import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/ui/Header";
import CharacterGrid from "./components/characters/CharacterGrid";
import Search from "./components/ui/Search";
import axios from "axios";

const App = () => {
	// eslint-disable-next-line
	const [items, setItems] = useState([]);
	// eslint-disable-next-line
	const [isLoading, setIsloading] = useState(true);
	const [query, setQuery] = useState("");

	useEffect(() => {
		// eslint-disable-next-line
		const fetchItems = async () => {
			const result = await axios(
				`https://www.breakingbadapi.com/api/characters?name=${query}`
			);
			//console.log(result.data);
			setItems(result.data);
			setIsloading(false);
		};
		fetchItems();
	}, [query]);

	return (
		<div className="container">
			<Header />
			<Search getQuery={(q) => setQuery(q)} />
			<CharacterGrid isLoading={isLoading} items={items} />
		</div>
	);
};

export default App;
