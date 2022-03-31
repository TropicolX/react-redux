import React from "react";
import { connect } from "react-redux";
import { buyCake, buyIceCream } from "../redux";

const CakeContainer = (props) => {
	return (
		<div>
			<h2>Number of cakes: {props.numOfCakes}</h2>
			<button onClick={props.buyCake}>Buy Cake</button>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		numOfCakes: state.cake.numOfCakes,
	};
};

/*
const mapStateToProps = (state, ownProps) => {
	const itemState = ownProps.cake ? state.cake.numOfCakes : state.iceCream.numOfIceCreams
	return {
		item: itemState
	}
	// so it will be props.item in this case
}
*/

const mapDispatchToProps = (dispatch) => {
	return {
		buyCake: () => dispatch(buyCake()),
	};
};

/*
const mapDispatchToProps = (dispatch, ownProps) => {
	const dispatchFunction = ownProps.cake 
	? () => dispatch(buyCake()) 
	: () => dispatch(buyIceCream());
	return {
		buyItem: () => dispatchFunction;
	};
};
*/

// when you only want to dispatch but not access state use null value instead of mapStateToProps in the connect function

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
