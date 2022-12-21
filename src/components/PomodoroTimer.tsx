import { useState } from "react"
import { useInterval } from "../hooks/useInterval"
import { secondsToTime } from "../utils/secondsToTime"

interface Props {
     defaultPomodoroTime: number
}

export const PomodoroTimer = (props: Props): JSX.Element => {
     const [mainTime, setMainTime] = useState(props.defaultPomodoroTime)

     useInterval(() => {
          setMainTime(mainTime - 1)
     }, 1000)
     return <h1>Olá mundo! {secondsToTime(mainTime)}</h1>
}
