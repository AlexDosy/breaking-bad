import React from "react";
import CharcterItem from "./CharcterItem";
import Spinner from "../ui/Spinner";
const CharacterGrid = ({ items, isLoading }) => {
	return isLoading ? (
		<Spinner />
	) : (
		<section className="cards">
			{items.map((item) => (
				<CharcterItem key={item.char_id} item={item}></CharcterItem>
			))}
		</section>
	);
};

export default CharacterGrid;
