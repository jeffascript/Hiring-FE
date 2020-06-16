import React from 'react';
import { Card } from 'antd';
import Where from "../../assets/icons/Where.png"
import Duedate from "../../assets/icons/Duedate.png";

export default function DisplayCard({ titleColor, tasks, status, id }) {
    const { taskTitle, techStack, city,createdAt } = tasks
    return (
        <>
            {tasks &&
                <div className="col-md-4 col-sm-1" key={id} >
                    <div className={`divCard`} >
                        <Card className={titleColor} title={taskTitle} style={{ width: 259 }}>
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
                                <div style={{ display: "inline-flex" }} >
                                    <img id="imgLocation" src={Where} alt="location" />
                                    <span className="type">{city}</span>
                                </div>
                                <div>
                                    <img id="imgLocation" src={Duedate} alt="Due Date" />
                                    <span style={{ paddingLeft: "0.5em" }} >{new Date(createdAt).toString().substring(0, 10)}</span>
                                </div>
                            </div>
                            <hr></hr>
                            {status === "Done" ? <p className="displayStatus" style={{ color: "lightgray" }} >DONE</p> :
                                <p className="displayStatus">DOING</p>}
                        </Card>
                    </div>
                </div>
            }
        </>
    );
}