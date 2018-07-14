import mongoose from 'mongoose';

const Brand = mongoose.model('Brand', {
	name: String,
	website: String,
	created_date: Date
});

export default Brand;
