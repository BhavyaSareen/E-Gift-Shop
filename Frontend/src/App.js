import logo from './logo.svg';
import './App.css';
import Headers from './Components/Headers';
import Home from './Components/Home';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import About from './Components/About';
import Register from './Components/Register';
import Contact from './Components/Contact';
import Master from './Components/Master';
import UserLogin from './Components/UserLogin';
import AdminLogin from './Components/AdminLogin';
import AdminMaster from './Components/Admin/AdminMaster';
import AddCategory from './Components/Admin/Category/AddCategory';
import ViewCategory from './Components/Admin/Category/ViewCategory';
import AddProducts from './Components/Admin/Products/AddProducts';
import ViewProducts from './Components/Admin/Products/ViewProducts';
import ViewOrders from './Components/Admin/ViewOrders';
import ViewEnquiry from './Components/Admin/ViewEnquiry';
import UserMaster from './Components/User/UserMaster';
import AdminDashboard from './Components/Admin/AdminDashboard';
import UserCategory from './Components/User/UserCategory';
import UserEnquiry from './Components/User/UserEnquiry';
import UserViewOrder from './Components/User/Order/UserViewOrder';
import Photoframes from './Components/Photoframes';
import Clock from './Components/Clock';
import Collage from './Components/Collage';
import Posters from './Components/Poster';
import Moulding from './Components/Moulding';
import Walldecors from './Components/Walldecors';
import Miscellaneous from './Components/Miscellaneous';
import Desciption from './Components/Description';
import AddSubCategory from './Components/Admin/Sub-Category/AddSubCategory';
import UserProduct from './Components/User/UserProduct';
import UserSubCategory from './Components/User/UserSubCategory';
import ViewSubCategory from './Components/Admin/Sub-Category/ViewSubCategory';
import UpdateCategory from './Components/Admin/Category/UpdateCategory';
import UpdateProducts from './Components/Admin/Products/UpdateProduct';
import UpdateSubCategory from './Components/Admin/Sub-Category/UpdateSubCategory';
import Category from './Components/Category';
import ViewSubCategoryUser from './Components/User/ViewSubCategoryUser';
import ViewSingleProduct from './Components/User/ViewSingleProduct';

function App() {
  return (
    <>
  <Router>
    <Routes>  
    <Route path="/" element={<Master/>}>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/userlogin" element={<UserLogin/>}/>     
      <Route path="/adminLogin" element={<AdminLogin/>}/> 
      <Route path="/Category" element={<Category/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/photoframe" element={<Photoframes/>} />
      <Route path="/clocks" element={<Clock/>} />
      <Route path="/collage" element={<Collage/>} />
      <Route path="/posters" element={<Posters/>} />
      <Route path="/moulding" element={<Moulding/>} />
      <Route path="/userproduct" element={<UserProduct/>}/>     
      <Route path="/userproducts/:id" element={<UserProduct/>}/>     
      <Route path="/view_sub_cat/:id" element={<ViewSubCategoryUser/>}/>
      <Route path="/walldecors" element={<Walldecors/>} />
      <Route path="/Miscellaneous" element={<Miscellaneous/>} />
      <Route path="/description" element={<Desciption/>}/>      
      <Route path="/readmore" element={<About/>} />
    </Route>

    <Route path="/admin" element={<AdminMaster/>}>
      <Route path="/admin" element={<AdminDashboard/>}/>
      <Route path="/admin/addcategory" element={<AddCategory/>}/>
      <Route path="/admin/viewcategory" element={<ViewCategory/>}/>
      <Route path="/admin/viewcategory/updatecategory/:id" element={<UpdateCategory/>}/>
      <Route path="/admin/addsubcategory" element={<AddSubCategory/>} />
      <Route path="/admin/viewsubcategory" element={<ViewSubCategory/>} />
      <Route path="/admin/viewsubcategory/updatesubcategory/:id" element={<UpdateSubCategory/>} />
      <Route path="/admin/addProduct" element={<AddProducts/>}/>
      <Route path="/admin/viewProduct" element={<ViewProducts/>}/>
      <Route path="/admin/viewProduct/updateproduct/:id" element={<UpdateProducts/>}/>
      <Route path="/admin/order" element={<ViewOrders/>}/>
      <Route path="/admin/enquiry" element={<ViewEnquiry/>}/>
    </Route>

    <Route path="/user" element={<UserMaster/>}>
      <Route path="/user" element={<UserCategory/>}/>
      <Route path="/usercategory" element={<Category/>}/>
      <Route path="/user/usersubcategory" element={<UserSubCategory/>}/>
      <Route path="/user/enquiry" element={<UserEnquiry/>}/>
      <Route path="/user/vieworder" element={<UserViewOrder/>}/>      
      <Route path="/user/userproduct" element={<UserProduct/>}/>     
      <Route path="/user/userproducts/:id" element={<UserProduct/>}/>     
      <Route path="/user/view_sub_cat/:id" element={<ViewSubCategoryUser/>}/>
      <Route path='/user/single_product/:id' element={<ViewSingleProduct/>}/>     
      {/* <Route path="/user/userproduct/description" element={<Desciption/>}/>       */}
    </Route>
    </Routes>    
  </Router>
  
   </>
  );
}

export default App;
