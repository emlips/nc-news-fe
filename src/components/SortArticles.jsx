function SortArticles({ setSortBy, sortBy, setOrder, order, setArticlesPage }) {
  return (
    <form>
      <label htmlFor="sort-by">Sort by:</label>
      <select
        id="sort-by"
        defaultValue={sortBy}
        onChange={(e) => {
          setSortBy(e.target.value);
          setArticlesPage(1);
        }}
      >
        <option value="created_at">Date</option>
        <option value="title">Title</option>
        <option value="author">Author</option>
        <option value="votes">Votes</option>
      </select>
      <label htmlFor="order">Order:</label>
      <select
        id="order"
        defaultValue={order}
        onChange={(e) => {
          setOrder(e.target.value);
          setArticlesPage(1);
        }}
      >
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </form>
  );
}

export default SortArticles;
