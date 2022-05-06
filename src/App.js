import React from 'react'
import Form from './components/Form'

const appTitle = 'Todo App'
//Class component
class App extends React.Component{
    render(){
        return <div className='ui container center aligned'>
                <h1>{appTitle}</h1>
                <Form />
            </div>
    }
}

export default App