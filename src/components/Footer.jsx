import Container from "./ui/Container";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <Container className="site-footer__inner">
        <a className="site-footer__brand" href="#home" aria-label="Return to homepage">
          VARUN.R
        </a>
        <span className="site-footer__descriptor">Software Engineer</span>
        <span className="site-footer__copyright">&copy; {year} Varun Rajguru</span>
        <a className="site-footer__top" href="#home">
          BACK TO TOP <span aria-hidden="true">↑</span>
        </a>
      </Container>
    </footer>
  );
}
