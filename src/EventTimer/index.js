// react
import { useEffect } from 'react';
// zustand state management
import { useStore } from '../store';

// cycle to next animation every two seconds
export default function EventTimer () {
  const { playNext } = useStore((state) => state);

  useEffect(() => {
    const interval = setInterval(() => playNext(), 2000);
    return () => clearInterval(interval);
  },[playNext]);

  return null;
}