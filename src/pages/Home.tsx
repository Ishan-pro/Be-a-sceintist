import React, {useState} from 'react'

const parse = (Tasks:string | null):Array<string> => {
    if (Tasks) {
       const TaskList = Tasks.split("__---__")
       return TaskList
    }
    return []
}

export default function Home() {
    return <></>
  
}
