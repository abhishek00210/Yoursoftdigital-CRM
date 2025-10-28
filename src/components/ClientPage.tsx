// src/components/ClientPage.tsx
import { useState } from 'react';
import ClientList from './ClientList';
import AddClient from './AddClient';

export default function ClientPage() {
  const [view, setView] = useState<'list' | 'form'>('list');

  if (view === 'form') {
    return <AddClient onCancel={() => setView('list')} />;
  }

  // Default view is 'list'
  return <ClientList onAddClient={() => setView('form')} />;
}