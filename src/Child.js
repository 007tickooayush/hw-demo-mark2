// import logo from './logo.svg';


function TodoList(props) {

    // call the function in parent component
    function removeItem(index) {
        // pass the index to the parent component function
        props.removeItem(index);

    }

    const tasks = props.tasks.map((t, index) => {

        return (<li key={index}>
            {t}
            <button
                onClick={() => removeItem(index)} >delete task</button>
        </li>);
    });

    // return the list of tasks (todos)
    return (
        <div>
            <ul>{tasks}</ul>
        </div>
    );
}

export default TodoList;
