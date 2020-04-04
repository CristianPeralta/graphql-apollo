import express from 'express'

const server = express();

server.get("/", (req, res) => {
    res.send("<html><h1>Express</h1> </html>")
})

server.listen(3000, () => {
    console.log('Listening on port 3000');
});
