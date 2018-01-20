// const Sequelize = require('sequelize');
//
// const db = new Sequelize('payU', 'payU', 'payU', {
//     host: 'localhost',
//     dialect: 'mysql',
//     pool: {
//         min: 0,
//         max: 5,
//     }
// });
//
// const Payment = db.define('details', {
//     key: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     salt: {
//         type: Sequelize.STRING,
//         allowNull: false,
//     }
// });
//
// // Payment.create({
// //     key: 'IK06geeD',
// //     salt: 'rr4AWWklYu'
// // })
//
//
// db.sync()
//     .then(() => console.log("Database has been synced"))
//     .catch((err) => console.error("Error creating database"));
//
// exports = module.exports = Payment;