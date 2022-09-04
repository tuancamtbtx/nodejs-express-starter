import mongoose from "mongoose";

const { Schema } = mongoose;
let UserSchema = new Schema({
	username: {
		type: String,
		required: true
	},
	email:{
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	createdBy: {
		type: String,
		required: true
	},
	createdAt: {
		type: Date,
		default: Date.now
	},
	updatedAt: {
		type: Date,
		default: Date.now
	}
})

UserSchema.virtual('id').get(function () {
	return this._id;
});

UserSchema.set('toJSON', { virtuals: true });

export default mongoose.model('users', UserSchema);
