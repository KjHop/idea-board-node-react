import * as React from 'react';
import "../Styles/Board.css";
import Note from "./Note";



class Board extends React.Component{
    constructor(){
        super();
        this.addNote = this.addNote.bind(this);
        this.state = {
            numberOfNotes:0
        }
    }

    addNote(){
        this.setState({numberOfNotes:this.state.numberOfNotes+1});
    }

    render(){
        let listOfNotes = [];
        for(let i=0; i<=this.state.numberOfNotes; i++){
            listOfNotes.push(<Note key={i}/>);
        }
        console.log(listOfNotes);
        return(
            <div>
                <button onClick={this.addNote}>Add Idea</button>
                <span>Sort ideas by:</span>
                <select>
                    <option value="date">Date created</option>
                    <option value="alphabetic">A-Z</option>
                </select>
                <div className='Board'>
                    {listOfNotes}
                </div>
            </div>
        );
    }
}
export default Board;