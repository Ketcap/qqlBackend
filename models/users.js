import mongoose from 'mongoose';

const User = mongoose.model('User', {
	email: {
		address: String,
		verified: Boolean
	},
	profile: {
		name: String,
		surname: String,
		profileImage: String,
	},
	secure: {
		password: String
	},
	created_date: Date
});

export default User;
