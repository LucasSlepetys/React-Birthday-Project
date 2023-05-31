import { useState } from 'react';
import list from './data';
import Person from './person';

function BirthdayContainer() {
  const [data, setData] = useState(list);

  function clearList() {
    setData([]);
  }
  return (
    <div className='container'>
      <h3>{data.length} Birthdays this month</h3>
      {data.map((person) => {
        return <Person id={person.id} {...person} />;
      })}

      <button type='button' onClick={clearList}>
        Clear List{' '}
      </button>
    </div>
  );
}

export default BirthdayContainer;
