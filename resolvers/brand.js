export default {
	Query: {
		getBrands: async (parent, { filter, ...args }, { Brand }) => {
			const query = { ...args };
			query.name ? query.name = { $regex: query.name } : null;
			const Brands = await Brand.find(query).sort({ [filter.sort]: filter.order });
			return Brands.map(b => (b._id = b._id.toString, b));
		},
		getBrand: async (parent, args, { Brand }) => await Brand.findById(args)
	},
	Mutation: {
		createBrand: async (parent, args, { Brand }) => await new Brand({ ...args, created_date: new Date() }).save()
	}
};