import { useSearchParams } from 'react-router-dom';
import { Card } from '../components/Card';
import { useFetch } from '../hooks/useFetch';
import { useTitle } from '../hooks/useTitle';



export const Search = ({apiPath}) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("query");
  const { data: movies } = useFetch(apiPath, queryTerm);

  useTitle(`Search Results for ${queryTerm}`);

  return (
        <main>
        <section className='p-7'>
          <p className='text-3xl text-gray-700 dark:text-white'>{ movies.length > 0 ? `Results for '${queryTerm}'`: `Not results found for '${queryTerm}'`}</p>
        </section>
        <section className="max-w-7xl mx-2 py-1">
          <div className="flex justify-start flex-wrap">
            {
              movies.map((movie) => (
                  <Card key={movie.id} movie={movie}/>
              ))
            }
          </div>
        </section>
      </main>
  )
}
