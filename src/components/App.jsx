import React, { Component } from "react";
import "../App.css";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { addReminder } from "../Actions";

class App extends Component{
   constructor(props){
       super(props);
       this.state = {
           text: " "
       }
   }

   addReminder(){
       console.log("this", this);
       this.props.addReminder(this.state.text);
   }

    render(){
    return (
        <div className="App">
            <div className="title">
                Reminder
            </div>
            <div className="form-inline">
                <div className="form-group">
                    <input
                    placeholder="I have to..."
                    className="form-control"
                    onChange={(Event) => this.setState({ text: Event.target.value })}
                    />
                    <Button
                    className="btn"
                    variant="outline-success"
                    type="button"
                    onClick={() => this.addReminder()}
                    >
                        Add reminder
                    </Button>
                </div>
            </div>
        </div>
    )
}
}


export default connect(null, { addReminder })(App);