import React from "react";
import { useEffect } from "react";
import Container from "./Components/Container";

import "./App.css";
import Input from "./Components/Input";
import Cards from "./Components/Cards";
import InfiniteScroll from "react-infinite-scroll-component";
import { getCards } from "./services/getCards";

function App() {
  const [photos, setPhotos] = React.useState([]);
  const [hasMore, setHasMore] = React.useState(true);
  const [search, setSearch] = React.useState("");

  useEffect(() => {
    getCards(0).then((data) => {
      setPhotos(data);
      if (data.length < 10) setHasMore(false);
    });
  }, []);

  return (
    <Container>
      <Input
        placeholder={"Search"}
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />

      <InfiniteScroll
        dataLength={photos.length}
        next={() => {
          getCards(photos.length).then((data) => {
            setPhotos([...photos, ...data]);
            if (data.length < 10) setHasMore(false);
          });
        }}
        loader={<h4>Loading...</h4>}
        hasMore={hasMore}
      >
        <Cards cards={photos} filter={search}/>
      </InfiniteScroll>
    </Container>
  );
}

export default App;
