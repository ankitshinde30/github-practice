const express = require("express");
const app = express();
const port = 8080;

// Function to generate random user data
const generateUsers = (count) => {
    const users = {};
    for (let i = 1; i <= count; i++) {
        users[`user${i}`] = {
            name: `User ${i}`,
            avatar: `https://avatar.iran.liara.run/public${i}.jpg`,
            followers: Math.floor(Math.random() * 50000) + 1000, // Random followers between 1000-50000
            following: Math.floor(Math.random() * 100) + 1, // Random following between 1-100
            posts: [
                {
                    image: "https://plus.unsplash.com/premium_photo-1677545182067-26ac518ef64f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2F0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
                    likes: Math.floor(Math.random() * 2000) + 10, // Likes between 10-2000
                    comments: Math.floor(Math.random() * 100) + 1, // Comments between 1-100
                },
                {
                    image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
                    likes: Math.floor(Math.random() * 2000) + 10,
                    comments: Math.floor(Math.random() * 100) + 1,
                },
                {
                    image: "https://images.unsplash.com/photo-1577023311546-cdc07a8454d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2F0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
                    likes: Math.floor(Math.random() * 2000) + 10,
                    comments: Math.floor(Math.random() * 100) + 1,
                },
            ],
        };
    }
    return users;
};

const usersData = generateUsers(50);

// API Endpoint to get users
app.get("/api/users", (req, res) => {
    res.json(usersData);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
