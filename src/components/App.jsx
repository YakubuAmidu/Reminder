import React, { Component } from "react";
import "../App.css";
import { Button } from "react-bootstrap";

class App extends Component{
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
                    />
                    <Button
                    className="btn"
                    variant="outline-success"
                    type="button">
                        Add reminder
                    </Button>
                </div>
            </div>
        </div>
    )
}
}

export default App;