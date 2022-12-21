import { useEffect, useState } from "react"
import { useInterval } from "../hooks/useInterval"
import { Button } from "./Button"
import { Timer } from "./Timer"

interface Props {
     pomodoroTime: number
     shortRestTime: number
     longRestTime: number
     cycles: number
}

export const PomodoroTimer = (props: Props): JSX.Element => {
     const [mainTime, setMainTime] = useState(props.pomodoroTime)
     const [timeCounting, setTimeCounting] = useState(false)
     const [working, setWorking] = useState(false)
     const [resting, setResting] = useState(false)

     useEffect(() => {
          if (working) document.body.classList.add("working")
          if (resting) document.body.classList.remove("working")
     }, [working])

     useInterval(
          () => {
               setMainTime(mainTime - 1)
          },
          timeCounting ? 1000 : null,
     )

     const configureWork = () => {
          setTimeCounting(true)
          setWorking(true)
          setResting(false)
          setMainTime(props.pomodoroTime)
     }

     const configureRest = (long: boolean) => {
          setTimeCounting(true)
          setWorking(false)
          setResting(true)

          if (long) {
               setMainTime(props.longRestTime)
          } else {
               setMainTime(props.shortRestTime)
          }
     }

     return (
          <div className="pomodoro">
               <h2>You are: working</h2>
               <Timer mainTime={mainTime} />
               <div className="controls">
                    <Button text="Work" onClick={() => configureWork()} />
                    <Button text="Rest" onClick={() => configureRest(false)} />
                    <Button
                         className={!working && !resting ? "hidden" : ""}
                         text={timeCounting ? "Pause" : "Play"}
                         onClick={() => setTimeCounting(!timeCounting)}
                    />
               </div>

               <div className="details">
                    <p>ALSDASCNASOICNASOCNAOSCNAOISCNOIAS</p>
                    <p>ALSDASCNASOICNASOCNAOSCNAOISCNOIAS</p>
                    <p>ALSDASCNASOICNASOCNAOSCNAOISCNOIAS</p>
                    <p>ALSDASCNASOICNASOCNAOSCNAOISCNOIAS</p>
               </div>
          </div>
     )
}
