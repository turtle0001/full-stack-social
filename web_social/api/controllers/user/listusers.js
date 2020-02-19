module.exports = async function(req, res) {
    console.log("Listing out all users now...")

    const users = await User.find()

    res.send(users)
}