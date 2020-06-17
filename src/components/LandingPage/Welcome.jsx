import React, { useEffect, useState } from 'react';
import { getUserDataByToken } from "../../actions/index.js";
import { useSelector, useDispatch } from 'react-redux'
import DisplayCard from '../../components/CardComponent/DisplayCard';
import ProfileEditForm from '../Form/ProfileEditForm'
import Header from "../Header/Header.jsx";

const Welcome = () => {
    const [currentUser, setCurrentUser] = useState()
    const [openEditForm, setOpenEditForm] = useState(false)

    const state = useSelector(state => state)
    const dispatch = useDispatch();
    const changeOpenEditForm = () => setOpenEditForm(!openEditForm)
    const updateCurrentUser = (user) => setCurrentUser(user)

    useEffect(() => {
        const token = localStorage.token
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
                <>
                    <div style={{ overflowX: "hidden" }} >
                        <Header userName={state.loggedInUser.username} open={changeOpenEditForm} />
                        <DisplayCard />
                        {currentUser && <ProfileEditForm initialValue={currentUser} close={changeOpenEditForm} updateUser={updateCurrentUser} visible={openEditForm} />}
                    </div>
                </>
            }
        </>
    )
}

export default Welcome;