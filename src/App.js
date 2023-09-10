import './App.css';
import Index from './Page/Index';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './Page/Home';
import Token from './Page/Token';
import Whitepaper from './Page/Whitepaper';
import Partners from './Page/Partners';
import Whlx from './Page/Whlx'

function App() {
	return (
	 <>
<BrowserRouter>

<Routes>
	<Route path="/" element= {<Index />} >
	<Route index path="/" element= {<Home />} />
	<Route  path="/token" element= {<Token />} />
	<Route  path="/whitepaper" element= {<Whitepaper />} />
	<Route  path="/whlx" element= {<Whlx />} />
	<Route  path="/partners" element= {<Partners />} />
	</Route>
</Routes>
</BrowserRouter>
	 </>
	);
}

export default App;
