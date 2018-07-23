import Brand from '../models/brand';

export default {
	Query: {
		getBrands: async (parent, { filter, ...args }) => {
			const query = { ...args };
			query.name ? query.name = { $regex: query.name } : null;
			const sort = filter && { [filter.sort]: filter.order };
			const Brands = await Brand.find(query).sort(sort);
			return Brands.map(b => (b._id = b._id.toString, b));
		},
		getBrand: async (parent, args) => await Brand.findById(args)
	},
	Mutation: {
		createBrand: async (parent, args) => await new Brand({ ...args, created_date: new Date() }).save()
	}
};