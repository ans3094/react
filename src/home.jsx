import React, { useEffect, useState } from 'react';

const Home = ({todo, setTodo}) => {
    const [inputText,setInputText] = useState(null);

    const handleChange = event =>{
        setInputText(event.target.value)
    }

    //const 함수 = useCallback(()=>{
         //..
    //},[a,b])
    // a,b = 함수 내에서 쓰이는 변수나 함수
    // 동작 원리: a나 b에 변경이 생기면 해당 함수가 재생성됨
    // 기능 : 성능 향상
    
    const button = () => {
        if(inputText) setTodo([...todo, inputText])    
    }
    
    return (
        <div>
            <input type="text" onChange={handleChange}/>
            <button onClick={button}>저장하기</button>
        </div>
    );
};

export default Home;