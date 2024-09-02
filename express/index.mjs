import express from 'express'

const app = express()

const PORT = process.env.NODE_ENV || 3000

// use json middleware

app.use(express.json())

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





app.post('/', (request, response) => {
    console.log('request recieved successfully')


    const { body } = request

    // get the body
    // get the last user in the arrary
    // add the body to the end of the array
    // increase the id of the newly added user by last user id + 1

    // used spread operator to unpack request body into newly created user.
    const newUser = {id: users[users.length - 1].id + 1, ...body}

    // push new user object onto the users array.
    users.push(newUser)

    return response.status(200).send({'message': 'User created successfully', 'user': newUser})
})

app.listen(PORT, () => {
    process.stdout.write(`Listening on port ${PORT}> \n`)
})
