const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const todoSchema = require('./Todos');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
        },
        // todos: [{
        //     type: Schema.Types.ObjectId,
        //     ref: 'Todos',
        // }],
        todos: [todoSchema]
    },
    {
        toJSON: {
            virtuals: true,
        },
        // id: false,
    }
);

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next();
});

userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

userSchema.virtual("todoCount").get(function () {
    return this.todos.length
});

const User = model('User', userSchema);
module.exports = User;