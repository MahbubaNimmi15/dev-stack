import type { Technology } from "../types/technology"

type YourStackProps = {
  selectedTechnologies: Technology[]
}

const YourStack = ({ selectedTechnologies }: YourStackProps) => {
  return (
    <aside className="bg-white border border-gray-200 rounded-2xl p-6 h-fit">
      <h2 className="text-2xl font-bold text-gray-900">
        Your Stack
      </h2>

      <p className="text-gray-500 mt-1">
        {selectedTechnologies.length} Technology Selected
      </p>

      {selectedTechnologies.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-500">
            Your stack is empty.
          </p>

          <p className="text-sm text-gray-400 mt-2">
            Add technologies to build your stack.
          </p>
        </div>
      ) : (
        <div className="mt-6 flex flex-col gap-3">
          {selectedTechnologies.map((technology) => (
            <div
              key={technology.id}
              className="flex items-center gap-3 border border-gray-200 rounded-xl p-3"
            >
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
          ))}
        </div>
      )}
    </aside>
  )
}

export default YourStack