export default {
	type:
		`Brand{
			_id:String
			name: String
			website: String
			created_date: String
		}
	`,
	query: `
		getBrands(filter: Filter,name:String):[Brand]!
		getBrand(_id:String):[Brand]!`
	,
	mutation: `
		createBrand(name:String,website:String):Brand!
	`
};