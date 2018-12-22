import * as React from 'react';
import "../Styles/Note.css";

class Note extends React.Component{
    constructor(){
        super();
        this.updateNote = this.updateNote.bind(this);
        this.deleteNote = this.deleteNote.bind(this);
        this.state = {
            title: "",
            description: "",
            titleBorder: "0.5px dashed gray",
            descriptionBorder: "0.5px dashed gray"
        }
    }

    updateNote(){
        //Send note to database
    }

    deleteNote(e){
        e.preventDefault();
        console.log(this.props)
    }

    changeTitle(e){
        if(e.target.value===""){
            this.setState({titleBorder:'0.5px dashed gray'});
        }else{
            this.setState({titleBorder: 'none'});
        }
        this.setState({title:e.target.value});
    }

    changeDescription(e){
        if(e.target.value===""){
            this.setState({descriptionBorder:'0.5px dashed gray'});
        }else{
            this.setState({descriptionBorder: 'none'});
        }
        this.setState({description:e.target.value})
    }

    render(){
        return(
            <div className="Note">
                <form onBlur={this.updateNote}>
                    <input type="text" onChange={e=>this.changeTitle(e)} style={{border:this.state.titleBorder}}/>
                    <textarea rows="7" onChange={e=>this.changeDescription(e)} style={{border:this.state.descriptionBorder}}></textarea>
                    {this.props.button}
                    {this.props.id}
                </form>
            </div>
        );
    }
}

export default Note;