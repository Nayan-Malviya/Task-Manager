import React from "react";
import { useState } from "react";

const AddTodo = ({ AddTodo }) => {
    const [title, settitle] = useState("");
    const [desc, setdesc] = useState("");
    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description is required to fill to Add a Todo");
        }
        else {
            AddTodo(title, desc);
            settitle("");
            setdesc("");
        }
    };
    return (
        <div className="container " style={{maxWidth:"900px"}} >
            <br />
            <h5 >Add Tasks Here:-</h5>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title of Task</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => settitle(e.target.value)}
                        className="form-control"
                        id="title"
                        placeholder="Enter Title of Task here"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                        Description of Task
                    </label>
                    <textarea className="form-control" value={desc} onChange={(e) => setdesc(e.target.value)} id="description"  placeholder="Set description here"></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-sm">
                    Add
                </button>
            </form>
        </div>
    );
};

export default AddTodo;
