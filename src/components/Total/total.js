import React from 'react';
import { calcNum } from '../style/Style';
export const Total = (props) => {
    return (
        <div>
            <input style={calcNum} type="button" id="res" name="one" value={"    " + props.total} />

        </div>)
}