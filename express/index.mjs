import express from 'express'

const app = express()

const PORT = process.env.NODE_ENV || 3000

const users = [
    { id: 1, username: "Alice", password: 1234 },
    { id: 2, username: "Bob", password: 5678 },
    { id: 3, username: "Charlie", password: 91011 },
    { id: 4, username: "David", password: 1213 }
];


app.get('/:id?', (request, response) => {

    console.log('request recieved successfully')

    const queryParams = request.params

    if (queryParams.id) {


        // const userID = parseInt(queryParams.id, 10)
        const userID = parseInt(queryParams.id)
        if (!/^\d+$/.test(userID)) {
            console.log('invalid id')
        }

        console.log('userid', userID)

        // filter user with id and send back to client.

        const user = users.find(user => user.id === userID)
        
        if (!user)
            return response.status(404).send({ 'error': 'User not found' })


        return response.status(200).send(user)


    } else

        return response.status(200).send(users)
})




app.listen(PORT, () => {
    process.stdout.write(`Listening on port ${PORT}> \n`)
})
