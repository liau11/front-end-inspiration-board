import React from 'react';
import "./CardErrorDisplay.css"

export default function CardErrorDisplay (props) {
    return (
        <div className="error">
            <h3> Uh oh! Error!</h3>
            <p> {props.errorCallBack.details} u_u Message Too Long.  </p>
        </div>
    )
}