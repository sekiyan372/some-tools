export const timeFormatter = (time: number): string => {
  const smallerSec = Math.floor(time % 100)
    .toString()
    .padStart(2, '0')
  const seconds = Math.floor((time % (60 * 100)) / 100)
    .toString()
    .padStart(2, '0')
  const minutes = Math.floor((time % (60 * 60 * 100)) / (60 * 100))
    .toString()
    .padStart(2, '0')

  return `${minutes}:${seconds}:${smallerSec}`
}
