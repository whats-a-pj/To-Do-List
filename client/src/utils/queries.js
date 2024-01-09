import { gql } from '@apollo/client';

export const QUERY_USER = gql `
    query user {
        user {
            _id
            username
            todos {
                todo
            }
        }
    }
`;

export const QUERY_ME = gql `
    query me {
        me {
            _id
            username
            todos {
                _id
                todo
            }
        }
    }
`;

export const QUERY_TODOS = gql `
    query getTodos($todo: String) {
        todos(todo: $todo) {
            _id
            todo
        }
    }
`;

export const QUERY_SINGLE_TODO = gql `
    query getSingleTodo($todoId: ID!) {
        todo(todoId: $todoId) {
            _id
            todo
        }
    }
`;