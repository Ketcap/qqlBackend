export default {
	Query: {
		getProducts: async (parent, args, { Product }) => {
			const query = { ...args };
			query.item_name ? query.item_name = { $regex: query.item_name } : null;
			const Products = await Product.find(query);
			return Products.map(p => (p._id = p._id.toString, p));
		},
		getProduct: async (parent, args, { Product }) => await Product.findById(args)
	},
	Mutation: {
		createProduct: async (parent, args, { Product }) => await new Product({ ...args, created_date: new Date() }).save()
	}
}