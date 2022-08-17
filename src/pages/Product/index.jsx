import React from 'react';
import queryString from 'query-string';

export const Product = () => {

	const url = window.location.pathname;
	const id = url.slice(-1);

	const products = [
		{ id: 1, name: 'Iron' },
		{ id: 2, name: 'Back massager' },
		{ id: 3, name: 'Leg massager' },
	];

	return <div>Product</div>;
};
