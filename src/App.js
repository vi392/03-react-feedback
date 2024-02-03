import Secound from "./component/Secound";
import Third from "./component/Third";
import {BrowserRouter ,Routes,Route} from 'react-router-dom'


function App() {
  return (
   <>
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Secound/> } />
      <Route path="/view" element={<Third/> } />

    </Routes>
   </BrowserRouter>

   {/* <Secound/> */}
   {/* <Third/> */}
   </>
  );
}

export default App;
