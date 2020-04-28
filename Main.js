import React, {Component} from "react";
import {Switch, Route} from "react-router-dom";

// load navbar
import Navbar from "./component/Navbar";
//load halaman
import LoginPembeli from "./page/LoginPembeli";
import LoginPeracik from "./page/LoginPeracik";
import Produk from "./page/Produk";
import StokBahan from "./page/StokBahan";
import Pesanan from "./page/Pesanan";
import Pembeli from "./page/Pembeli";

class Main extends Component {
    render = () => {
      return (
        <Switch>
          {/* Load component tiap halaman */}
          <Route path="/login_peracik" component={LoginPeracik} />
          <Route path="/produk">
            <Navbar />
            <Produk />
          </Route>
          <Route path="/stok_bahan">
            <Navbar />
            <StokBahan />
          </Route>
          <Route path="/pesanan">
            <Navbar />
            <Pesanan />
          </Route>
          <Route path="/pembeli">
            <Navbar />
            <Pembeli />
          </Route>
          <Route path="/login_pembeli" component={LoginPembeli} />

        </Switch>
      );
    }
}
export default Main;
