import { useTestJsonCallQuery } from "./Services/auth";

function App() {
  const { data, error, isLoading } = useTestJsonCallQuery();
  // console.log("showAllLogs", getAll);/
  return (
    <div className="text-[40px] bg-green-700">
      {" "}
      {data?.map((post: any) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </div>
  );
}

export default App;
