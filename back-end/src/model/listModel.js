const getConnection = require('./connection');

const getList = async () => {
  const db = await getConnection();
  const result = await db.collection('list').find({}).toArray();
  return result;
};

module.exports = {
  getList,
};
