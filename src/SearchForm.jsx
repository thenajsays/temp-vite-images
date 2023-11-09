import { useGlobalContext } from './context';

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    if (!searchValue) return;
    setSearchTerm(searchValue);
  };
  return (
    <section>
      <h1 className='title'>Unsplash Images</h1>
      <form className='search-form' onSubmit={handleSubmit}>
        <input
          type='text'
          name='search'
          className='form-input search-input'
          placeholder='cat'
        />
        <button className='btn' type='submit'>
          Search
        </button>
      </form>
    </section>
  );
};
export default SearchForm;

//https://api.unsplash.com/search/photos/?client_id=aGYi1msFnLYoNoUPFXAeschXrMjgI08Gw6LgKC8aDa8&query=
