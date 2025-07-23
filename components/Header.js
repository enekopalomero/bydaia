import LanguageSwitcher from './LanguageSwitcher';

export default function Header({ locale, setLocale }) {
  return (
    <header>
      <h2>ByDaia Travel</h2>
      <LanguageSwitcher locale={locale} setLocale={setLocale} />
    </header>
  );
}