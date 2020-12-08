import React from "react";
import Cards from "../../cards";
import "./styles.css";

export default function Vowels() {
  return (
    <>
      <h2>Vowels</h2>
      <section className="vowels card-container">
        <Cards
          sound={"/i:/"}
          description={"This is a long vowel sound Examples:"}
        />
        <Cards
          sound={"/I/"}
          description={"This is a long vowel sound Examples:"}
        />
        <Cards
          sound={"/e/"}
          description={"This is a long vowel sound Examples:"}
        />
        <Cards
          sound={"/æ/"}
          description={"This is a long vowel sound Examples:"}
        />
        <Cards
          sound={"/a:/"}
          description={"This is a long vowel sound Examples:"}
        />
        <Cards
          sound={"/ɒ/"}
          description={"This is a long vowel sound Examples:"}
        />
        <Cards
          sound={"/ɔ:/"}
          description={"This is a long vowel sound Examples:"}
        />
        <Cards
          sound={"/ʊ:/"}
          description={"This is a long vowel sound Examples:"}
        />
        <Cards
          sound={"/u:/"}
          description={"This is a long vowel sound Examples:"}
        />
        <Cards
          sound={"/ʌ/"}
          description={"This is a long vowel sound Examples:"}
        />
        <Cards
          sound={"/ə/"}
          description={"This is a long vowel sound Examples:"}
        />
      </section>
    </>
  );
}
