import Header from '../components/Header';
import NavBar from '../components/Navbar';


function Apiary() { 
  return (
    <div className="App">
      <NavBar/>
      {/* <Header/> */}
			<p>This is Apiary Page</p>
      <button type="button" class="btn btn-warning m-5" >Apiary Form</button>
      <button type="button" class="btn btn-warning m-5">Apiary Search</button>
      <button type="button" class="btn btn-warning m-5">Apiary Map</button>

    </div>
  );
}

export default Apiary;