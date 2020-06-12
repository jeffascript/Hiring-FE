import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Card } from 'antd';
import Where from "../../assets/icons/Where.png"
import Duedate from "../../assets/icons/Duedate.png";

export default function DisplayCard(props) {

    const state = useSelector(state => state)

    //const [stateBy,setState]=useState(false);

    //console.log(state.loggedInUser.userInfo, "statekkk")
    const { selectedTask } = props.task;
    const getData = (id, input) => {
        let inputValue = ""
        console.log(id, "id")
        if (input === "title") {
            inputValue = ".taskTitle"
        }
        // else if(input==="city")
        // {
        //     inputValue = ".city"
        // }
        console.log(inputValue, "va")
        var arr = selectedTask
        console.log(arr, "arr")
        if (arr !== undefined) {
            let task = [];
            task = arr.find(a => a._id === id);
            console.log(task, "task")
            if (task !== undefined)
                return task !== undefined && task + inputValue !== undefined
                    ? task + inputValue
                    : "";
        }
    };



    console.log(props, "prop")

    //console.log(selectedTask, "sele")
    return (
        <>
            {state.loggedInUser.userInfo &&
                <>
                    <label className="lblDoing">Doing</label>
                    <div className="row">
                        {state.loggedInUser.userInfo.selectedTasks.filter((userTask, index) => (
                            userTask.isTaskCompleted === false)).map((t, index) => (
                                selectedTask && selectedTask.filter((task, id) => (
                                    task._id === t.taskId)).map((t, i) => (
                                        <div className="col-md-4 col-sm-1" key={index}>
                                            <div className={`divCard`} key={i}>
                                                <Card className="status-true" title={t.taskTitle} style={{ width: 259 }}>
                                                    {t.techStack && t.techStack.length !== 0 ?
                                                        <p className="displayLang">
                                                            {t.techStack.map((tech, index) => (
                                                                <button className="btnLanguage" key={index}> {tech}
                                                                </button>
                                                            ))}
                                                        </p>
                                                        : <p className="displayLang"><button className="btnLanguage">Open for all stacks</button></p>
                                                    }
                                                    <p className="displayLang">
                                                        <div style={{ display: "inline-flex" }} >
                                                            <img id="imgLocation" src={Where} alt="location" />
                                                            <span className="type">{t.city}</span>
                                                        </div>
                                                        <div>
                                                            <img id="imgLocation" src={Duedate} alt="Due Date" />
                                                            <span style={{ paddingLeft: "0.5em" }} >{new Date(t.createdAt).toString().substring(0, 10)}</span>
                                                        </div>

                                                    </p>
                                                    <hr></hr>
                                                    <p className="displayStatus">DOING</p>
                                                </Card>
                                            </div>
                                        </div>
                                    ))
                            ))}
                    </div>
                    <label className="lblDone">Done</label>
                    <div className="row">
                        {state.loggedInUser.userInfo.selectedTasks.filter((userTask, index) => (
                            userTask.isTaskCompleted === true)).map((t, index) => (
                                selectedTask && selectedTask.filter((task, id) => (
                                    task._id === t.taskId)).map((t, i) => (
                                        <div className="col-md-4 col-sm-1" key={i}>
                                            <div className={'divCard status-true'} key={index}>
                                                <Card className="status-false" title={t.taskTitle} style={{ width: 259 }}>
                                                    {t.techStack && t.techStack.length !== 0 ?
                                                        <p className="displayLang">
                                                            {t.techStack.map((tech, index) => (
                                                                <button className="btnLanguage" key={index}> {tech}
                                                                </button>
                                                            ))}
                                                        </p>
                                                        : <p className="displayLang"><button className="btnLanguage">Open for all stacks</button></p>
                                                    }
                                                    <p className="displayLang">
                                                    <div style={{ display: "inline-flex" }} >
                                                            <img id="imgLocation" src={Where} alt="location" />
                                                            <span className="type">{t.city}</span>
                                                        </div>
                                                        <div>
                                                            <img id="imgLocation" src={Duedate} alt="Due Date" />
                                                            <span style={{ paddingLeft: "0.5em" }} >{new Date(t.createdAt).toString().substring(0, 10)}</span>
                                                        </div>
                                                    </p>
                                                    <hr></hr>
                                                    <p className="displayStatus" style={{ color: "lightgray" }}>DONE</p>
                                                </Card>
                                            </div>
                                        </div>
                                    ))
                            ))}
                    </div>
                </>
            }
        </>
    )
}