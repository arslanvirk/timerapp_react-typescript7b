import React, { Component } from "react";
import "./Timer.css";
// import TimerButton from "../TimerButton/TimerButton";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";

class Timer extends Component {
  constructor(props: any) {
    super(props);

    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }
  state: {
    minutes: number;
    seconds: number;
    isOn: boolean;
    timer: any;
  } = {
    minutes: 25,
    seconds: 0,
    isOn: false,
    timer: "",
  };

  startTimer() {
    if (this.state.isOn === true) {
      return;
    }

    let Interval = setInterval(() => {
      const { seconds, minutes } = this.state;
      if (seconds > 0) {
        this.setState(({ seconds }: any) => ({
          seconds: seconds - 1,
        }));
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(Interval);
        } else {
          this.setState(({ minutes }: any) => ({
            minutes: minutes - 1,
            seconds: 59,
          }));
        }
      }
    }, 1000);
    this.setState({ isOn: true });
    this.setState({ timer: Interval });
  }

  stopTimer() {
    clearInterval(this.state.timer);
    this.setState({ isOn: false });
  }

  resetTimer() {
    this.stopTimer();
    this.setState({
      minutes: 25,
      seconds: 0,
    });
  }

  render = () => {
    const { minutes, seconds } = this.state;

    return (
      <div className="timer-container">
        <h1 style={{ color: "#8a909c" }}>Timer App</h1>
        <div
          style={{
            border: "3px solid #d3cadb",
            width: "90px",
            height: "70px",
            borderRadius: "100%",
            padding: "10%",
            marginLeft: "35%",
          }}
        >
          <h1 className="headTime">
            {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </h1>
        </div>
        <div className="timer-button-container">
          <button className="start-timer" onClick={this.startTimer}>
            {"start"}
          </button>
          <button className="stop-timer" onClick={this.stopTimer}>
            {"Stop"}
          </button>
          <button className="reset-timer" onClick={this.resetTimer}>
            {"Reset"}
          </button>
        </div>
        <div>
          <button className="resume-timer" onClick={this.startTimer}>
            {!this.state.isOn ? <PlayArrowIcon /> : <PauseIcon />}
          </button>
        </div>
      </div>
    );
  };
}

export default Timer;
