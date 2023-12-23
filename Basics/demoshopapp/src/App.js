import './App.css';
import Item from './components/Item';
import ItemDate from './components/ItemDate';

function App() {
  const response = [{
    itemName: 'sanyam',
    itemDate: '21',
    itemMonth: 'June',
    itemYear: '2003'
  },
  {
    itemName: 'sahil',
    itemDate: '10',
    itemMonth: 'dec',
    itemYear: '2003'
  }
  ];
  return (
    <>
      <div className="App">
        <Item name={response[0].itemName}>hello</Item>
        <ItemDate date={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemYear} />
        <Item name={response[1].itemName} />
        <ItemDate date={response[1].itemDate} month={response[1].itemMonth} year={response[1].itemYear} />
        <h2>demo</h2>
      </div>
    </>
  );
}

export default App;
