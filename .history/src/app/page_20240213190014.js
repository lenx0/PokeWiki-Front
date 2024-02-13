'use Client'

import Image from "next/image";
import styles from "./page.module.css";
import PokemonList from "./pages/PokemonList/page";

export default function Home() {
  return (
    <PokemonList />
  );
}
