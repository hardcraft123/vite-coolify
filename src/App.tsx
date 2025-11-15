import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import Flashcards from "./pages/Flashcards";
import Sustainable from './pages/Sustainable';
import Innovative from './pages/Innovative';
import Future from './pages/Future'; 
import Interview from './pages/Interview'; 
import NotFound from "./pages/NotFound";
import CookieConsent from './components/ui/CookieConsent';
import './assets/styles/style.css';
 
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
      {/* ✅ Show cookie popup globally */}
        <CookieConsent />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/flashcards" element={<Flashcards />} /> {/* ✅ Flashcards route */}
          <Route path="/interview" element={<Interview />} /> {/* ✅ Interview route */}
          <Route path="/sustainable" element={<Sustainable />} />
          <Route path="/innovative" element={<Innovative />} />
          <Route path="/future" element={<Future />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
