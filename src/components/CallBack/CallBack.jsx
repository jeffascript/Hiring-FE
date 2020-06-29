import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';

const CallBack = (props) => {
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const search = new URLSearchParams(props.location.search)
        console.log(props,"searchs")
        const token = search.get("token");
        if (token) {
            localStorage.setItem("token", token);
        }
        setTimeout(() => {
            setLoading(true)            
            props.history.push("/welcome");
        }, 2000)
        console.log(token, "serach");
    }, [props.location.search])
    return (
        <>
        { isLoading ?
        <>
            <div> Loading</div>
        </> 
        :
        <h5>jjjjj</h5>
        }        
        </>
    )
    
}

export default withRouter(CallBack);