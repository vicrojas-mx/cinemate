import { Link } from "react-router-dom"
import { Button } from "../components"
import PageNotFoundImage from "../assets/images/pagenotfound.svg"

export const PageNotFound = () => {
  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-7xl text-gray-700 font-bold my-8 dark:text-white">Oops!</p>
            <img className="rounded max-w-sm" src={PageNotFoundImage} alt="404, page not found"/>
        </div>
        <div className="flex justify-center my-4">
          <Link to="/">
            <Button>Back to Cinemate</Button>
          </Link>
        </div>
      </section>  
    </main>
  )
}
