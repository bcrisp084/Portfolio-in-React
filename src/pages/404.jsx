export default function Erorrpage() {
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <h2>404 Not Found</h2>
      <p>Sorry, an unexpected error has occurred. </p>
      <p>
        Please try refreshing the page, or click the button below to return to
        the homepage.
      </p>
      <a href="/" className="btn btn-primary">
        Return to Homepage
      </a>
    </div>
  );
}
