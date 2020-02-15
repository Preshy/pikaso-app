const moongoose = require("mongoose");
let uniqueValidator = require('mongoose-unique-validator');

let UserSchema = new moongoose.Schema({
    username: { type: String, lowercase: true, required: [true, 'cant be blank'], match:[/^[a-zA-Z0-9]=$/, 'is valid'], index: true },
    email: { type: String, lowercase: true, required: [true, 'cant be blank'], match:[/\S+@\S+\.\S+/, 'is valid'], index: true },
    password: String
}, { timestamp: true } );

moongoose.model('User', UserSchema);