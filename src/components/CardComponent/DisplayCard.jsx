import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { approveSelectedTasks, deleteSelectedTasks } from "../../actions/index"
import { Button, Alert } from 'antd';
import CardList from "../CardComponent/CardList";

export default function DisplayCard(props) {
    //console.log(React.version)
    const state = useSelector(state => state)
    const { userInfo } = state.loggedInUser;
    const [cardId, setCardId] = useState([]);

    const setCardsId = useCallback((taskId) => {
        if (!cardId.includes(taskId)) {
            setCardId([...cardId, taskId]);
        }
        else {
            const filteredState = cardId.filter(a => a !== taskId)
            setCardId(filteredState)
        }
    }, [cardId])
    const dispatch = useDispatch();

    const approveTasks = () => {
        const token = localStorage.token
        for (let i = 0; i < cardId.length; i++) {
            if (cardId !== undefined)
                dispatch(approveSelectedTasks(token, cardId[i]))
        }
    }

    const deleteTasks = () => {
        const token = localStorage.token
        for (let i = 0; i < cardId.length; i++) {
            if (cardId !== undefined)
                dispatch(deleteSelectedTasks(token, cardId[i]))
        }
    }

    const onClose = () => {
        dispatch({
            type: "MESSAGE",
            payload: null
        })
    }

    const tasksInDoing = userInfo?.selectedTasks.filter(t => !t.isTaskCompleted)
    const tasksInDone = userInfo?.selectedTasks.filter(t => t.isTaskCompleted)
    return (
        <>
            {userInfo && userInfo.role === "admin" ? state.tasks && state.tasks.length > 0 &&
                <>
                    <div style={{ display: "flex", justifyContent: "center", padding: "7px" }}>
                        <Button type="primary" danger style={{ marginRight: "5px", display: "flex" }} onClick={() => approveTasks()} >Approve Tasks</Button>
                        <Button type="primary" danger style={{ marginRight: "5px", display: "flex" }} onClick={() => deleteTasks()} >Delete Tasks</Button>
                        <Button type="primary" danger style={{ marginRight: "5px", display: "flex" }} >Add Task</Button>
                    </div>
                    <div>
                        {state.message !== null && <Alert message={state.message} type="success" closable
                        onClose={onClose}  />}
                    </div>
                    {/* {state.message === true && state.alertMsg==="Approve" ? 
                    <Alert message="Tasks approved." type="success"  closable
                        onClose={onClose} /> : state.alertMsg==="Delete" ?
                        <Alert message="Tasks deleted." type="success"  closable
                        onClose={onClose} /> : null } */}

                    <div className="row"  >
                        {state.tasks.map((task, index) => (
                            task.approvedByAdmin === true ?
                                <CardList titleColor="status-admin-approve" setId={setCardsId} tasks={task} key={index} taskId={task._id} status="" />
                                :
                                task.approvedByAdmin === false ?
                                    <CardList titleColor="status-admin-notapproved" setId={setCardsId} tasks={task} key={index} taskId={task._id} status="" /> : null
                        ))}
                    </div>
                </>
                :
                <>
                    {userInfo && userInfo.selectedTasks.length > 0 ?
                        <>
                            {userInfo && tasksInDoing.length > 0 &&
                                <>
                                    <label className="lblDoing">Doing</label>
                                    <div className="row"  >
                                        {tasksInDoing.map((task, id) => (
                                            <CardList titleColor="status-true" tasks={task.taskId} status="Doing" key={id} />
                                        ))
                                        }
                                    </div>
                                </>
                            }
                            {userInfo && tasksInDone.length > 0 &&
                                <>
                                    <label className="lblDoing">Done</label>
                                    <div className="row"  >
                                        {tasksInDone.map((task, id) => (
                                            <CardList titleColor="status-false" tasks={task.taskId} status="Done" key={id} />
                                        ))
                                        }
                                    </div>
                                </>
                            }
                        </>
                        :
                        <div className="alert alert-danger" role="alert"
                            style={{ fontWeight: "bolder", fontSize: "30px", textAlign: "center" }} >
                            You do not have any tasks.
                        </div>
                    }
                </>
            }
        </>
    )
}
