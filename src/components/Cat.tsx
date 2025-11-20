import { useContext } from "react";
import { CatContext } from "./CatContext";

function Cat() {
  const catColor = useContext(CatContext);

  return <h2>The cat is: {catColor}</h2>;
}

export default Cat;
