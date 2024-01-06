import { useEffect, useState } from "react";
import data from "./data/data";
import {Card,Filter,SearchBar} from './components'

function App() {
  const [category, setCategory] = useState("All-Category");
  const [price, setPrice] = useState("All-Price");
  const [color, setColor] = useState("All-Color");
  const [shoes, setShoes] = useState(data);
  const [searchText, setSearchText] = useState("");

  function applyFilter() {
    console.log("Apply filter");
    let newShoes = data;
    if (category !== "All-Category") {
      newShoes = newShoes.filter(
        (shoe) => shoe["category"].toLowerCase() === category.toLowerCase()
      );
    }
    if (color !== "All-Color") {
      newShoes = newShoes.filter(
        (shoe) => shoe["color"].toLowerCase() === color.toLowerCase()
      );
    }
    if (price !== "All-Price") {
      let temp = price.split(/-| /);
      let high = Number(temp[temp.length - 1]);
      if (high === 151) {
        newShoes = newShoes.filter((shoe) => shoe["newPrice"] > high);
      } else {
        let low = high - 49;
        newShoes = newShoes.filter(
          (shoe) => shoe["newPrice"] >= low && shoe["newPrice"] <= high
        );
      }
    }
    setShoes(newShoes);
  }

  function searchFilter() {
    let newShoes = data.filter((shoe) => (shoe.title.toLowerCase().indexOf(searchText.toLowerCase()))!==-1);
    setShoes(newShoes);
    setSearchText(() => "");
  }
  function searchFilterOnChange() {
    let newShoes = data.filter((shoe) => (shoe.title.toLowerCase().indexOf(searchText.toLowerCase()))!==-1);
    setShoes(newShoes);
  }

  return (
    <>
      <div className="w-11/12 m-auto p-10 text-center flex flex-row space-x-6 ">
        <div className="shoe-filters flex flex-col w-1/6 mt-7 sticky left-3 top-2.5 h-full">
          <div className="mb-5">
            <Filter
              Criteria={["Sneakers", "Flats", "Sandals", "Heels"]}
              filterName={"Category"}
              setCriteria={setCategory}
            ></Filter>
          </div>
          <div className="mb-5">
            <Filter
              Criteria={["1-50", "51-100", "101-150", "Above 151"]}
              filterName={"Price"}
              setCriteria={setPrice}
            ></Filter>
          </div>
          <div className="mb-4">
            <Filter
              Criteria={["Black", "Blue", "Red", "Green"]}
              filterName={"Colors"}
              setCriteria={setColor}
            ></Filter>
          </div>

          <button
            className="btn py-2 px-4 bg-gray-700 text-white rounded"
            onClick={applyFilter}
          >
            Apply
          </button>
        </div>

        <div className="flex flex-col w-5/6">
          <SearchBar setSearchText={setSearchText} searchText={searchText} searchFilter={searchFilter} searchFilterOnChange={searchFilterOnChange}></SearchBar>

          <div className="show-container  md:grid md:grid-cols-4 lg:grid-cols-4 gap-2 mx-auto">
            {shoes.map((shoe, index) => {
              return (
                <Card
                  key={index}
                  img={shoe["img"]}
                  title={shoe["title"]}
                  newPrice={shoe["newPrice"]}
                ></Card>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
