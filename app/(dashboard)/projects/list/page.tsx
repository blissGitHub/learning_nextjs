import React from "react";
import styles from "./projects.module.css";
import Link from "next/link";
const ProjectsList = () => {
  return (
    <main>
      <h1>ProjectList</h1>
      <ul className={styles.ul}>
        <li>
          <Link href="/projects/jobit">Jobit</Link>
        </li>
        <li>
          <Link href="/projects/carrent">Car Rent</Link>
        </li>
        <li>
          <Link href="/projects/hipnode">hipnode</Link>
        </li>
      </ul>
    </main>
  );
};

export default ProjectsList;
