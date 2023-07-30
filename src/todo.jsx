import React, { useEffect, useState } from 'react';
import Home from './home';

const Todo = () => {
    const [todo, setTodo] = useState([]); // 변수 선언 기본 형식
 // const [변수명, set변수명] = useState(초기값)
    const [open, setOpen] = useState(false);
    const handleClick = () =>{
        setOpen((prev)=> !prev);
    };

    useEffect(()=>{

    console.log('todo',todo);
    },[todo])

    // useEffect(()=>{
    //     //array 선언한 변수나 함수 변경될 경우, 수행하고 싶은 함수나 동작
    // },[변수, 함수])

    return (
        <div>
            <p>TODO LIST</p>
            <p>Today</p>
            <button onClick={handleClick}>+</button>
            <input type="checkbox" />
          {open &&  <Home todo={todo} setTodo={setTodo}/>}
        </div>
      
    );
};

export default Todo;