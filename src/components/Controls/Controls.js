import React from 'react';
import { btnOrange } from '../style/Style';
let cont = ["/", "*", "-", "+"]
export const Controls = (props) => {
    return (
        <div>
            {cont.map(el => {
                return (
                    <div>
                        <input onClick={() => props.setNumber(el)} className={`num${el}`} style={btnOrange} type="button" name={`num${el}`} value={el} />

                    </div>
                )
            }
            )
            }
            <input onClick={() => props.setTotal()} className={`numE`} style={btnOrange} type="button" name={`numE`} value={"="} />

        </div>
    )
}