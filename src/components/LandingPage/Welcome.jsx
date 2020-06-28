import React, { useEffect } from 'react';
import { getUserDataByToken, getAllTasks } from "../../actions/index.js";
import { useSelector, useDispatch } from 'react-redux'
import DisplayCard from '../../components/CardComponent/DisplayCard';
import Header from "../Header/Header.jsx";

const Welcome = () => {

    const state = useSelector(state => state)
    const dispatch = useDispatch();

    useEffect(() => {
        const token = localStorage.token
        dispatch(getUserDataByToken(token));
        dispatch(getAllTasks(token));
    }, []);

    return (
        <>
            {state.loggedInUser &&
                <>
                    <div style={{ overflowX: "hidden" }} >
                        <Header userName={state.loggedInUser.username} />
                        <DisplayCard />
                    </div>
                </>
            }
        </>
    )
}

export default Welcome;