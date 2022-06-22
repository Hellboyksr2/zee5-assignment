import React from "react";
import Card from "../Card";
import styles from "./cards.module.css";

const Cards = ({ cards, filter="" }) => {
  return (
    <section className={styles.cards}>
        {cards.filter(({ title}) => ( !filter || title.includes(filter)) ).map(({ id, title, thumbnailUrl, url }) => (
          <Card key={id} title={title} thumbnailUrl={thumbnailUrl} url={url} />
        ))}
    </section>
  );
};

export default Cards;
