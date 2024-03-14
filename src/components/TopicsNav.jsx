import { useState } from "react";
import { Link } from "react-router-dom";
import { getTopics } from "../api";

function TopicsNav({ setCurrTopic, setArticlesPage, setSortBy, setOrder }) {
  const [topics, setTopics] = useState([]);

  const fetchTopics = () => {
    getTopics().then((topicsFromApi) => {
      setTopics(topicsFromApi);
    });
  };

  fetchTopics();

  return (
    <nav id="topics-nav">
      <div className="topics-nav-link" key="all">
        <Link
          className="topics-link"
          to={`/articles`}
          key="all"
          onClick={() => {
            setCurrTopic(undefined);
            setArticlesPage(1);
            setSortBy("created_at");
            setOrder("desc");
          }}
        >
          All
        </Link>
      </div>
      {topics.map((topic) => {
        return (
          <div className="topics-nav-link" key={topic.slug}>
            <Link
              className="topics-link"
              to={`/articles?topic=${topic.slug}`}
              key={topic.slug}
              onClick={() => {
                setCurrTopic(topic.slug);
                setArticlesPage(1);
                setSortBy("created_at");
                setOrder("desc");
              }}
            >
              {topic.slug[0].toUpperCase() + topic.slug.slice(1).toLowerCase()}
            </Link>
          </div>
        );
      })}
    </nav>
  );
}

export default TopicsNav;
