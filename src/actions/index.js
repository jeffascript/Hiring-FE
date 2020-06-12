export const getUserDataByToken = (token) => {
    return async (dispatch, getState) => {
        const apiResp = await fetch( process.env.REACT_APP_URL+  "/api/auth/refreshtoken", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token
            },
        });
        if (apiResp.ok) {
            const respJson = await apiResp.json()
            dispatch({
                type: "LOG_IN",
                payload: respJson
              });
        }
        else {
            console.log(apiResp)
            // setError("Some problem with your token!")
        }      
    };
  }

  export const getTasksByToken = (token) => {
    return async (dispatch, getState) => {
        const apiResp = await fetch( process.env.REACT_APP_URL+  "/api/task/approvedtasks", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token
            },
        });
        if (apiResp.ok) {
            const respJson = await apiResp.json()
            dispatch({
                type: "GET_TASKS",
                payload: respJson
              });
        }
        else {
            console.log(apiResp)
            // setError("Some problem with your token!")
        }      
    };
  }

  