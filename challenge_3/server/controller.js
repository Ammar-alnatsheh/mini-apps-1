const db = require('./../db/');
// var data = [{id:0,name:'apple'},{id:1,name:'banana'},{id:2,name:'orange'},{id:3,name:'berry'}];
const getItems = () => {
  
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM items;`, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      })

      });
}

const checkout = (req, res) => {
  const orders = 'INSERT INTO orders (name, cart) VALUES (?, ?);';
  const users = 'INSERT INTO users (name, password, email) VALUES (?, ?, ?);';
  const adresses = 'INSERT INTO adresses (name, line1, line2, city, state, zipcode, phone) VALUES (?, ?, ?, ?, ?, ?, ?);';
  const cards = 'INSERT INTO cards (name, number, exp, cvv, zipcode) VALUES (?, ?, ?, ?, ?);';

  const params = req.body;
  const orders_params = [params.user.name, params.cart];
  const users_params = [params.user.name, params.user.password, params.user.email];
  const adresses_params = [params.user.name, params.address.line1, params.address.line2, params.address.city, params.address.state, params.address.zipcode, params.address.phone];
  const cards_params = [params.user.name, params.card.number, params.card.exp, params.card.cvv, params.card.zipcode];


  db.query(orders, orders_params, (err, results) => {
    if(err) {
      res.status(501).send();
    } else {
      res.status(201).send();
    }
  })

  db.query(users, users_params, (err, results) => {
    if(err) {
      res.status(501).send();
    } else {
      res.status(201).send();
    }
  })

  db.query(adresses, adresses_params, (err, results) => {
    if(err) {
      res.status(501).send();
    } else {
      res.status(201).send();
    }
  })

  db.query(cards, cards_params, (err, results) => {
    if(err) {
      res.status(501).send();
    } else {
      res.status(201).send();
    }
  })
}


module.exports = {
  getItems,
  checkout
};