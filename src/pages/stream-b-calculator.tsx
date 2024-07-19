import React from "react"
import {
  TopBar
} from '../organisms';
import {
  StreamBCalculator as StreamBCalculatorTemplate
} from '../template';

function StreamBCalculator() {
  return (
    <div>
      <TopBar/>
      <StreamBCalculatorTemplate />
    </div>
  )
}

export default StreamBCalculator;