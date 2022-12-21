import { secondsToTime } from "../utils/secondsToTime"

interface Props {
     mainTime: number
}

export const Timer = (props: Props): JSX.Element => {
     return <div className="timer">{secondsToTime(props.mainTime)}</div>
}
