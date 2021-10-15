const express = require('express');
const accountsRouter = require('./accounts/accounts-router');

const server = express();

server.use(express.json());
server.use('/api/accounts', accountsRouter);

module.exports = server;

/* 
--SELECT * FROM Customers where postalcode = '1010';
--select * from suppliers where supplierid = '11' 
--select * from orders desc limit 10
--select * from customers where city = 'London' or city = 'Madrid' or country = 'Brazil'
--insert into customers (customername, contactname, address, country, postalcode) values ('The Shire', 'Bilbo Baggins', '1 Hobbit-Hole', 'Bag End', '111')
--update customers set country = 'Bag End', city = 'Middle Earth' where customerid = '92'
--select * from customers where customername = 'The Shire'
*/
