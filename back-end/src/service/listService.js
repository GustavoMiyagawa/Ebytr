const listModel = require('../model/listModel');
const errorMessage = require('./errorMessages');

const getList = async () => {
  const list = await listModel.getList();

  return list;
};

const create = async (task) => {

  if (!task) return errorMessage.emptyTask;

  const createTask = await listModel.create(task);

  return createTask;
};

const removeTask = async (idTask) => {
  const createTask = await listModel.removeTask(idTask);
};

module.exports = {
  getList,
  create,
  removeTask,
};
