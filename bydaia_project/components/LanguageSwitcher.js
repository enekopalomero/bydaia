export default function LanguageSwitcher({ locale, setLocale }) {
  return (
    <select value={locale} onChange={e => setLocale(e.target.value)}>
      <option value="es">Español</option>
      <option value="en">English</option>
    </select>
  );
}