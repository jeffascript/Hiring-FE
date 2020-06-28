export const getUserDataByToken = (token) => {
  return async (dispatch, getState) => {
    const apiResp = await fetch(
      process.env.REACT_APP_URL + "/api/auth/refreshtoken",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );
    if (apiResp.ok) {
      const respJson = await apiResp.json();
      dispatch({
        type: "LOG_IN",
        payload: respJson,
      });
    } else {
      console.log(apiResp);
      // setError("Some problem with your token!")
    }
  };
};

export const getAllTasks = (token) => {
  return async (dispatch, getState) => {
    const apiResp = await fetch(process.env.REACT_APP_URL + "/api/task/admin", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    if (apiResp.ok) {
      const respJson = await apiResp.json();
      dispatch({
        type: "GET_All_TASKS",
        payload: respJson.allTasks,
      });
    } else {
      console.log(apiResp);
    }
  };
};

export const approveSelectedTasks = (token, taskId) => {
  return async (dispatch, getState) => {
    const apiResp = await fetch(
      process.env.REACT_APP_URL + "/api/task/adminApproval/" + taskId,
      {
        method: "PUT",
        //body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );
    if (apiResp.ok) {
      const respJson = await apiResp.json();
      console.log(respJson, "resp");
      dispatch({
        type: "APPROVE_TASK",
        payload: respJson.selectedTask,
      });
      dispatch({
        type: "MESSAGE",
        payload: "Task has been approved",
      });
    } else {
      console.log(apiResp);
      dispatch({
        type: "MESSAGE",
        payload: "no msg",
      });
    }
  };
};

export const deleteSelectedTasks = (token, taskId) => {
  console.log(token, taskId);
  return async (dispatch, getState) => {
    const apiResp = await fetch(
      process.env.REACT_APP_URL + "/api/task/admin/task/" + taskId,
      {
        method: "DELETE",
        //body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );
    if (apiResp.ok) {
      const respJson = await apiResp.json();
      console.log(respJson, "resp");
      dispatch({
        type: "DELETE_TASK",
        payload: respJson._id,
      });
      dispatch({
        type: "MESSAGE",
        payload: "Task has been deleted",
      });
    } else {
      console.log(apiResp);
      dispatch({
        type: "MESSAGE",
        payload: "false",
      });
    }
  };
};
