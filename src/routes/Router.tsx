import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chart from "./Chart";

import Coin from "./Coin";
import Coins from "./Coins";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Coins />}></Route>
        <Route path="/:coinId/*" element={<Coin />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
/*

<Routes>
            <Route path="/:coinId/chart" element={<Chart />} />
          </Routes>

*/
