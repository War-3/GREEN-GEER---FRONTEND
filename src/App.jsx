import "./App.css";
import { Route, Routes } from "react-router-dom";
import SignUp from "./components/signup/SignUp";
import SignIn from "./components/signin/SignIn";
import Home from "./components/home/Home";
import Nav from "./components/Nav/Nav";
import Categories from "./components/categories/Categories";
import HowItWorks from "./components/how-it-works/HowItWorks";
import Contact from "./components/contact/Contact";
import EmailVerification from "./components/Emailverification/EmailVerification";
import PasswordResetForm from "./components/Passwordresetform/PasswordResetForm";
import NewPassword from "./components/NewPasswordresetform/NewPasswordResetForm";
import StarRating from "./components/star-rating/StarRating";
import FAQ from "./components/faq/Faq";
import Footer from "./components/footer/Footer";
import Description from "./components/description/Description";
import Recently from "./components/recently/Recently";
import Cart from "./components/cart/Cart";
import Account from "./components/Account/Account";
import Error from "./components/Error/Error";
import Checkout from "./components/checkout/Checkout";

function App() {
  return (
    <>
      <Nav />
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/HowItWorks" element={<HowItWorks />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/star-rating" element={<StarRating />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Account" element={<Account />} />
        <Route path="/recently" element={<Recently />} />
        <Route path="/description" element={<Description />} />
        <Route path="/NewPassword" element={<NewPassword />} />
        <Route path="/Passwordresetform" element={<PasswordResetForm />} />
        <Route path="/Emailverification" element={<EmailVerification />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<Error />} />
      </Routes>
      {/* </Suspense> */}
      <Footer />
    </>
  );
}

export default App;
