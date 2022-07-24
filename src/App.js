import { useEffect, useState } from 'react';
import './App.css';
import Students from './human';
import Pagination from './Pagination';
import Header from './search';
import queryString from 'query-string';
import Content from './Content';

function App() {
  const [studentList, setStudentsList] = useState();
  const [show, setShow] = useState(false)
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRow: 1,
  });

  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
  });



  useEffect(() => {
    async function getApi() {
      try {
        const paramString = queryString.stringify(filters);
        const requestUrl = `https://json-server-search.herokuapp.com/api/students?${paramString}`;
        const response = await fetch(requestUrl);
        const responseJson = await response.json();
        const { data, pagination } = responseJson;

        setStudentsList(data);
        setPagination(pagination);
      } catch (error) {
        console.error('Failed to fetch  students list', error.message);
      }
    }

    getApi();
  }, [filters]);

  function handlePageChange(newPage) {
    console.log('ok');
    setFilters({
      ...filters,
      _page: newPage,
    });
  }

  function handleFilterChange(newFilters) {
    setFilters({
      ...filters,
      _page: 1,
      q: newFilters.value,
    });
  }

  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <Content />}
      <Header onSubmit={handleFilterChange} />
      <Students students={studentList} />
      <Pagination pagination={pagination} onPageChange={handlePageChange} />
    </div>
  );
}

export default App;
