import * as React from 'react';
import "../Styles/Board.css";
import Note from "./Note";



class Board extends React.Component{
    constructor(){
        super();
        this.addNote = this.addNote.bind(this);
        this.deleteNote = this.deleteNote.bind(this);
        this.refresh = this.refresh.bind(this);
        this.state = {
            numberOfNotes:0,
            listOfNotes: []
        }
    }

    refresh(){
        console.log(this.state);
    }

    addNote(){
        let newList = this.state.listOfNotes;
        let i = this.state.numberOfNotes;
        let button = <button onClick={(e)=>this.deleteNote(e, i)}>Delete</button>;
        newList.push(<Note key={i} id={i} button={button}/>);
        this.setState({
            numberOfNotes:this.state.numberOfNotes+1,
            listOfNotes: newList
        });
    }

    deleteNote(e, i){
        e.preventDefault();
        console.log(e.parentElement);
        let newList = this.state.listOfNotes;
        newList.splice(i,1);
        this.setState({
            numberOfNotes:this.state.numberOfNotes-1,
            listOfNotes:newList
        });
    }

    render(){
        return(
            <div>
                <button onClick={this.addNote}>Add Idea</button>
                <button onClick={this.refresh}>Refresh</button>
                <span>Sort ideas by:</span>
                <select>
                    <option value="date">Date created</option>
                    <option value="alphabetic">A-Z</option>
                </select>
                <div className='Board'>
                    {this.state.listOfNotes}
                </div>
            </div>
        );
    }
}
export default Board;