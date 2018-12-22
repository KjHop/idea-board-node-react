import * as React from 'react';
import "../Styles/Board.css";
import Note from "./Note";



class Board extends React.Component{
    constructor(){
        super();
        this.addNote = this.addNote.bind(this);
        this.deleteNote = this.deleteNote.bind(this);
        this.buildList = this.buildList.bind(this);
        this.state = {
            numberOfNotes:0,
            listOfNotes: []
        }
    }

    addNote(){
        this.buildList();
        this.setState({numberOfNotes:this.state.numberOfNotes+1});
    }

    buildList(){
        let newList = []
        for(let i=0; i<=this.state.numberOfNotes; i++){
            let button = <button onClick={(e)=>this.deleteNote(e, i)}>Delete</button>;
            newList.push(<Note key={i} id={i} button={button}/>);
        }
        console.log(this.state);
        this.setState({listOfNotes:newList});
    }

    deleteNote(e, i){
        e.preventDefault();
        console.log(this.props);
        let newList = this.state.listOfNotes;
        newList.splice(i,1);
        console.log(this.state);
        this.setState({
            numberOfNotes:this.state.numberOfNotes-1,
            listOfNotes:newList
        });
    }

    render(){
        return(
            <div>
                <button onClick={this.addNote}>Add Idea</button>
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