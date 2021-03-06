const { ObjectID } = require('bson');
const getConnection = require('./connection');

const getList = async () => {
  const db = await getConnection();
  const result = await db.collection('list').find({}).toArray();
  return result;
};

const create = async (task) => {
  const db = await getConnection();
  await db.collection('list').insertOne({task});
  return {task: task};
};

const removeTask = async (idTask) => {
  const db = await getConnection();
  await db.collection('list').deleteOne({ _id: ObjectID(idTask)});
};

module.exports = {
  getList,
  create,
  removeTask
};
