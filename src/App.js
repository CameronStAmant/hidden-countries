function App() {
  // window.addEventListener('mouseup', (e) => {
  //   console.log();
  //   const color = Math.round(Math.random() * 0xffffff);

  //   const fill = '#' + color.toString(16).padStart(6, '0');

  //   e.target.style.fill = fill;
  // });

  const nameThing = (id) => {
    console.log(id);
  };

  return (
    <div>
      <p>Hello!</p>
      <img src="/images/us.svg" alt="us_map"></img>
    </div>
  );
}

export default App;
