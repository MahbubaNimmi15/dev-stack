import type { Technology } from "../types/technology"

type TechnologyCardProps = {
  technology: Technology
  onAddTechnology: (technology: Technology) => void
  isAdded: boolean
}

const TechnologyCard = ({
  technology,
  onAddTechnology,
  isAdded,
}: TechnologyCardProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">

      <div className="flex items-start justify-between">
        <img
          src={technology.icon}
          alt={technology.name}
          className="w-14 h-14 object-contain"
        />

        <span className="text-xs bg-violet-50 text-violet-600 px-3 py-1 rounded-full">
          {technology.badge}
        </span>
      </div>

      <h3 className="text-xl font-bold text-gray-900 mt-5">
        {technology.name}
      </h3>

      <p className="text-gray-500 text-sm mt-2 leading-6">
        {technology.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        <span className="text-xs bg-gray-100 px-3 py-1 rounded-full">
          {technology.category}
        </span>

        <span className="text-xs bg-gray-100 px-3 py-1 rounded-full">
          {technology.difficulty}
        </span>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <span className="font-semibold text-gray-700">
          ⭐ {technology.rating}
        </span>

        <button
          onClick={() => onAddTechnology(technology)}
          disabled={isAdded}
          className={
            isAdded
              ? "bg-gray-200 text-gray-500 px-4 py-2 rounded-lg text-sm font-semibold cursor-not-allowed"
              : "brand-gradient-bg text-white px-4 py-2 rounded-lg text-sm font-semibold"
          }
        >
          {isAdded ? "✓ Added to Stack" : "Add to Stack"}
        </button>
      </div>

    </div>
  )
}

export default TechnologyCard