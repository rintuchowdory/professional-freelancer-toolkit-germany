/* =============================================================
   App.tsx — Router & Layout Shell
   Design: Neue Sachlichkeit — IBM Plex Sans, amber-gold accent
   All routes wrapped in DashboardLayout
   ============================================================= */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import DashboardLayout from "./components/DashboardLayout";
import DashboardHome from "./pages/DashboardHome";
import InvoiceGenerator from "./pages/InvoiceGenerator";
import KleinunternehmerChecker from "./pages/KleinunternehmerChecker";
import VatReminders from "./pages/VatReminders";
import ElsterHelper from "./pages/ElsterHelper";
import ExpenseCategorization from "./pages/ExpenseCategorization";
import CrmContacts from "./pages/CrmContacts";
import Settings from "./pages/Settings";

function Router() {
  return (
    <DashboardLayout>
      <Switch>
        <Route path="/" component={DashboardHome} />
        <Route path="/invoices" component={InvoiceGenerator} />
        <Route path="/kleinunternehmer" component={KleinunternehmerChecker} />
        <Route path="/vat-reminders" component={VatReminders} />
        <Route path="/elster" component={ElsterHelper} />
        <Route path="/expenses" component={ExpenseCategorization} />
        <Route path="/contacts" component={CrmContacts} />
        <Route path="/settings" component={Settings} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </DashboardLayout>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light" switchable>
        <TooltipProvider>
          <Toaster richColors position="top-right" />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
