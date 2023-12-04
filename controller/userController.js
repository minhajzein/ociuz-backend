module.exports = {
    home: (req, res) => {
        try {
            res.send('Hello World')
        } catch (error) {
            console.log(error);
        }
    }
}