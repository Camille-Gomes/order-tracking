const dataMapper = require("../dataMapper");

const ordersController = {
    getAllOrders: (req, res, next) => {
        dataMapper.getAllOrders((err, orders) => {
            if (err) {
                return next(err);
            }

            res.json(orders);
        });
    },
    getOrdersById: (req, res, next) => {
        const { userId } = req.params;
        dataMapper.getOrdersById(userId, (err, orders) => {
            if (err) {
                return next(err);
            }

            if (orders.length === 0) {
                return res.send("L'utilisateur n'a pas de commande");
            }

            res.json(orders);
        });
    },
    getOrdersByStatus: (req, res, next) => {
        const { statusId } = req.params;
        dataMapper.getOrdersByStatus(statusId, (err, orders) => {
            if (err) {
                return next(err);
            }

            if (orders.length === 0) {
                return res.send(
                    "Il n'y a pas de commande pour ce type de statut",
                );
            }

            res.json(orders);
        });
    },
    getOrdersByShipping: (req, res, next) => {
        const { shippingId } = req.params;
        dataMapper.getOrdersByShipping(shippingId, (err, orders) => {
            if (err) {
                return next(err);
            }

            if (orders.length === 0) {
                return res.send(
                    "Il n'y a pas de commande pour ce type d'envoi",
                );
            }

            res.json(orders);
        });
    },
};

module.exports = ordersController;
