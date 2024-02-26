import { useState } from 'react';
import './App.css';
import useFetchProduct from './hooks/useFetchProductHook';

function App() {
  const [pageData, setPageData] = useState({
    limit: 10,
    pageNo: 1,
  });

  const {
    data: { products = [], total = 100 } = {},
    error,
    loading,
  } = useFetchProduct(
    `https://dummyjson.com/products?limit=${pageData.limit}&skip=${
      pageData.pageNo * 10 - 10
    }`
  );

  const totalNoOfPages = Math.ceil(total / pageData.limit);

  const onPaginationClick = (pageNo) => {
    setPageData((prevData) => ({ ...prevData, pageNo }));
  };

  return (
    <>
      {loading && <div className="loader" />}
      {error && <div>{error}</div>}
      <div className="paginationContainer">
        {(products || []).map(({ thumbnail, title, id }) => {
          return (
            <section className="imageSection" key={id}>
              <div className="imageSection__image">
                <img src={thumbnail} alt={title} />
              </div>
              <div className="imageSection__title">
                <span>{title}</span>
              </div>
            </section>
          );
        })}
      </div>
      <section className="paginationSection">
        {pageData.pageNo !== 1 && (
          <div onClick={() => onPaginationClick(pageData.pageNo - 1)}>◀</div>
        )}
        <div>
          {[...Array(totalNoOfPages)].map((_, pageNoIdx) => {
            return (
              <span
                className={`itemsPerPage ${
                  pageData.pageNo === pageNoIdx + 1 ? 'selectedPage' : ''
                }`}
                key={`itemsPerPage${pageNoIdx}`}
                onClick={() => onPaginationClick(pageNoIdx + 1)}
              >
                {pageNoIdx + 1}
              </span>
            );
          })}
        </div>
        {pageData.pageNo !== totalNoOfPages && (
          <div onClick={() => onPaginationClick(pageData.pageNo + 1)}>▶</div>
        )}
      </section>
    </>
  );
}

export default App;
