import { useState } from "react";
import { Link } from "react-router-dom";
import { getTopics } from "../api";

function TopicsNav({ setCurrTopic }) {
  const [topics, setTopics] = useState([]);

  const fetchTopics = () => {
    getTopics()
    .then((topicsFromApi) => {
      setTopics(topicsFromApi)
    })
  };

  fetchTopics();

  return (
    <nav>
      <Link
        className="topics-link"
        to={`/articles`}
        key="all"
        onClick={() => {
          setCurrTopic(undefined);
        }}
      >
        All
      </Link>
      {topics.map((topic) => {
        return (
          <Link
            className="topics-link"
            to={`/${topic.slug}`}
            key={topic.slug}
            onClick={() => {
              setCurrTopic(topic.slug);
            }}
          >
            {topic.slug[0].toUpperCase() + topic.slug.slice(1).toLowerCase()}
          </Link>
        );
      })}
    </nav>
  );
}

export default TopicsNav;
