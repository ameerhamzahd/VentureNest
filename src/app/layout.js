import CaseStudies from "./Components/CaseStudies";
import Footer from "./Components/Footer";
import More from "./Components/More";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Services from "./Components/Services";
import "./globals.css";


export default function RootLayout() {
  return (
    <html lang="en" data-theme="light" class="scroll-smooth">
      <body>
        <header>
          <Navbar></Navbar>
        </header>

        <main>
          <Services></Services>
          <CaseStudies></CaseStudies>
          <Projects></Projects>
          <More></More>
        </main>

        <footer>
          <Footer></Footer>
        </footer>
      </body>
    </html>
  );
}
