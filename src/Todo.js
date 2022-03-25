import React,{Component, component} from "react"

class Todo extends Component{
    render(){
        //데이터 초기화\
        const todo = {
            name: 'cleaning',
            done: false,
            description:'cleaning my room on wekends'
        }
        //HTML 템플릿 =>JSX 문법
        return(
            <>
                <h3>name:{todo.name}</h3>
                <h4>done:{todo.done ? "finished":"ongoing"}</h4>
                <p>description: {todo.description}</p>
            </>
        )
    }
}
export default Todo;