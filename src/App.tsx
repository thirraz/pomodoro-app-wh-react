import { PomodoroTimer } from "./components/PomodoroTimer"

export const App = (): JSX.Element => {
     return (
          <div className="App">
               <PomodoroTimer defaultPomodoroTime={1500} />
          </div>
     )
}

export default App
