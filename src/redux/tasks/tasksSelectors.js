export const getActiveTodayTasks = (state) =>
  state.tasks.data.filter((task) => {
    return (
      !task.completed &&
      new Date().getTime() < new Date(task.taskDate).getTime() &&
      new Date().toLocaleDateString() ===
        new Date(task.taskDate).toLocaleDateString()
    );
  });

export const getAllCompletedTasks = (state) => {
  return state.tasks.data.filter((task) => {
    return task.completed;
  });
};

export const getUnusedTasks = (state) => {
  return state.tasks.data.filter(({ completed, taskDate }) => {
    return !completed && new Date().getTime() > new Date(taskDate).getTime();
  });
};

export const getActiveTomorrowTasks = (state) =>
  state.tasks.data.filter(({ completed, taskDate }) => {
    return (
      !completed &&
      new Date().getTime() < new Date(taskDate).getTime() &&
      new Date().getDate() + 1 === new Date(taskDate).getDate()
    );
  });

export const getChallengeTasks = (state) =>
  state.tasks.data.filter(
    ({ isChallenge, completed, taskDate }) =>
      isChallenge &&
      !completed &&
      new Date().getTime() <= new Date(taskDate).getTime(),
  );
