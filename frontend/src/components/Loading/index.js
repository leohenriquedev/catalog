import React from 'react';
import DualRing from 'react-spinners-css/dist/DualRing/index';
import './styles.css';

export default function Loading(props) {

    return(
        <div className={props.visible ? 'div-loading' : ''}>
            <div className={props.visible ? 'loading' : '' }>
                {props.visible ? <DualRing size={70} color={"#411d5a"} /> : null }
            </div>
        </div>
    );
}