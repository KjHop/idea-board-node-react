import * as React from 'react';
import "../Styles/Note.css";

class Note extends React.Component{
    constructor(){
        super();
        this.noteUpdate = this.noteUpdate.bind(this);
        this.state = {
            title: "",
            description: ""
        }
    }

    noteUpdate(){
        console.log(this.state);
    }

    changeTitle(e){
        this.setState({title:e.target.value})
    }

    changeDescription(e){
        this.setState({description:e.target.value})
    }

    render(){
        return(
            <div className="Note">
                <form onBlur={this.noteUpdate}>
                    <input type="text" onChange={e=>this.changeTitle(e)}/>
                    <textarea rows="7" onChange={e=>this.changeDescription(e)}></textarea>
                </form>
            </div>
        );
    }
}

export default Note;