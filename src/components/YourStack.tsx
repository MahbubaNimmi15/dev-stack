import type { Technology } from "../types/technology"

type YourStackProps = {
  selectedTechnologies: Technology[]
  onRemoveTechnology: (id: string) => void
  onRemoveAll: () => void
}

const YourStack = ({
  selectedTechnologies,
  onRemoveTechnology,
  onRemoveAll,
}: YourStackProps) => {
  return (
    <aside className="bg-white border border-gray-200 rounded-2xl p-6 h-fit">

      <h2 className="text-2xl font-bold text-gray-900">
        Your Stack
      </h2>

      <p className="text-gray-500 mt-1">
        {selectedTechnologies.length}{" "}
        {selectedTechnologies.length === 1
          ? "Technology Selected"
          : "Technologies Selected"}
      </p>

      {selectedTechnologies.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-500 font-medium">
            Your stack is empty.
          </p>

          <p className="text-sm text-gray-400 mt-2">
            Add technologies to build your stack.
          </p>
        </div>
      ) : (
        <>
          <div className="mt-6 flex flex-col gap-3">

            {selectedTechnologies.map((technology) => (
              <div
                key={technology.id}
                className="flex items-center justify-between gap-3 border border-gray-200 rounded-xl p-3"
              >

                <div className="flex items-center gap-3">

                  <img
                    src={technology.icon}
                    alt={technology.name}
                    className="w-10 h-10 object-contain"
                  />

                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {technology.name}
                    </h3>

                    <p className="text-xs text-gray-500">
                      {technology.category}
                    </p>
                  </div>

                </div>

                {/* Delete Button */}
                <button
                  onClick={() =>
                    onRemoveTechnology(technology.id)
                  }
                  className="w-8 h-8 flex items-center justify-center rounded-full text-red-500 hover:bg-red-50 text-xl font-bold"
                  aria-label={`Remove ${technology.name}`}
                >
                  ×
                </button>

              </div>
            ))}

          </div>

          {/* Remove All Button */}
          <button
            onClick={onRemoveAll}
            className="mt-6 w-full border border-red-300 text-red-500 py-2 rounded-lg font-semibold hover:bg-red-50"
          >
            Remove All
          </button>
        </>
      )}

    </aside>
  )
}

export default YourStack