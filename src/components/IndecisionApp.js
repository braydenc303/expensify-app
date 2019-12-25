import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    };

    handleClearSelectedOption = () => {
        this.setState(() => ({ selectedOption: undefined}));
    }
  
    handleDeleteOptions = () => {
      this.setState(() => ({ options: [] }));
    };
  
    handleDeleteOption = (optionToRemove) => {
      this.setState(prevState => ({
        options: prevState.options.filter(option => optionToRemove !== option)
      }));
    };
  
    handlePick = () => {
      let picked = this.state.options[
        Math.floor(Math.random() * this.state.options.length)
      ];
      this.setState(() => ({
          selectedOption: picked
      }));
    };
  
    handleAddOption = (option) => {
      if (!option) {
        return "Enter valid value to add item";
      } else if (this.state.options.indexOf(option) > -1) {
        return "This option already exits";
      }
  
      this.setState(prevState => ({ options: prevState.options.concat(option) }));
    };

    componentDidMount() {
        try {
          const json = JSON.parse(localStorage.getItem("options"));
          if (json) {
            this.setState(() => ({ options: json }));
          }
        } catch (event) {
          return false;
        }
      }
    
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem("options", json);
        }
    }

    componentWillUnmount() {
        console.log("component will unmount");
      }
  
    render() {
      const subtitle = "Put your life in the hands of a Computer!";
  
      return (
        <div>
          <Header subtitle={subtitle} />
          <div className = 'container'>
            <Action
              hasOptions={this.state.options.length > 0}
              handlePick={this.handlePick}
            />
            <div className="widget">
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption handleAddOption={this.handleAddOption} />
            <OptionModal 
              selectedOption = {this.state.selectedOption}
              handleClick = {this.handleClearSelectedOption}
            />
            </div>
          </div>
        </div>
      );
    }
  }
  
  IndecisionApp.defaultProps = {
    options: []
  };

  export default IndecisionApp;