const bcrypt = require('bcrypt-nodejs')

module.exports = app => {
    const { existsOrError, notExistsOrError, equalsOrError } = app.api.validation

    const encryptPassword = password => {
        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hash(password, salt)
    }

    const save = async (req, res) => {
        const user = { ...req.body }
        if (req.params.id) user.id = req.params.id


        try {
            existsOrError(user.name, 'Nome não encontrado')
            existsOrError(user.email, 'E-mail não encontrado')
            existsOrError(user.password, 'senha não encontrado')
            existsOrError(user.confirmPassword, 'Confirmaçao de senha invalida')
            equalsOrError(user.password, user.confirmPassword, 'Senhas nao conferem')

            const userFromDB = await app.db('users').where({ email: user.email }).first()
            if (!user.id) {
                notExistsOrError(userFromDB, 'usuario ja cadastrado')
            }
        }
        catch (msg) {
            return res.status(400).send(msg)
        }

        user.password = encryptPassword(user.password)
        delete user.confirmPassword

        if (user.id) {
            app.db('users')
                .update(user)
                .where({ id: user.id })
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        } else {
            app.db('users')
                .insert(user)
                .then(_ => res.send(204))
                .catch(err => res.status(500).send(err))
        }
    }
    const get = (req, res) => {
        app.db('users')
            .select('id', 'name', 'email', 'admin')
            .then(users => res.json(users))
            .catch(err => res.status(500).send(err))
    }

    return { save, get }
}