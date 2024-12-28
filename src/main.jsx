import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";

// Make sure to use the correct root element id
const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <RecoilRoot>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </RecoilRoot>
    </StrictMode>
  );
} else {
  console.error("Root element not found in the DOM.");
}

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <RecoilRoot>
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     </RecoilRoot>
//   </StrictMode>
// );
