const PORT = 8900;
const io = require("socket.io")( PORT, {
    cors: {
        origin: "http://localhost:3000"
    }
})

let users = [];

const addUser = (userId, socketId) => {
  !users.some((user) => user.userId === userId) &&
    users.push({ userId, socketId });
};

const removeUser = (socketId) => {
  users = users.filter((user) => user.socketId !== socketId);
};

const getUser = (userId) => {
  return users.find((user) => user.userId === userId);
};

io.on("connection", (socket) => {
  //when connect
  console.log("a user connected.");

  //take userId and socketId from user
  socket.on("addUser", (userId) => {
    addUser(userId, socket.id);

    io.emit("getUsers", users);
  });

  //send and get message
  socket.on("sendMessage", ({ senderId, receiverId, text, conversationId, _id
 }) => {
     try {
        if (receiverId === undefined) {
             throw new Error("Unable to establish a websocket connection with another user")
        }

        const user = getUser(receiverId);
        if (receiverId!== undefined) {
            io.to(user.socketId).emit("getMessage", {
                senderId,
                text,
                receiverId,
                _id,
                conversationId
            });
        }
     } catch(e) {
         console.log(e.message)
     }

  });

  //when disconnect
  socket.on("disconnect", () => {
    console.log("a user disconnected!");
    removeUser(socket.id);
    io.emit("getUsers", users);
  });
});