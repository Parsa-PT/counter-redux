import React from 'react'
import {connect}  from 'react-redux'
import CounterControl from '../../components/CounterControl/CounterControl'
import CounterOutput from '../../components/CounterOutput/CounterOutput'
import './couner.css'

class Counter extends React.Component {


  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="افزایش"
          clicked={this.props.onIncriment}
        />
        <CounterControl
          label="کاهش"
          clicked={this.props.onDecrement}
        />
        <CounterControl
          label="افزودن ۲"
          clicked={this.props.onAdd}
        />
        <CounterControl
          label="کاهش ۲"
          clicked={this.props.onSub}
        />
        <CounterControl
          label="Result"
          clicked={this.props.onShow}
        />
        

        {this.props.res.map((item)=>{
          return <div className='re' key={item} >{item}</div>
        })}
        

        
      </div>
    )
  }
}


const mapStateToProps = (state)=>{
  return {
    ctr : state.counter,
    res : state.result
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    onIncriment : ()=> dispatch({ type : "INC" }),
    onDecrement : ()=>  dispatch({ type : "DCM" }),
    onAdd : ()=> dispatch({ type : "ADD" ,  value: 2 }),
    onSub : ()=> dispatch({ type : "SUB" ,  value: -2 }),
    onShow : ()=> dispatch({ type : "SHO" })
  }
}

export default connect(mapStateToProps , mapDispatchToProps) (Counter)
