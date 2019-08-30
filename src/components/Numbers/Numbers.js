import React from 'react';
import { num, num0, btn, nums, cancel } from "../style/Style"
export const Numbers = (props) => {
    return (
        <div style={nums}>
            <input onClick={() => props.vide()} style={cancel} type="button" id="clear" name="clear" value="c" />

            <input onClick={() => props.delete()} style={btn} type="button" id="delete" name="delete" value="&#8592;" />


            {num.map(el => {
                return (
                    <div>
                        <input onClick={() => props.setNumber(el)} className={`num${el}`} style={btn} type="button" name={`num${el}`} value={el} />

                    </div>
                )
            }
            )
            }
            <input onClick={() => props.setNumber(0)} className={`num0`} style={num0} type="button" name={`num0`} value={0} />

        </div>
    )
}


