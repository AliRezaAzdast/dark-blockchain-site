import { useRoutes } from "react-router-dom";
import routes from './routes/router.tsx'
import HeaderSection from "./sections/HeaderSection";
import FooterSection from "./sections/FooterSection";


function App() {
const router = useRoutes(routes)
  return (
    <>
      <HeaderSection/>
      {router}
      <FooterSection/>
    </>
  )
}

export default App
