import { leftZero } from "./zeroLeft"

export const secondsToMinutes = (seconds: number): string => {
     const sec = leftZero((seconds % 60) % 60)
     const min = leftZero((seconds / 60) % 60)

     return `${min}:${sec}`
}
