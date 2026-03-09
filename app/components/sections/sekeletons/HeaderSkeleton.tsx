import "../../../styles/HeaderSkeleton.scss";

export default function HeaderSkeleton() {
  return (
    <header className="header-skeleton" aria-hidden="true">
      <div className="header-skeleton__logo-wrap">
        <div className="header-skeleton__logo sk" />
        <div className="header-skeleton__version sk" />
      </div>

      <nav className="header-skeleton__nav">
        <div className="header-skeleton__item sk" />
        <div className="header-skeleton__item sk" />
        <div className="header-skeleton__item sk" />
        <div className="header-skeleton__item sk" />
        <div className="header-skeleton__item sk" />
      </nav>

      <div className="header-skeleton__search sk" />
    </header>
  );
}
