import { Link } from "react-router-dom"
import "./styles/notfound.css"

export const NotFound = () => {
  return (
    <>
      <div>
        <div className="starsec"></div>
        <div className="starthird"></div>
        <div className="starfourth"></div>
        <div className="starfifth"></div>
      </div>

      <div className="lamp__wrap">
        <div className="lamp">
          <div className="cable"></div>
          <div className="cover"></div>
          <div className="in-cover">
            <div className="bulb"></div>
          </div>
          <div className="light"></div>
        </div>
      </div>
      <section className="error">
        <div className="error__content">
          <div className="error__message message">
            <h1 className="message__title">
              Error "404" - Page Not Found
            </h1>
            <p className="message__text">
              Please Go back to the KDS App
            </p>
          </div>
          <div className="error__nav e-nav">
            <Link to="/" className="e-nav__link" />
          </div>
        </div>
      </section>
    </>
  )
}
