const db = require('../config/connection');
const { User } = require('../models');
const userSeeds = require('./userSeeds.json');
const todoSeeds = require('./todoSeeds.json'); // This should be an array of strings representing todos
const cleanDB = require('./cleanDB');

db.once('open', async () => {
    try {
        await cleanDB('User', 'users');

        // Create users
        const users = await User.create(userSeeds);

        // Assign todos to users randomly
        todoSeeds.forEach(async (todoItem) => {
            // Randomly pick a user to assign the todo
            const randomUserIndex = Math.floor(Math.random() * users.length);
            const user = users[randomUserIndex];

            // Add the todo to the user's todos
            await User.findOneAndUpdate(
                { _id: user._id },
                {
                    $push: {
                        todos: { todo: todoItem },
                    },
                }
            );
        });
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
    console.log('all done!');
    process.exit(0);
});
