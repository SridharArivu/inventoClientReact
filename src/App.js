import { Routes, Route , BrowserRouter} from 'react-router-dom';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';
import Client from './Client';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route exact path="/" element={<SignUp/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/client" element={<Client/>}/>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
