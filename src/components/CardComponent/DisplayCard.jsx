import React from 'react';
import { useSelector } from 'react-redux'
import CardList from "../CardComponent/CardList";

export default function DisplayCard(props) {

    const state = useSelector(state => state)
    const { userInfo } = state.loggedInUser;

    return (
        <>
            <label className="lblDoing">Doing</label>
            <div className="row"  >
                {userInfo && userInfo.selectedTasks.filter(t => !t.isTaskCompleted).map((task, id) => (
                    <CardList titleColor="status-true" tasks={task.taskId} status="Doing" key={id} />
                ))
                }
            </div>
            <label className="lblDoing">Done</label>
            <div className="row"  >
                {userInfo && userInfo.selectedTasks.filter(t => t.isTaskCompleted).map((task, id) => (
                    <CardList titleColor="status-false" tasks={task.taskId} status="Done" key={id} />
                ))
                }
            </div>
        </>
    )
}
