import './App.css';
import video from './israel.mp4';
import React, { useState, useEffect } from 'react';


export default function MainStore() {
    const [total, setTotal] = useState(0);
    const [calculatedTotal, setcalculatedTotal] = useState(0);


    function sumUnits(event) {
        const sumValue = event.target.value;
        if(sumValue<10){
            setcalculatedTotal(sumValue * 10 + " ₪");
        }
         if(sumValue>=10){
            setcalculatedTotal(sumValue * 8 + " ₪");
        }
         if(sumValue>=50){
            setcalculatedTotal(sumValue * 5 + " ₪");
        }
       

        setTotal(calculatedTotal);
    }




    return (
        <div>
            <video autoPlay loop muted className='background-video'>
                <source src={video} type="video/mp4" /></video>

            <div className='container'>
                <div className='main-container'>



                    <label>שם מלא</label>
                    <input type="text" class="name"></input>
                    <label>פלאפון</label>
                    <input type="number" class="phone" placeholder='051-2345678'></input>
                    <label>כמות יחידות</label>
                    <input type="number" class="sum" placeholder='מחיר -8₪, מעל 10 -5₪ ליחידה' onChange={sumUnits}></input>
                    <label>סה"כ לתשלום</label>
                    <input type="text" class="total" value={calculatedTotal} readOnly></input>
                    <label>כתובת למשלוח</label>
                    <input type="text" class="address"></input>















                 









                </div>
            </div>
        </div>
    );
}
