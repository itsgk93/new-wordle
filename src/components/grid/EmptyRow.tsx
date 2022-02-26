import { Cell } from './Cell'

type Props = {
  key: number
  letterLength?: string
}

export const EmptyRow = ({ key, letterLength }: Props) => {
  const letterCount = parseInt(letterLength ?? '5')
  const emptyCells = Array.from(Array(letterCount))

  return (
    <div className="flex justify-center mb-1">
      {emptyCells.map((_, i) => (
        <Cell key={i} />
      ))}
    </div>
  )
}
