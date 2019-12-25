class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            visible: false
        };
    }

    handleClick() {
        this.setState((prevState) => {
            return {
                visible: !prevState.visible
            };
        });
    }

    render() {

        return (
            <div>
                <h1>{this.props.title}</h1>
                {this.props.subtitle && <p>{this.props.subtitle}</p>}
                <button  onClick={this.handleClick}>{this.state.visible ? 'Hide Details' : 'Show Details'}</button>
                {this.state.visible && (<p>Hey, these are some details you can now see.</p>)}
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle title = "Visibilitiy Toggle" subtitle = "" />, document.getElementById('app'));
// console.log("app.js is running:");

// // JSX - Javascript XML
// const app = {
//     title: "Visibility Toggle",
//     subtitle: "",
//     visible: false
// }

// const handleClick = () => {
//     app.visible = !app.visible
//     render();
// }




// const appRoot = document.getElementById('app');

// const render = () => {
//     const template = (
//         <div>
//             <h1>{app.title}</h1>
//             {app.subtitle && <p>{app.subtitle}</p>}
//             <button  onClick={handleClick}>{app.visible ? 'Hide Details' : 'Show Details'}</button>
//             {app.visible && (<p>Hey, these are some details you can now see.</p>)}
//         </div>
//     );

//     ReactDOM.render(template, appRoot);
// }

// render();