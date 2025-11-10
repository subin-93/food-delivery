// import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import Header from "@/components/Header";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import History from "./pages/History";
import NotFound from "./pages/NotFound";
import LoginPage from "./pages/Login";
import SigupPage from "./pages/Signup";

// const queryClient = new QueryClient();

const App = () => (
  // <QueryClientProvider client={queryClient}>
  // <TooltipProvider>
  <>
    {/* <Toaster /> */}
    <Sonner />
    <CartProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/history" element={<History />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SigupPage />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  </>
  // </TooltipProvider>
  // </QueryClientProvider>
);

export default App;
