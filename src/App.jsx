import { Filters } from "./components/filters";
import Footer from "./components/footer";
import Header from "./components/header";

const App =()=>{
  return(
    <div>
      <Header/>
      <div className="row mt-5">
        <div className="col-md-3">
          <Filters/>
        </div>
      </div>
      <Footer/>
    </div>
  )

}

export default App;
