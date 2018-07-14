import Product from './product';
import Brand from './brand';
export default `
	type ${Product.type}
	type ${Brand.type}
	type Query {
		${Product.query}
		${Brand.query}
	}
	type Mutation {
		${Product.mutation}
		${Brand.mutation}
	}
	
`;