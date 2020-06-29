import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import Loader from 'react-loader-spinner'

const CallBack = (props) => {
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const search = new URLSearchParams(props.location.search)
        const token = search.get("token");
        if (token) {
            localStorage.setItem("token", token);
        }
        setTimeout(() => {
            setLoading(true)            
            props.history.push("/welcome");
        }, 2000)
    }, [props.location.search])
    return (
        <>
        { isLoading ?
        <>
            <div> Loading</div>
        </> 
        :
        <Loader style={{padding:"200px", display:"flex", 
        justifyContent:"center",alignItems:"center" }}
        type="Oval"
        color="#00BFFF"
        height={70}
        width={70}
        timeout={10000} //3 secs

     />
        }        
        </>
    )
    
}

export default withRouter(CallBack);