import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { SmoothCursor } from '../components/ui/smooth-cursor';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <>
    <App />
    <SmoothCursor />
  </>
);
