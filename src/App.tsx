import { useEffect, useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import TechnologyList from "./components/TechnologyList"
import YourStack from "./components/YourStack"
import Footer from "./components/Footer"

import type { Technology } from "./types/technology"

function App() {
  const [technologies, setTechnologies] =
    useState<Technology[]>([])

  const [selectedTechnologies, setSelectedTechnologies] =
    useState<Technology[]>([])

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/technologies.json")
      .then((response) => response.json())
      .then((data: Technology[]) => {
        setTechnologies(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error("Error loading technologies:", error)
        setLoading(false)
      })
  }, [])

  const handleAddTechnology = (technology: Technology) => {
    const alreadyAdded = selectedTechnologies.some(
      (item) => item.id === technology.id
    )

    if (alreadyAdded) {
      toast.warning(
        `${technology.name} is already in your stack.`
      )
      return
    }

    setSelectedTechnologies([
      ...selectedTechnologies,
      technology,
    ])

    toast.success(
      `${technology.name} added to your stack.`
    )
  }

  const handleRemoveTechnology = (id: string) => {
    const technology = selectedTechnologies.find(
      (item) => item.id === id
    )

    const updatedStack = selectedTechnologies.filter(
      (item) => item.id !== id
    )

    setSelectedTechnologies(updatedStack)

    if (technology) {
      toast.info(
        `${technology.name} removed from your stack.`
      )
    }
  }

  const handleRemoveAll = () => {
    if (selectedTechnologies.length === 0) {
      return
    }

    setSelectedTechnologies([])

    toast.info(
      "All technologies removed from your stack."
    )
  }

  return (
    <>
      <Navbar />

      <Hero />

      <main
        id="technologies"
        className="max-w-7xl mx-auto px-6 py-16"
      >
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900">
            Explore Technologies
          </h2>

          <p className="text-gray-500 mt-2">
            Discover modern tools and technologies for your development stack.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : (
          <div className="grid lg:grid-cols-4 gap-8">

            <div className="lg:col-span-3">
              <TechnologyList
                technologies={technologies}
                selectedTechnologies={selectedTechnologies}
                onAddTechnology={handleAddTechnology}
              />
            </div>

            <div className="lg:col-span-1">
              <YourStack
                selectedTechnologies={selectedTechnologies}
                onRemoveTechnology={handleRemoveTechnology}
                onRemoveAll={handleRemoveAll}
              />
            </div>

          </div>
        )}
      </main>

      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={2000}
      />
    </>
  )
}

export default App