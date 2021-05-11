import { TimeCounter } from 'easytimer.js';
import React, { Component } from 'react';


/**
 * https://github.com/albert-gonzalez/easytimer-react-hook/blob/main/example/src/App.tsx
 * https://github.com/albert-gonzalez/easytimer-react-hook/blob/main/example/src/components/Timer.tsx
 * https://www.npmjs.com/package/easytimer-react-hook
 * https://albert-gonzalez.github.io/easytimer.js/#intro
 */
class Timer extends Component{
    TimerInput = {
        isTargetAchieved: boolean,
        timeValues: TimeCounter,
    }
    render(){
        return(
            <div>
                {this.props.isTargetAchieved ? (
                    <span>BOOM!!</span>
                ) : (
                    <span>{this.props.timeValues.toString(['days', 'hours', 'minutes', 'seconds', 'secondTenths'])}</span>
                )}
            </div>
        );
    }
}

export default Timer;