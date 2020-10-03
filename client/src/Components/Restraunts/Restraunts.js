import React, { useEffect, useState } from "react";
import axios from "axios";
import Restraunt from "./Restraunt/Restraunt";
import Loader from "../UI/Loader/loader";
import SearchComponent from "../Search/Search";
import { Wrapper, ErrorMessage, FullPageHeight } from "./styles";
import { Button } from "./Restraunt/styles";
function Restraunts(props) {
  const [restrauntsData, setRestrauntsData] = useState([]);
  const [persistData, setPersistData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    (async function () {
      try {
        console.log("Req");
        const res = await axios.get("http://localhost:3001/");
        setLoading(false);
        if (!res.data.length) {
          throw Error;
        }
        setPersistData(res.data);
        setRestrauntsData(res.data);
      } catch (e) {
        setError(true);
        setLoading(false);
      }
    })();
  }, []);

  let cards = null;
  if (restrauntsData && restrauntsData.length) {
    cards = restrauntsData.map((item, idx) => (
      <Restraunt key={idx} data={item} />
    ));
  }

  if (loading) {
    return (
      <FullPageHeight>
        <Loader />
      </FullPageHeight>
    );
  }
  return (
    <Wrapper>
      <ErrorMessage show={error}>
        <p>Some Interval server error has occured try refreshing the page</p>
        <Button className="btn" onClick={() => window.location.reload(false)}>
          Refresh Page
        </Button>
      </ErrorMessage>
      <SearchComponent
        big
        value={search}
        setValue={setSearch}
        data={persistData}
        setFilterData={setRestrauntsData}
      />
      <div className="d-flex flex-wrap justify-content-center pt-4">
        {cards}
      </div>
    </Wrapper>
  );
}

export default Restraunts;
