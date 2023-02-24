import React, {Component} from "react";



class Calculator extends Component{
    constructor(props) {
        super(props);
        this.state = {
            n1: null,
            n2: null,
            option: '+',
            result: null,
            
        }
    }



    render() { 
        /*---------------MULTI-STATE CHANGE----------------- */

        // const onChange =(e) =>{
        //     const {value, name} = e.target
        //     this.setState({[name]: value})
        // }

        const onChange1 = (e) =>{
            this.setState({n1:+e.target.value})
        }
        const onChange2 = (e) =>{
            this.setState({n2:+e.target.value})
        }
        const onOptionChange = (e) => {
            this.setState({option:e.target.value})
        }
        const onResult = (n1, n2, option) =>{
            switch (option) {
                case "+":
                this.setState({result: n1+n2});
                break;
                case "-":
                this.setState({result: n1-n2});
                break;
                case "*":
                this.setState({result: n1*n2});
                break;
                case "/":
                this.setState({result: n1/n2});
                break;

                default: return
            }
            this.setState({})

        }
            const onReset = () => {
                this.setState({n1: '', n2:'', option:'', result:''})
            }
         
        return(
            <div>
                <input onChange={onChange1} value={this.state.n1} type='number' placeholder="Enter your number"  name="n1"/>
                <select onChange={onOptionChange} value={this.state.option}>
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="*">*</option>
                    <option value="/">/</option>
                </select>
                <input onChange={onChange2} value={this.state.n2} type='number' placeholder="Enter your number" name="n2"/>
                 <button onClick={()=>onResult(this.state.n1, this.state.n2, this.state.option)}>=</button>  
                 <span>{this.state.result}</span> 
                 <button onClick={onReset}>C</button>   
            </div>
        )
    }
}



export default Calculator
