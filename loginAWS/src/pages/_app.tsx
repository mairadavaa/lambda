import "../../styles/index.css"
import Context from "../context/context"

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
    <Context>

    <Component {...pageProps} />
    </Context>
    </>
  )
}