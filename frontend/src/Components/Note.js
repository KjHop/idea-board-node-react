import * as React from 'react';
import "../Styles/Note.css";
import * as axios from 'axios';

class Note extends React.Component{
    constructor(){
        super();
        this.updateNote = this.updateNote.bind(this);
        this.state = {
            title: "",
            description: "",
            titleBorder: "0.5px dashed gray",
            descriptionBorder: "0.5px dashed gray"
        }
    }

    updateNote(id, title, description){
        const date = new Date();
        axios.put("http://192.168.8.100:8000", {
            "id":id,
            "title":title,
            "description": description,
            "date":  date.getFullYear()+"-"+date.getMonth()+"-"+date.getDate()
        })
        .then(response=>{
            console.log(response.data);
        })
        .catch(err=>{
            console.log(err);
        })
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
                <form onBlur={this.updateNote(this.props.id, this.state.title, this.state.description)}>
                    <input type="text" onChange={e=>this.changeTitle(e)} style={{border:this.state.titleBorder}} value={this.props.title}/>
                    <textarea rows="7" onChange={e=>this.changeDescription(e)} style={{border:this.state.descriptionBorder}} value={this.props.description}></textarea>
                    {this.props.button}
                </form>
            </div>
        );
    }
}

export default Note;