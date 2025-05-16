
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './styles/hideBadge.css'

// PostHog initialization happens inside the App component
createRoot(document.getElementById("root")!).render(<App />);
