import "./index.css";
import { ENDPOINTS } from "../../utils/api/endpoints.js";
import { useFetch } from "../../utils/api/use-fetch.js";
import CategoryList from "../../Components/CategoryList";

function HomePage() {
  const { data, loading, error } = useFetch(ENDPOINTS.CATEGORIES);

  if (loading) {
    return "Loading...";
  }

  return (
    <div>
      {/* <h1>Home</h1> */}
      {data ? (
        <CategoryList categories={data?.categories ?? []} />
      ) : (
        "Si è verificato un errore!"
      )}
      {/* {console.log(data)} */}
    </div>
  );
}

export default HomePage;
