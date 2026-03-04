import { scanDetail } from "@/data/scanDetail"

export function MetadataRow() {
  return (
    <div
      className="rounded-xl border px-6 py-4 flex flex-wrap gap-8 text-sm"
      style={{
        backgroundColor: "rgb(var(--card))",
        borderColor: "rgb(var(--border))",
      }}
    >
      <div>
        <div className="opacity-60 text-xs">Scan Type</div>
        <div className="font-medium">{scanDetail.type}</div>
      </div>

      <div>
        <div className="opacity-60 text-xs">Targets</div>
        <div className="font-medium">{scanDetail.target}</div>
      </div>

      <div>
        <div className="opacity-60 text-xs">Started At</div>
        <div className="font-medium">{scanDetail.startedAt}</div>
      </div>

      <div>
        <div className="opacity-60 text-xs">Credentials</div>
        <div className="font-medium">{scanDetail.credentials}</div>
      </div>

      <div>
        <div className="opacity-60 text-xs">Files</div>
        <div className="font-medium">{scanDetail.files}</div>
      </div>

      <div>
        <div className="opacity-60 text-xs">Checklists</div>
        <div className="font-medium">{scanDetail.checklists}</div>
      </div>
    </div>
  )
}