import { logo } from '../assets'

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
        <nav className="flex justify-between imtens-center w-full mb-10 pt-3">
            <img src={logo} alt="sumz_logo" className="w-28 object-contain"/>
            <button
                type="button"
                onClick={() => window.open('https://github.com/dnxsi')}
                className="black_btn"
            >   
                GitHub
            </button>
        </nav>
        <h1 className="head_text">
            Artikel Zusammenfassen mit <br className="max-md:hidden"/>
            <span className="orange_gradient">ChatGPT</span>
        </h1>
        <h2 className="desc">
            Artikel schneller lesen mit Summize, einem Open-Source-Zusammenfassungsprogramm, dass lange Artikel in klare und prägnante Zusammenfassungen verwandelt.
        </h2>
    </header>
  )
}

export default Hero