import React from 'react'
import "./chass.css"


function ChashBot() {

  // const row = [];
  // const coloumn =[];
  // for (let j=0; j<8; j++)



  // {
  //   coloumn.push(<div className='col'>{j+1}</div>)
  // }

  // for (let i=0;i<8;i++)
  // {
  //   // row.push(<div className='row'>{i+1}{coloumn}</div>)
  //   row.push(coloumn)
  // }

  const boxes = [];
  let color = "";
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      let order = i + j;
      if (order % 2 == 0) {

        
        color = "white";
      } else {
        color = 'black';
      }

      boxes.push(<div className='col' style={{ backgroundColor: color }}>{i + 1},{j + 1}</div>)


    }
  }


  return (
    <React.Fragment>
       <div className='container'>ChassBoard-UI</div>
      <div className='outer'>
        {/* {row} */}
        {boxes}
       
      </div>
    </React.Fragment>
  )
}

export default ChashBot;