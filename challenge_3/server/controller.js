const getItems = () => {
  var data = ['apple','banana','orange','berry'];
    return new Promise((resolve, reject) => {
        resolve(data);
      });
}

const checkout = (req, res) => {

}


module.exports = {
  getItems,
  checkout
};