import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { addReminder, deleteReminder } from "../Actions";
import moment from "moment";

class App extends Component{
   constructor(props){
       super(props);
       this.state = {
           text: " ",
           dueDate: " "
       }
   }

   addReminder(){
       console.log("this.state.duedate", this.state.dueDate);
       this.props.addReminder(this.state.text, this.state.dueDate);
   }

   deleteReminder(id){
     this.props.deleteReminder(id);
   }

  renderReminder(){
      const { reminders } = this.props;
      return (
          <ul className="list-group col-sm-4">
              {
                  reminders.map(reminder => {
                      return (
                      <li key={reminder.id} className="list-group-item">
                          <div className="list-item">
                              <div>{reminder.text}</div>
                              <div><em>{moment(new Date(reminder.dueDate)).fromNow()}</em></div>
                              </div>
                          <div className="list-item delete-button" 
                          onClick={() => this.deleteReminder(reminder.id)}>
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
                    <input
                    className="form-control"
                    type="datetime-local"
                    onChange={(Event) => this.setState({ dueDate: Event.target.value })}
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


export default connect(mapStateToProps, { addReminder, deleteReminder })(App);
