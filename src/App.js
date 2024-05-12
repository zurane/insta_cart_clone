import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from './pages/layout';
import AllStores from './pages/AllStores';
import Groceries from './pages/Groceries';
import Alcohol from './pages/Alcohol';
import Beauty from './pages/Beauty';
import Local from './pages/Local';
import Wholesale from './pages/Wholesale';
import Pets from './pages/Pets';
import Pharmacy from './pages/Pharmacy';
import Retail from './pages/Retail';
import Convenience from './pages/Convenience';

function App() {
  return (
    // This is where we will have our routes
    <BrowserRouter>
      <Routes>
        {/* The layout element will become the primary or default page of our application */}
        <Route path='/' element={<Layout />}>
          <Route index element={<AllStores />} />
          <Route path='groceries' element={<Groceries />} />
          <Route path='alcohol' element={<Alcohol />} />
          <Route path='beauty' element={<Beauty />} />
          <Route path='local' element={<Local />} />
          <Route path='wholesale' element={<Wholesale />} />
          <Route path='pets' element={<Pets />} />
          <Route path='pharmacy' element={<Pharmacy />} />
          <Route path='retail' element={<Retail />} />
          <Route path='convenience' element={<Convenience />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
