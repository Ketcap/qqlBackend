export default {
	type:
		`Product{
			_id:String
			item_name: String
			brand: String
			default_type: Int
			gender: String
			type: String
			type_2: String
			created_date: String
	}`,
	query: `
		getProducts(
			brand:String
			item_name:String
			gender:String
			type:String
			type_2:String
		):[Product]!
		getProduct(_id:String):[Product]!
	`,
	mutation: `
		createProduct(
			item_name: String
			brand: String
			default_type: Int
			gender: String
			type: String
			type_2: String
		):Product!
	`
};