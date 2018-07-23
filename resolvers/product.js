import Product from '../models/product';
import Brand from '../models/brand';


export default {
	Query: {
		getProducts: async (parent, args) => {
			const query = { ...args };
			query.item_name ? query.item_name = { $regex: query.item_name } : null;
			const Products = await Product.find(query);
			return Products.map(p => (p._id = p._id.toString, p));
		},
		getProduct: async (parent, args) => await Product.findById(args)
	},
	Mutation: {
		createProduct: async (parent, args) => await new Product({ ...args, created_date: new Date() }).save()
	},
	Nested: {
		Product: {
			brand: async ({ brand }, args) => {
				return await Brand.findOne({ _id: brand, ...args });
			}
		}
	}
}