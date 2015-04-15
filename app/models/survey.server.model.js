'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Survey Schema
 */
var SurveySchema = new Schema({
	name: {
		type: String,
		default: '',
		required: 'Please fill Survey name',
		trim: true
	},
    q1: {
		type: String,
		default: '',
		required: 'Please fill Survey for Question1',
		trim: true
	},
    q2: {
		type: String,
		default: '',
		required: 'Please fill Survey for Question2',
		trim: true
	},
    q3: {
		type: String,
		default: '',
		required: 'Please fill Survey for Question3',
		trim: true
	},
    q4: {
		type: String,
		default: '',
		required: 'Please fill Survey for Question4',
		trim: true
	},
    q5: {
		type: String,
		default: '',
		required: 'Please fill Survey for Question5',
		trim: true
	},  
    a1: {
		type: String,
		default: '',
		trim: true
	},
    a2: {
		type: String,
		default: '',
		trim: true
	},
    a3: {
		type: String,
		default: '',
		trim: true
	},
    a4: {
		type: String,
		default: '',
		trim: true
	},
    a5: {
		type: String,
		default: '',
		trim: true
	},
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
    
});

mongoose.model('Survey', SurveySchema);