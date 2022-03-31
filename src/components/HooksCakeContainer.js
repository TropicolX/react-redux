import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux";

const HooksCakeContainer = () => {
	// normally just state.numOfCakes if not using combine reducers
	const numOfCakes = useSelector((state) => state.cake.numOfCakes);
	const dispatch = useDispatch();

	return (
		<div>
			<h2>Num of cakes - {numOfCakes}</h2>
			<button onClick={() => dispatch(buyCake(5))}>Buy cakes</button>
		</div>
	);
};

export default HooksCakeContainer;
