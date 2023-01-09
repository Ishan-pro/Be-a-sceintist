import React, {useState} from 'react'

const parse = (Tasks:string | null):Array<string> => {
    if (Tasks) {
       const TaskList = Tasks.split("__---__")
       return TaskList
    }
    return []
}

export default function Home() {
    const Tasks = localStorage.getItem("todos")
    const TaskLis = parse(Tasks)
    const [TaskList, SetTaskList]= useState<Array<string>>(TaskLis)
    const [newtodo, Setnewtodo] = useState<string>('')

    const deleteTodo = (todo:string) => {
        SetTaskList(prev => prev.filter(obj => obj!=todo))
    }

    const addTodo = () => {
        let todos = localStorage.getItem('todos')
        if (todos) {
            todos = todos + "__---__" + newtodo
        } else {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
            todos = newtodo
        }
        localStorage.setItem('todos', todos)
        SetTaskList(prev => [...prev, newtodo])
        Setnewtodo("")
    }
  return (
    <div className="p-4">
        
    <div >
        <h1 className='text-xl'>Tasks</h1>
        <div style={{height:"50vh"}}>

        {
            TaskList.map((task, index) => {
                return (
                    <div key={index} className="bg-gray-300 p-2 mb-2 flex">
                        <span className='flex-1'>{task}
                        </span>
                        <button onClick={() => {deleteTodo(task)}}>X</button>
                    </div>
                )
            })
        }
        </div>
        <input className="w-50 border-black text-l shadow-lg p-2" 
        placeholder="New Task"
        value={newtodo}
        onChange={(e) => Setnewtodo(e.target.value)}
        />
        <button className="bg-blue-700 p-2 text-white" onClick={addTodo}>Create Todo</button>
    </div>


    </div>
  )
}
