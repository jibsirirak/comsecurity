
import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
import reactDom from "react-dom";
import zxcvbn from "zxcvbn";
import validator from 'validator';

const CheckPassword = ({password, Check}) =>{
  // console.log(password);
  const testResult = zxcvbn(password);
  // console.log(testResult);
  const num = testResult.score * 100/4;
  console.log(num);
  console.log(Check);
  const funcProgressColor = () =>{
    switch(testResult.score){
      case 0:
        return '#828282';
      case 1:
        return '#EA1111';
      case 2:
        return '#FFAD00';
      case 3:
        return '#9bc158';
      case 4:
        if(Check === true){
          return '#00b500';
        }
        else{
          return '#9bc158';
        }
      default:
        return 'none';
    }
  }

  const createPassLabel = () =>{
    switch(testResult.score){
      case 0:
        localStorage.setItem('checkpass',"Very weak!!!!")
        return 'Very weak!!!!';
      case 1:
        localStorage.setItem('checkpass',"Weak!!!")
        return 'Weak!!!';
      case 2:
        localStorage.setItem('checkpass',"Fair!!")
        return 'Fair!!';
      case 3:
        localStorage.setItem('checkpass',"Good!")
        return 'Good!';
      case 4:
        if(Check === true){
        localStorage.setItem('checkpass',"Strong")
          return 'Strong';
        }
        else{
            localStorage.setItem('checkpass',"Good")
          return 'Good!';
        }
      default:
        localStorage.setItem('checkpass',"Very weak!!!!")
        return 'Very weak!!!!';
    }
  }

  const ChangePasswordColor = () =>({
    width: `${num}%`,
    background: funcProgressColor(),
    height: '7px'
  })
  return(
    <div>
      <div className="progress" style={{height: '7px'}}>
        <div className="progress-bar" style={ChangePasswordColor()}></div>
      </div>
      <p style={{color: funcProgressColor()}}>{createPassLabel()}</p>
      <pre>
      </pre>
    </div>
  );
}

export default CheckPassword;