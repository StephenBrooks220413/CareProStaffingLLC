module.exports = async (req, res, next) => {
    const { yourname, youremail, yoursubject, yourmessage } = req.body;
    try {
        await mainMail(yourname, youremail, yoursubject, yourmessage);

        res.send("Message Successfully Sent!");
    } catch (error) {
        res.send("Message Could not be Sent");
    }
}