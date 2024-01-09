import { gql } from '@apollo/client'

export const CREATE_USER = gql `
    mutation createUser($username: String!, $password: String!) {
        createUser(username: $username, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const LOGIN_USER = gql `
    mutation loginUser($username: String!, $password: String!) {
        loginUser(username: $username, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const CREATE_TODO = gql `
    mutation createTodo($todo: String!) {
        createTodo(todo: $todo) {
            _id
            todo
        }
    }
`;

export const UPDATE_TODO = gql `
    mutation updateTodo($todo: String!) {
        updateTodo(todo: $todo) {
            _id
            todo
        }
    }
`;

export const DELETE_TODO = gql `
    mutation deleteTodo($todo: String!) {
        deleteTodo(todo: $todo) {
            _id
            todo
        }
    }
`;

//todo OR LIKE THIS:
// export const DELETE_TODO = gql `
//     mutation deleteTodo($todoId: ID!) {
//         deleteTodo(todoId: $todoId) {
//             _id
//             todo
//         }
//     }
// `;