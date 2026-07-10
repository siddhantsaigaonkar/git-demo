const Question = () => {
  const [data, setdata] = useState([]);
  const [filter, setfilter] = useState([]);

  
    const fetchData = async () => {
      const res = await fakeFetch("https://example.com/api/products");

      setdata(res.data.products);
      setfilter(res.data.products);
    };

    fetchData();


  function filterProducts() {
    const filteredData = data.filter((item) => item.quantity > 20);
    setfilter(filteredData);
  }

  return (
    <div>
      {filter.map((item, idx) => (
        <ul key={idx}>
          <li>Name: {item.name}</li>
          <li>Price: {item.price}</li>
          <li>Quantity: {item.quantity}</li>
        </ul>
      ))}

      <button onClick={filterProducts}>Filter Data</button>
    </div>
  );
};

export default Question;