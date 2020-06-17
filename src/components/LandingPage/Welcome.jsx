import React, { useEffect } from 'react';
import { getUserDataByToken } from "../../actions/index.js";

import { useSelector, useDispatch } from 'react-redux'
import DisplayCard from '../../components/CardComponent/DisplayCard';

const Welcome = () => {

    const state = useSelector(state => state)
    const dispatch = useDispatch();

    useEffect(() => {
        const token = localStorage.token
        console.log(token, "toke")
        dispatch(getUserDataByToken(token));
    }, []);

    
    return (
        <>
            {state.loggedInUser &&
                <div>
                 <DisplayCard />

                </div>
            }
        </>
    )
}

export default Welcome;