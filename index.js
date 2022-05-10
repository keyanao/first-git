import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



class Calculation extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            prenum: [],//記号前の値
            curnum: [],//記号後の値
            calc: "",//記号
            calclist:[],//計算で使う記号
            calclast:[],
            resetflag: false,
            calcflag: false
        };
    }

    //値を結合
    handleClick(i){
        if(this.state.calcflag === false){
            this.setState({calcflag: true}, () => { console.log(this.state.calcflag)})
            console.log(this.state.calcflag)
        }
  
        this.setState({calc: i})
        this.setState({calclast: [...this.state.calclast, i]})
        const all = this.state.prenum.join("") 
        this.state.curnum.push(Number(all))
        this.setState({prenum: []})
    }

    //記号を押したときの表示
    rendercalc(value){
        return <button 
            onClick={() => this.handleClick(value)}>{value}</button>;   
    }
    
    //数値連続入力
    changeInputValue(inputNum){
        if(this.state.calcflag === true){
            this.setState({calcflag: false})
            this.setState({calclist:[...this.state.calclist, this.state.calclast.slice(-1)]})
        }
        this.setState({prenum: [...this.state.prenum,inputNum]})
    }

    render() {
        console.log({calclist: this.state.calclast})
        console.log(this.state.calclist)
        console.log(this.state.prenum)
        console.log(this.state.curnum)
        console.log(this.state.calc)
        return (
            <div>
                <div class="display">
                    {this.state.prenum.map((value) => {
                        return <>{value}</>
                    })}
                    {this.state.calc}
                </div>
                <div>
                    <button onClick={()=> this.changeInputValue("7")}>7</button>
                    <button onClick={()=> this.changeInputValue("8")}>8</button>
                    <button onClick={()=> this.changeInputValue("9")}>9</button>
                    {this.rendercalc("/")}
                </div>
                <div>
                    <button onClick={()=> this.changeInputValue("4")}>4</button>
                    <button onClick={()=> this.changeInputValue("5")}>5</button>
                    <button onClick={()=> this.changeInputValue("6")}>6</button>
                    {this.rendercalc("*")}
                </div>
                <div>
                    <button onClick={()=> this.changeInputValue("1")}>1</button>
                    <button onClick={()=> this.changeInputValue("2")}>2</button>
                    <button onClick={()=> this.changeInputValue("3")}>3</button>
                    {this.rendercalc("-")}
                </div>
                <div>
                    <button onClick={()=> this.changeInputValue("0")}>0</button>
                    <button onClick={()=>("0")}>re</button>
                    <button>=</button>
                    {this.rendercalc("+")}
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Calculation />,
    document.getElementById('root')
);
