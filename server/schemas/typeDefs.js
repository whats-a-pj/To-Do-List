const typeDefs = `
type User {
    _id: ID!
    username: String!
    todos: [Todos]
}
type Todos {
    _id: ID!
    todo: String
}
type Auth {
    token: ID!
    user: User
}
type Query {
    me: User
    user(username: String!): User
    todo(todoId: ID!): Todos
    todos(username: String): Todos
}
type Mutation {
    createUser(username: String!, password: String!): Auth
    loginUser(username: String!, password: String!): Auth
    createTodo(todo: String): Todos
    updateTodo(todo: String): Todos
    deleteTodo(_id: ID!): Todos
    savedTodo(_id: ID!): Todos
}
`;
module.exports = typeDefs;