import "../../../styles/HeaderSkeleton.scss";
import kotlinLogo from "/images/favicon.svg";

export default function HeaderSkeleton() {
  return (
    <header className="header-skeleton" aria-hidden="true">
      <div className="header-skeleton__logo-wrap">
        <img className="header-skeleton__logo" src={kotlinLogo} alt="Kotlin Logo" />
        <div className="header-skeleton__version sk" />
      </div>

      <nav className="header-skeleton__nav">
        <div className="header-skeleton__item sk" />
        <div className="header-skeleton__item sk" />
        <div className="header-skeleton__item sk" />
        <div className="header-skeleton__item sk" />
        <div className="header-skeleton__item sk" />
      </nav>

    </header>
  );
}
