interface ProgressProps {
  value: number
}

export function Progress({ value }: ProgressProps) {
  return (
  <div
  className="w-full h-1.5 rounded-full overflow-hidden"
  style={{
    backgroundColor: "rgba(255,255,255,0.06)",
  }}
>
  <div
    className="h-full transition-all duration-300 rounded-full"
    style={{
      width: `${value}%`,
      backgroundColor: "rgb(var(--primary))",
    }}
  />
</div>
  )
}