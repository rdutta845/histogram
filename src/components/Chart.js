import React from "react";
import ReactChart from './ReactChart';

const Chart = (props) => {
    let graphData = props.location.state.freqCount ? props.location.state.freqCount  : props.location.state.graph; 
    console.log('props.....', props);
    let  data = []
    Object.keys(graphData).forEach(key => {
        data.push({letter: key, frequency: graphData[key]/1000})
    })
    return(
        <React.Fragment>
            <h1>Chart</h1>
            <ReactChart width={800} height={500}  data={data}/>
        </React.Fragment>
        
    )
  
  }
  
  
export default Chart;