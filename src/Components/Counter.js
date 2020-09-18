import React, { Component } from 'react'
import { Container, Button } from "react-bootstrap";


export default class Counter extends Component {
    constructor() {
        super();
        this.state = {
            counterValue: 0
        }
    }

    clearInterval=()=>{
        clearInterval(this.myInterval)
    }

   countUp= ()=>{
        this.clearInterval();
        this.myInterval=setInterval( ()=>{
            this.setState(prevState=>({counterValue: parseInt(prevState.counterValue)+1}))
        },1000);    
    }

    pause = () =>{
        this.clearInterval();
    };

    reset = () =>{
        this.clearInterval();
        this.setState(prevState=>({counterValue: 0,}));
    };

    OnChangeStartingPoint = e => {
      console.log(e.target.value);
      this.setState(({counterValue: parseInt(e.target.value),}));  
    };

    render() {
        return (
            <Container fluid >
                <div className="row justify-content-center">
                    <div className="col-4">
                        <h3>MCDU</h3>
                    </div>
                    <div className="col-4">
        
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-sm-4">
                        <div className="card bg-light">
                            <div className="card-body">

                                <h1>{this.state.counterValue}</h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card bg-light">
                            <div className="card-body">
                                <h5>Controles</h5>
                                <section className="col form-group">
                                    <label className="form-control-label" >
                                        Valor Inicial
                                    </label>
                                    <input
                                        className="form-control"
                                        type="number"
                                        name="counterValue"
                                        value={this.state.counterValue}
                                        onChange={this.OnChangeStartingPoint}
                                    />
                                </section>
                                <Button variant="primary" onClick={this.countUp} size="sm">Start</Button>{' '}
                                <Button variant="primary" onClick={this.pause} size="sm">Stop</Button>{' '}
                                <Button variant="primary" onClick={this.reset} size="sm">Reset</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        )
    }

    componentWillUnmount(){
        this.clearInterval();
    }
}
