import React, { useState, useEffect } from 'react';
import { getUserDataByToken } from "../../actions/index.js";
import UpdateUserForm from "../form/UpdateUserForm"
import { useSelector, useDispatch } from 'react-redux'
import DisplayCard from '../../components/CardComponent/DisplayCard';

const Welcome = () => {
    const [currentUser, setCurrentUser] = useState()
    const state = useSelector(state => state)

    const dispatch = useDispatch();

    useEffect(() => {
        const token = localStorage.token
        console.log(token, "toke")
        dispatch(getUserDataByToken(token));

        const getCurrentUser = async () => {
            let request = await fetch(`${process.env.REACT_APP_URL}/api/user`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + token
                },
            });
            if (request.ok) {
                let userInfo = await request.json()
                setCurrentUser(userInfo)
            }

        }
        getCurrentUser()
    }, []);
    return (
        <>
            {state.loggedInUser &&
                <div>
                    {currentUser && <UpdateUserForm initialValue={currentUser} />}
                    <DisplayCard />

                </div>
            }
        </>
    )
}

export default Welcome;