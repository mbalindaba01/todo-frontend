import React, { useState } from "react"

const Todo = ({ title, completed, removeTodoItemProp }) => {
    const [isEditing, setIsEditing] = useState(false)
    const [value, setValue] = useState(title)
    const [tempValue, setTempValue] = useState(title)
    const [completedState, setCompleted] = useState(completed)

    const handleInputOnChange = (e) => {
        setTempValue(e.target.value)
    }
    const handleDivDoubleClick = () => {
        setIsEditing(true)
    }
    const handleInputKeyDown = (e) => {
        const key = e.keyCode
        if(key === 13) {
            setValue(tempValue)
            setIsEditing(false)
        }else if(key === 27){
            setTempValue(value)
            setIsEditing(false)
        }
    }

    const handleCheckButtonClick = () => {
        setCompleted((oldCompleted) => !oldCompleted)
    }
    return (
        isEditing ?
        <div className="row" onDoubleClick={handleDivDoubleClick}>
            <div className="column seven wide">
                <div className="ui input fluid">
                    <input 
                        onChange={handleInputOnChange}
                        onKeyDown={handleInputKeyDown}
                        autoFocus={true}
                        value={tempValue}
                    />
                </div>
            </div>
        </div> :
        <div className="row">
            <div className="column five wide" onDoubleClick={handleDivDoubleClick}>
                <h2 className={"ui header" +(completedState ? " green": "")}>{value}</h2>
            </div>
            <div className="column one wide">
                <button 
                    onClick={handleCheckButtonClick}
                    className={"ui button circular icon" + (completedState ? " green": " blue")}>
                    <i className="check icon white"></i></button>
            </div>
            <div className="column one wide">
                <button 
                    onClick={removeTodoItemProp}
                    className="ui button circular icon red"
                >
                <i className="remove icon white"></i></button>
            </div>
        </div>
    )
}

export default Todo