const listModel = require('../model/listModel');

const getList = async () => {
  const list = await listModel.getList();

  return list;
};

module.exports = {
  getList,
};
