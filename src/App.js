import { Suspense, useEffect, useState } from "react";

const mockApi = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello world!");
    }, 2500);
  });
};

const Loading = () => {
  return <p>Loading...</p>;
};

const UserList = () => {
  const [data, setData] = useState();

  useEffect(() => {
    mockApi().then((resp) => setData(resp));
  }, []);

  return <p>{data}</p>;
};

export default function App() {
  return (
    <div className="App">
      <h1>Hello Suspense!</h1>

      <Suspense fallback={<Loading />}>
        <UserList />
      </Suspense>
    </div>
  );
}
