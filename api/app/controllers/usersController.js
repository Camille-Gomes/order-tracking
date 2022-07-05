const dataMapper = require("../dataMapper");

const usersController = {
    getAllUsers: (req, res, next) => {
        dataMapper.getAllUsers((err, users) => {
            if (err) {
                return next(err);
            }

            res.json(users);
        });
    },
    getOneUser: (req, res, next) => {
        const { userId } = req.params;
        dataMapper.getUserById(userId, (err, user) => {
            if (err) {
                return next(err);
            }

            if (user.length === 0) {
                return res.send("L'utilisateur n'a pas pu être trouvée");
            }

            delete user[0].password;

            res.json(user[0]);
        });
    },
};

module.exports = usersController;
