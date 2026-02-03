import { useState } from 'react';
import { AppShell } from './components/layout/AppShell';
import { ThemeProvider } from './context/ThemeContext';

// Views
import { Dashboard } from './views/Dashboard';
import { Documents } from './views/Documents';

function App() {
  const [activeView, setActiveView] = useState('dashboard');

  const renderView = () => {
    switch (activeView) {
      case 'dashboard': return <Dashboard />;
      case 'documents': return <Documents />;
      default: return <Dashboard />; // Default fallback
    }
  };

  return (
    <ThemeProvider>
      <AppShell activeView={activeView} onNavigate={setActiveView}>
        {renderView()}
      </AppShell>
    </ThemeProvider>
  );
}

export default App;
