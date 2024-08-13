import React from 'react';
import "./App.css";
import Output from "./components/Output";
import Input from './components/input';

const App = ()=>{
    const [todoListArr, setTodoList] = React.useState([
        {no:101, title:'운동하기', done:false},
        {no:102, title:'운동하기2', done:false},
        {no:103, title:'운동하기3', done:false}
    ]);
    const [noCnt, setNoCnt] = React.useState(104);

    function appendItem(title) {
        const newItem = {no:noCnt, title:title, done:false};
        setNoCnt(noCnt+1);
        setTodoList([...todoListArr, newItem]);
    }

    function deleteItem(no) {
        const updatedList = todoListArr.filter(item => item.no !== no);
        setTodoList(updatedList);
    }

    return (
        <div>
            <header className="jumbotron">
                <h1>Todo List</h1>
                <p>오늘 할 일을 입력 하세요</p>
            </header>
            <Input appendItem={appendItem} />
            <Output todoListArr={todoListArr} deleteItem={deleteItem} />
        </div>
    );
};

export default App;
