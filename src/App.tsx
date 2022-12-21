import { PomodoroTimer } from "./components/PomodoroTimer"

export const App = (): JSX.Element => {
     return (
          <div className="container">
               <PomodoroTimer
                    pomodoroTime={5}
                    shortRestTime={2}
                    longRestTime={5}
                    cycles={4}
               />
          </div>
     )
}

export default App
