import Header from '../components/Header';
import NavBar from '../components/Navbar';
import Image2 from '../images/apiary2.jpg';
import Image from '../images/apiary.jpg';


function Home() { 
  return (
    <div className="App">
      <NavBar/>
      {/* <Header/> */}
			<p>This is Home Page</p>
			<img src={Image2} alt=""/>
			<img src={Image} alt=""/>
    </div>
  );
}

export default Home;