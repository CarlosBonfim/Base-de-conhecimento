module.exports = app => {
    const Stat = app.mongoose.model('Stat', {
        users: Number,
        categories: Number,
        articles: Number,
        created: Date
    })
    const get = (req, res) => {
        Stat.findOne({}, {}, { sort: { 'createdAt': -1 } })
            .then(stat => {
                const defaultStat = {
                    users: 0,
                    categories: 0,
                    articles: 0,
                }
                res.json(stat || defaultStat)
            })
            .catch(err => res.status(400).send(err))
    }
    return { Stat, get }
}