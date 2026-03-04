export function BottomStatusBar() {
  return (
    <div
      className="rounded-xl border px-6 py-4 flex flex-wrap gap-8 text-sm"
      style={{
        backgroundColor: "rgb(var(--card))",
        borderColor: "rgb(var(--border))",
      }}
    >
      <div>
        <div className="opacity-60 text-xs">Sub-Agents</div>
        <div className="font-medium">6</div>
      </div>

      <div>
        <div className="opacity-60 text-xs">Parallel Executions</div>
        <div className="font-medium">2</div>
      </div>

      <div>
        <div className="opacity-60 text-xs">Operations</div>
        <div className="font-medium">1</div>
      </div>

      <div className="ml-auto flex gap-6">
        <div className="text-red-400">Critical: 0</div>
        <div className="text-orange-400">High: 0</div>
        <div className="text-yellow-400">Medium: 0</div>
        <div className="text-green-400">Low: 0</div>
      </div>
    </div>
  )
}