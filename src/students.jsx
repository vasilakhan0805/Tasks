import React, {Component} from "react";

 
let users = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Lucy'},
    {id: 3, name: 'Henry'},
    {id: 4, name: 'Peter'},
]
class Students extends Component{
    constructor(props){
        super(props);
        this.state = {
            students: users,
            name: '',
        }
    }

    render(){
    const deleteUser = (id) => {
    const res = this.state.students.filter(student => student.id !== id)
    this.setState({students: res})
    }
    
    const onChange = (e) => {
        const {value, name} = e.target;
        this.setState({[name]: value})
    }

    const addUser = ()=> {
        const newStudent = {id:this.state.students.length + 1, name: this.state.name }
        this.setState({students: [...this.state.students, newStudent], name: ''})
    }


        return (
            <div>
                <h1>Students</h1>
            {
                this.state.students.map((student)  => (
                    <div key={student.id}>
                        {student.id} - {student.name} - <button onClick={() => deleteUser(student.id)}>delete</button>
                    </div> 
                ))
            }

            <br/>
            <div>
            <input placeholder="Enter your name" value={this.state.name} type='text' onChange={onChange} name='name'/>
            <button onClick={addUser}>Add User</button>
            </div>
            </div>
        )
    }
}


export default Students