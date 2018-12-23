import * as React from 'react';
import "../Styles/Board.css";
import Note from "./Note";
import * as axios from "axios";



class Board extends React.Component{
    constructor(){
        super();
        this.addNote = this.addNote.bind(this);
        this.deleteNote = this.deleteNote.bind(this);
        this.getNotes = this.getNotes.bind(this);
        this.state = {
            numberOfNotes:0,
            listOfNotes: []
        }
        this.getNotes();
    }

    addNote(title, description){
        const date = new Date();
        axios.post("http://192.168.8.100:8000/",{
            "title":title,
            "description": description,
            "date":  date.getFullYear()+"-"+date.getMonth()+"-"+date.getDate()
        })
        .then(response=>{
            console.log(response.data);
            this.getNotes();
        })
        .catch(err=>{
            console.log(err);
        })
    }

    getNotes(){
        axios.get("http://192.168.8.100:8000/")
        .then(response=>{
            let data = response.data;
            let board = [];
            data.forEach(record=>{
                let button = <button onClick={(e)=>this.deleteNote(e, record.id)}>Delete</button>;
                board.push(<Note key={record.id} id={record.id} button={button} title={record.title} description={record.description}/>);
            });
            this.setState({
                listOfNotes:board
            });
        })
        .catch(err=>{
            console.log(err);
        })
    }

    deleteNote(e, id){
        e.preventDefault();
        console.log(id);
        axios.delete("http://192.168.8.100:8000/",{
            data:{"id":id}
        })
        .then(response=>{
            console.log(response.data);
            this.getNotes();
        })
        .catch(err=>{
            console.log(err);
        })
    }

    render(){
        return(
            <div>
                <button onClick={()=>this.addNote("","")}>Add Idea</button>
                <button onClick={this.getNotes}>getNotes</button>
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