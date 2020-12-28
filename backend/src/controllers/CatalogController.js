module.exports = {

    async helloWorld(request, response) {
        await response.json({message : 'hello world!'});
    }

}