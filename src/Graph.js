import { Chart } from "react-google-charts";
import React from "react";

const Graph = ({genreList}) => {
    const newGenreList = genreList.map((genre) => {
        if (genre !== undefined){
        return [...genre, Math.floor(Math.random()*8)]
        }
        else return["fiction", 4]
    })
    newGenreList.unshift(["genre","number"])
    console.log(newGenreList)

const options = {
  title: "Genre Pie Chart",
  
};

  return (
    <Chart
      chartType="PieChart"
      data={newGenreList}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );

}

export default Graph