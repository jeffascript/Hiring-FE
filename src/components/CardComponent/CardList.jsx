import React, { useState, useEffect } from 'react';
import { Card, Checkbox } from 'antd';
import { useSelector } from 'react-redux'
import Where from "../../assets/icons/Where.png"
import Duedate from "../../assets/icons/Duedate.png";

export default function DisplayCard({ titleColor, tasks, status, id, taskId, setId }) {
    const { taskTitle, techStack, city, createdAt } = tasks
    const [state, setstate] = useState(false);
    const globalState = useSelector(state => state)
    const toggle = (e) => {
        setstate(e.target.value = !state)
        setId(taskId)
    }
   
    useEffect(() => {
        setstate(globalState.success)
    }, [globalState.success])
    return (
        <>
            {tasks &&
                <div className="col-md-4 col-sm-1" key={id} >
                    <div className={`divCard`} >
                        <Card className={titleColor} title={taskTitle} extra={<Checkbox
                            title="Click"
                            onChange={(e) => toggle(e)}
                            checked={state}
                        />}
                            style={{ width: 259 }} >
                            {techStack && techStack.length !== 0 ?
                                <p className="displayLang">
                                    {techStack.map((tech, index) => (
                                        <button className="btnLanguage" key={index}> {tech}
                                        </button>
                                    ))}
                                </p>
                                : <p className="displayLang"><button className="btnLanguage">Open for all stacks</button></p>
                            }
                            <div className="displayLang">
                                <div style={{ display: "flex", alignItems: "flex-end" }} >
                                    <img id="imgLocation" src={Where} alt="location" />
                                    <span className="type">{city}</span>
                                </div>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <img id="imgLocation" src={Duedate} alt="Due Date" />
                                    <span style={{ paddingLeft: "0.5em" }} >{new Date(createdAt).toString().substring(0, 10)}</span>
                                </div>
                            </div>
                            <hr></hr>
                            {status === "Done" ? <p className="displayStatus" style={{ color: "lightgray" }} >DONE</p> :
                                <p className="displayStatus">{status}</p>}
                        </Card>
                    </div>
                </div>
            }
        </>
    );
}