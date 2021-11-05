const listService = require('../service/listService');

const getList = async (_req, res) => {
  const list = await listService.getList();

  return res.status(200).json(list);
};

const create = async (req, res) => {
  const task  = req.body;

  const createTask = await listService.create(task);

  return res.status(201).json(createTask);
};

const removeTask = async (req, res) => {
  const idTask  = req.body;
  
  const createTask = await listService.removeTask(idTask);

  return res.status(204).json(createTask);
};

module.exports = {
  getList,
  create,
  removeTask,
};
