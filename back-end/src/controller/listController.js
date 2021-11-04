const listService = require('../service/listService');

const getList = async (_req, res) => {
  const list = await listService.getList();

  return res.status(200).json(list);
};

module.exports = {
  getList,
};
