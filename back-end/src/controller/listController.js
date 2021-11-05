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

module.exports = {
  getList,
  create,
};
