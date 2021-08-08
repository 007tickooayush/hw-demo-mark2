// import logo from './logo.svg';

function TodoList(props) {

    const tasks = props.tasks.map((t,index )=>{
        return <li key={index}>{t}</li>;
    });

    return (
        <div>
            <ul>{tasks}</ul>
        </div>
    );
}

export default TodoList;
