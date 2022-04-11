import Header from '../header/header';

export default function NotFoundPage(): JSX.Element{
  return(
    <>
      <section className="film-card">

        <h1 className="visually-hidden">WTW</h1>

        <Header />

      </section>

      <div className="page-content">
        <div>Page is not found</div>
        <br/>
        Please return to <a className="home-page__link" href="/">home page</a>
        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
