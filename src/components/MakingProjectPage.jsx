import { useState } from "react"

export default function({handleCancelBtn, handleSaveBtn}){



    


    return <>

        <button onClick={handleCancelBtn}>Cancel</button>
        <button onClick={handleSaveBtn}>Save</button>

        <h2>TTITLE</h2>
        <input name="title"/>

        <h2>DESCRIPTION</h2>
        <input name="descrption"/>

        <h2>DUE DATE</h2>
        <input type={"date"} name="dueDate"/>
    </>
}