import React from "react";
class AddTodo extends React.Component {
    state = {
        name: "",
        completed: ""
    }

    add = (e) => {
        e.preventDefault()
        if (this.state.name === "") {
            alert("name is require")
            return
        }
        this.props.addTodoHandler(this.state)
        this.setState({ name: '', completed: false })
    }
    render() {
        return (
            <div className="ui main">
                <h2>Add Todo</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={this.state.name}
                            onChange={(e) => this.setState({ name: e.target.value })}
                        />
                    </div>
                    <button className="ui button blue">Add</button>
                </form>
            </div>
        )
    }
}
export default AddTodo
