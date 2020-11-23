import React, { Component } from "react";
import "../App.css";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { addReminder } from "../Actions";
import { deleteReminder } from "../Actions";

class App extends Component{
   constructor(props){
       super(props);
       this.state = {
           text: " "
       }
   }

   addReminder(){
       this.props.addReminder(this.state.text);
   }

   deleteReminder(id){
     console.log("deleting in application", id);
     console.log("this.props", this.props);
   }

  renderReminder(){
      const { reminders } = this.props;
      return (
          <ul className="list-group col-sm-4">
              {
                  reminders.map(reminder => {
                      return (
                      <li key={reminder.id} className="list-group-item">
                          <div className="list-item">{reminder.text}</div>
                          <div className="list-item delete-button" onClick={() => this.deleteReminder(reminder.id)}>
                              &#x2715;
                          </div>
                      </li>
                      )
                  })
              }
          </ul>
      )
  }

    render(){
    return (
        <div className="App">
            <div className="title">
                Reminder
            </div>
            <div className="form-inline reminder-form">
                <div className="form-group">
                    <input
                    placeholder="I have to..."
                    className="form-control"
                    onChange={(Event) => this.setState({ text: Event.target.value })}
                    />
                    </div>
                    <Button
                    className="btn"
                    variant="outline-success"
                    type="button"
                    onClick={() => this.addReminder()}
                    >
                        Add reminder
                    </Button>
                </div>
                {this.renderReminder()}
                </div>
    )
}
}

function mapStateToProps(state){
    return {
        reminders: state
    }
}


export default connect(mapStateToProps, { addReminder })(App);
