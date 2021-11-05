const getConnection = require('./connection');

const getList = async () => {
  const db = await getConnection();
  const result = await db.collection('list').find({}).toArray();
  return result;
};

const create = async (task) => {
  const db = await getConnection();
  await db.collection('list').insertOne(task);
  return task;
};

module.exports = {
  getList,
  create,
};
