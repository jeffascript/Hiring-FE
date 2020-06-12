import React, { useState, useEffect } from 'react';
import { getUserDataByToken, getTasksByToken } from "../../actions/index.js";
import { useSelector, useDispatch } from 'react-redux'
import DisplayCard from '../../components/CardComponent/DisplayCard';
import Header from "../Header/Header.jsx";

const Welcome = () => {

    const state = useSelector(state => state)

    const dispatch = useDispatch();

    useEffect(() => {
        const token = localStorage.token
        console.log(token, "toke")
        dispatch(getUserDataByToken(token));
        dispatch(getTasksByToken(token));
    }, []);

    console.log(state, "state")
    return (
        <>
            {state.loggedInUser &&
                <>
                    <div style={{overflowX:"hidden"}} >
                        <Header userName={state.loggedInUser.username} />
                        <DisplayCard task={state.tasks} />
                    </div>
                </>
            }
        </>
    )
}

export default Welcome;