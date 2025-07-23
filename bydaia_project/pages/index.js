import { useState } from 'react';
import Header from '../components/Header';
import PackageCard from '../components/PackageCard';
import { translations } from '../utils/translations';

export default function Home() {
  const [locale, setLocale] = useState('es');
  const t = translations[locale];

  return (
    <div>
      <Header locale={locale} setLocale={setLocale} />
      <main>
        <h1>{t.title}</h1>
        <PackageCard price="€499" rating="8.5" stars="4" />
        <PackageCard price="€399" rating="7.8" stars="3" />
        <PackageCard price="€599" rating="9.1" stars="5" />
      </main>
    </div>
  );
}