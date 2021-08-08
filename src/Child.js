// import logo from './logo.svg';

function Child(props) {
    return (
        <div>
            <h1>{props.value}</h1>
            <h1>{props.text}</h1>
        </div>
    );
}

export default Child;
