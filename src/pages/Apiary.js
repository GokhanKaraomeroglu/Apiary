import Header from '../components/Header';
import NavBar from '../components/Navbar';
import ApiaryForm from './ApiaryForm';
import {Link} from 'react-router-dom';


function Apiary() { 
  return (
    <div className="App">
      <NavBar/>
      {/* <Header/> */}
			<p>This is Apiary Page</p>
      <Link to="/ApiaryForm" ><button 
      type="button" 
      class="btn btn-warning m-5" 
       >Apiary Form</button>
       </Link>
      <button type="button" class="btn btn-warning m-5">Apiary Search</button>
      <button type="button" class="btn btn-warning m-5">Apiary Map</button>

    </div>
  );
}

export default Apiary;