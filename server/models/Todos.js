const { Schema, model } = require('mongoose');

const todoSchema = new Schema(
    {
        todo: {
            type: String,
        },
        user: [{
            type: Schema.Types.ObjectId,
            ref: 'User',
        }]
    }
);

const Todos = model('Todos', todoSchema);
module.exports = Todos;