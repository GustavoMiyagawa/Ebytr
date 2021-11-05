export const getList = async () => {
  const response = await fetch('http://localhost:3001');
  const json = await response.json();
  const result = json
  return result;
};

export const AddTaskAPI = async (task) => {
  await fetch('http://localhost:3001', {
    body: JSON.stringify(task),
    headers: { 'Content-Type': 'application/json'},
    method: 'POST'
  });
}
