export default {
	Query: {
		getBrands: async (parent, args, { Brand }) => {
			const query = { ...args };
			query.item_name ? query.item_name = { $regex: query.item_name } : null;
			const Brands = await Brand.find(query);
			return Brands.map(b => (b._id = b._id.toString, b));
		},
		getBrand: async (parent, args, { Brand }) => await Brand.findById(args)
	},
	Mutation: {
		createBrand: async (parent, args, { Brand }) => await new Brand({ ...args, created_date: new Date() }).save()
	}
}