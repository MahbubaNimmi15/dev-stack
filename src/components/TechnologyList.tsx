import type { Technology } from "../types/technology"
import TechnologyCard from "./TechnologyCard"

type TechnologyListProps = {
  technologies: Technology[]
  selectedTechnologies: Technology[]
  onAddTechnology: (technology: Technology) => void
}

const TechnologyList = ({
  technologies,
  selectedTechnologies,
  onAddTechnology,
}: TechnologyListProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

      {technologies.map((technology) => {
        const isAdded = selectedTechnologies.some(
          (item) => item.id === technology.id
        )

        return (
          <TechnologyCard
            key={technology.id}
            technology={technology}
            onAddTechnology={onAddTechnology}
            isAdded={isAdded}
          />
        )
      })}

    </div>
  )
}

export default TechnologyList