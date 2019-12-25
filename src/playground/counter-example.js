class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleDecrement = this.handleDecrement.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    }

    componentDidMount() {
        try {
            const count = parseInt(localStorage.getItem('count'));
            if(count && !isNaN(count)) {
                this.setState(() => ({count}));
            }
        } catch (event) {
            return false;
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.count !== this.state.count) {
            localStorage.setItem('count', this.state.count);
        }
    }



    handleIncrement() {
        this.setState((prevState) => {
           return {
               count: prevState.count + 1
           } 
        });
    }

    handleDecrement() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            } 
         });    
    }

    handleReset() {
        this.setState(() => {
            return {
                count: 0
            } 
         });    
    }

    render() {

        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleIncrement}>+1</button>
                <button onClick={this.handleDecrement}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}


ReactDOM.render(<Counter  />, document.getElementById('app'));
// let count = 0;

// const handleIncrement = () => {
//     count++;
//     console.log(count);
//     renderCounterApp();
// }

// const handleDecrement = () => {
//     count--;
//     console.log(count);
//     renderCounterApp();
// }

// const handleReset = () => {
//     count = 0;
//     console.log(count);
//     renderCounterApp();
// }


// const appRoot = document.getElementById('app');


// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button id="my-id" onClick = {handleIncrement} className="button">+1</button>
//             <button id="my-id" onClick = {handleDecrement} className="button">-1</button>
//             <button id="my-id" onClick = {handleReset} className="button">Reset</button>
//         </div>
//     );

//     ReactDOM.render(templateTwo, appRoot);

// };

// renderCounterApp();