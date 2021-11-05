const listModel = require('../model/listModel');

const getList = async () => {
  const list = await listModel.getList();

  return list;
};

const create = async (task) => {
  const createTask = await listModel.create(task);

  return createTask;
};

module.exports = {
  getList,
  create,
};
