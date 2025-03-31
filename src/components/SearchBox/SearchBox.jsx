import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';

export default function SearchBox() {
  const dispatch = useDispatch();
  const inputValue = useSelector(state => state.filters.name);

  const handleChange = value => {
    dispatch(changeFilter(value));
  };

  return (
    <>
      <p>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={inputValue}
        onChange={e => handleChange(e.target.value)}
      />
    </>
  );
}
