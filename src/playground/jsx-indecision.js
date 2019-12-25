console.log("app.js is running:");

// JSX - Javascript XML
const app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer!",
    options: []
}

const handleSubmit = (event) => {
    event.preventDefault();
    const option = event.target.elements.option.value.trim();
    if(option) {
        app.options.push(option);
        console.log(app.options);
        event.target.elements.option.value = '';
        render();
    }
}

const handleRemoveAll = () => {
    app.options = [];
    render();
};

const handleMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const randomOption = app.options[randomNum];
    alert(randomOption);
};



const appRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{(app.options && app.options.length) ? "Here are your options:" : "No options"}</p>
            <button disabled={app.options.length === 0} onClick={handleMakeDecision}>What Should I Do?</button>
            <button onClick = {handleRemoveAll}>Remove Options</button>
            <ol>
                {app.options.map(option => <li key = {option}>Option: {option}</li>)}
            </ol>
            <form onSubmit={handleSubmit}>
                <input type = 'text'name='option'/>
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
}

render();