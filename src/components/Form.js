import React from "react"


class Form extends React.Component{
    render(){
        return (
        <form className="ui form">
            <div className="ui grid">
                <div className="row">
                    <div className="column five wide">
                        <input type="text"/>
                    </div>
                    <div className="column one wide">
                        <button type="submit">+</button>
                    </div>
                </div>
            </div>
        </form>
        )
    }
}

export default Form