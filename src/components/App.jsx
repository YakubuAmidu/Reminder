import React from "react";

const App = () => {
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
                    <button
                    className="btn tbn-success"
                    type="button">
                        Add reminder
                    </button>
                </div>
            </div>
        </div>
    )
}

export default App;