const { User, Todos } = require('../models');
const {
    signToken,
    AuthenticationError,
} = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            return User.find().populate('todos');
        },
        todos: async (parent, {user}) => {
            const params = user ? { user: user} : {};
            const todoList = await Todos.find(params).sort({
                createdAt: -1,
            });
            return todoList;
        },
        todo: async (parent, {todoId}) => {
            return Todos.findOne({_id: todoId});
        },
        me: async (parent, args, context) => {
            if (context.user) {
                const user = await User.findOne({
                    _id: context.user._id,
                }).populate('todos');
                return user;
            }
        throw new AuthenticationError('You need to be logged in!')
        },
    },
Mutation: {
    createUser: async (parent, {username, password}) => {
        const user = await User.create({
            username,
            password,
        });
        const token = signToken(user);
        return {token, user};
    },
    loginUser: async (parent, {username, password}) => {
        const user = await User.findOne({username});
        if (!user) {
            throw AuthenticationError;
        };
        const token = signToken(user);
        return {token, user};
    },
    createTodo: async (parent, {todo}, context) => {
        if (context.user) {
            const newTodo = await Todos.create({todo,});
            await User.findOneAndUpdate(
                {_id: context.user._id},
                {$push: {todos: newTodo._id}},
                {new: true}
            );
        }
    },
    updateTodo: async (parent, {todo}, context) => {
        if (context.user) {
            const editTodo = await Todos.findOneAndUpdate(
                {_id: context.user._id},
                {todo: todo},
                {new: true}
            );
            return editTodo
        }
    },
    savedTodo: async (parent, {todo}, context) => {
        if (context.user) {
            const savedTodo = await Todos.create({todo,});
            const thisTodo = await Todos.findOne({todo: savedTodo.todo,});
            await User.findOneAndUpdate(
                {_id: context.user._id},
                {$addToSet: {todos: thisTodo._id}}
            );
            return savedTodo;
        }
    },
    deleteTodo: async (parent, {todoId}, context) => {
        if (context.user) {
            const delTodo = await Todos.findOneAndDelete({
                _id: todoId,
                todo: context.user.username,
            });
            await User.findOneAndUpdate(
                {_id: context.user._id},
                {$pull: {todos: delTodo._id}}
            );
            return delTodo
        }
        throw AuthenticationError;
    }
}};

module.exports = resolvers;