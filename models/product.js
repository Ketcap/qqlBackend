import mongoose from 'mongoose';

const Product = mongoose.model('Product', {
	brand: String,
	item_name: String,
	price: {
		original: mongoose.Schema.Types.Decimal128,
		current: mongoose.Schema.Types.Decimal128
	},
	default_type: Number,
	colors: [{
		images: [String],
		avaliable_sizes: [String]
	}],
	gender: String,
	type: String,
	type_2: String,
	created_date: Date
});

export default Product;
