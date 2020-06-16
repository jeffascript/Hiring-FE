import React, { useState, useEffect } from 'react';
import { getUserDataByToken } from "../../actions/index.js";
import UpdateUserForm from "../form/UpdateUserForm"
import { Button } from 'reactstrap';

import { useSelector, useDispatch } from 'react-redux'
import DisplayCard from '../../components/CardComponent/DisplayCard';

const Welcome = () => {
    const [currentUser, setCurrentUser] = useState()
    const [openEditForm, setOpenEditForm] = useState(false)

    const state = useSelector(state => state)
    const dispatch = useDispatch();
    const changeOpenEditForm = () => setOpenEditForm(!openEditForm)
    const updateCurrentUser = (user) => setCurrentUser(user)

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
            <Button color="primary" onClick={changeOpenEditForm} style={{height:'30px'}} >{openEditForm ? 'close' : 'edit'} </Button>
            {state.loggedInUser &&
                <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
                    {currentUser && openEditForm && <UpdateUserForm initialValue={currentUser} close={changeOpenEditForm} updateUser={updateCurrentUser} />}
                   {!openEditForm && <DisplayCard />}

                </div>
            }
        </>
    )
}

export default Welcome;