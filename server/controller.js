module.exports = {

    getGroupsByCategory: (req, res) => {
        const db = req.app.get('db');
        db.get_groups_by_category()
            .then((groups) => res.status(200).send(groups))
            .catch((err) => res.status(500).send(err))
    },

}