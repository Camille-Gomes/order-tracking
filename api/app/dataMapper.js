const mysql = require("mysql");
const db = require("../config");

const dataMapper = {
    // Users
    getAllUsers: (callback) => {
        const sql = `SELECT users.id,
        users.firstname,
        users.lastname,
        users.email,
        users.street,
        users.zipcode,
        users.city,
        users.phone
        FROM users`;
        db.query(sql, callback);
    },

    getUserById: (userId, callback) => {
        let sql = "SELECT * FROM ?? WHERE ?? = ?";
        const inserts = ["users", "id", userId];
        sql = mysql.format(sql, inserts);
        db.query(sql, callback);
    },

    // Orders
    getAllOrders: (callback) => {
        let sql = "SELECT * FROM ?? ";
        const inserts = ["orders"];
        sql = mysql.format(sql, inserts);
        db.query(sql, callback);
    },

    getOrdersById: (userId, callback) => {
        let sql = "SELECT * FROM ?? WHERE ?? = ?";
        const inserts = ["orders", "user_id", userId];
        sql = mysql.format(sql, inserts);
        db.query(sql, callback);
    },

    // Shipping
    getOrdersByShipping: (shippingId, callback) => {
        let sql = "SELECT * FROM ?? WHERE ?? = ?";
        const inserts = ["orders", "shipping_id", shippingId];
        sql = mysql.format(sql, inserts);
        db.query(sql, callback);
    },

    // Status
    getOrdersByStatus: (statusId, callback) => {
        let sql = "SELECT * FROM ?? WHERE ?? = ?";
        const inserts = ["orders", "status_id", statusId];
        sql = mysql.format(sql, inserts);
        db.query(sql, callback);
    },
};

module.exports = dataMapper;
