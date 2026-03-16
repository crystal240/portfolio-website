import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Books from "./pages/Books";
import BookDetail from "./pages/BookDetail";
import Merch from "./pages/Merch";
import MerchDetail from "./pages/MerchDetail";
import CampusMerchDetail from "./pages/CampusMerchDetail";
import ThreeD from "./pages/ThreeD";
import AIGC from "./pages/AIGC";
import About from "./pages/About";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => {
  console.log('Portfolio app initialized');

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen bg-background">
          <Header />
          <Routes>
            <Route path="/" element={<Books />} />
            <Route path="/book" element={<BookDetail />} />
            <Route path="/merch" element={<Merch />} />
            <Route path="/merch-detail" element={<MerchDetail />} />
            <Route path="/campus-merch-detail" element={<CampusMerchDetail />} />
            <Route path="/3d" element={<ThreeD />} />
            <Route path="/aigc" element={<AIGC />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;