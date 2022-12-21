import { leftZero } from "./zeroLeft"

export const secondsToTime = (seconds: number): string => {
     const sec = leftZero((seconds % 60) % 60)
     const min = leftZero((seconds / 60) % 60)
     const hours = leftZero(seconds / 3600)
     return `${hours}h${min}m${sec}s`
}
