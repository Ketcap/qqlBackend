import Brand from './brand';
import Product from './product';

export default {
	Query: {
		...Brand.Query,
		...Product.Query
	},
	Mutation: {
		...Brand.Mutation,
		...Product.Mutation
	}
};