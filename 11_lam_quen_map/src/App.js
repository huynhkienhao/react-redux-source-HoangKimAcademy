import './App.css';

function App() {
  
  const arrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const outputMap = arrayNumber.map((item, index) => {
    return <li key={index}>Số: {item}</li>
  })

  const fruits = ['Apple', 'Banana', 'Cherry'];

  return (
    <div className='App'>
      <ul>
        {outputMap}
        <hr/>
        {fruits.map((fruit, index) => {
          return <li key={index}>{fruit}</li>
        })}
      </ul>
    </div>
  );
}

export default App;
