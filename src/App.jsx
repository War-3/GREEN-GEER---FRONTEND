import React, { Suspense, lazy } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import SignUp from "./components/signup/SignUp";
import SignIn from "./components/signin/SignIn";
import EmailVerification from "./components/Emailverification/EmailVerification";
import NewPassword from "./components/NewPasswordresetform/NewPasswordResetForm";
import PasswordResetForm from "./components/Passwordresetform/PasswordResetForm";
const Home = lazy(() => import("./components/home/Home"));
const Nav = lazy(() => import("./components/Nav/Nav"));
const Categories = lazy(() => import("./components/categories/Categories"));
const HowItWorks = lazy(() => import("./components/how-it-works/HowItWorks"));
const Contact = lazy(() => import("./components/contact/Contact"));
const StarRating = lazy(() => import("./components/star-rating/StarRating"));
const FAQ = lazy(() => import("./components/faq/Faq"));
const Footer = lazy(() => import("./components/footer/Footer"));
const Description = lazy(() => import("./components/description/Description"));
const Recently = lazy(() => import("./components/recently/Recently"));
const Cart = lazy(() => import("./components/cart/Cart"));
const Account = lazy(() => import("./components/Account/Account"));
const Error = lazy(() => import("./components/Error/Error"));
const CheckoutPage = lazy(() => import("./components/checkout/Checkout"));


function App() {
  return (
    <>
      <Nav />
      <Suspense fallback={<div>Loading...</div>}>
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
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;

