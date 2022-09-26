import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { useChapters } from "@site/src/utils/useChapters";
import React from "react";

import { ChapterProjects } from "../../theme/ChapterProjects";
import { MainArea } from "../../theme/MainArea";
import styles from "./styles.module.css";
import { StandardMetadata } from "@site/src/theme/StandardMetadata";

const chapterNames = [
  "From Javascript To Typescript",
  "The Type System",
  "Unions And Literals",
  "Objects",
  "Functions",
  "Arrays",
  "Interfaces",
  "Classes",
  "Type Modifiers",
  "Generics",
  "Declaration Files",
  "Using IDE Features",
  "Configuration Options",
  "Syntax Extensions",
  "Type Operations",
];

const metadata = {
  "twitter:description":
    "Hands on real world projects that will help you exercise your knowledge of TypeScript.",
};

export default function Projects(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const chapters = useChapters();

  return (
    <Layout description={siteConfig.tagline} title="Projects">
      <StandardMetadata overrides={metadata} />
      <MainArea as="main" className={styles.mainArea}>
        <h1 className={styles.heading}>Projects</h1>
        <p>
          Hands on real world projects that will help you exercise your
          knowledge of TypeScript.
          <br />
          <br />
          Each project follows a chapter in the <em>
            Learning TypeScript
          </em>{" "}
          book. Choose between:
        </p>
        <ul>
          <li>🥗 Appetizers: bite-sized directed warmups</li>
          <li>🍲 Entrees: larger, more hands-off challenges</li>
          <li>🍰 Desserts: entrees with a fun twist</li>
        </ul>
        <div className={styles.chapters}>
          {chapterNames.map((chapterName, index) => {
            return (
              <ChapterProjects
                index={index + 1}
                key={chapterName}
                name={chapterName}
                projects={
                  chapters[chapterName.toLowerCase().replace(/ /g, "-")]
                }
              />
            );
          })}
        </div>
      </MainArea>
    </Layout>
  );
}
