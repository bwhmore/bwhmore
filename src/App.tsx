
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Solution from "./pages/Solution";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Research from "./pages/Research";
import CardiovascularHealth from "./pages/CardiovascularHealth";
import MetabolicSyndrome from "./pages/MetabolicSyndrome";
import Obesity from "./pages/Obesity";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/research" element={<Research />} />
          <Route path="/research/cardiovascular" element={<CardiovascularHealth />} />
          <Route path="/research/metabolic" element={<MetabolicSyndrome />} />
          <Route path="/research/obesity" element={<Obesity />} />
          <Route path="/solution" element={<Solution />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
