// import Pop from "./component/Pop";
import Secound from "./component/Secound";
import Third from "./component/Third";
import {BrowserRouter ,Routes,Route} from 'react-router-dom'


function App() {
  return (
   <>
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Secound/> }></Route>
      <Route path="/view" element={<Third/> }></Route>
      {/* <Route path="/abc" element={ <Pop/>} /> */}

    </Routes>
   </BrowserRouter>
     {/* <Pop/> */}
   {/* <Secound/> */}
   {/* <Third/> */}
   </>
  );
}

export default App;
