import React, {Component} from 'react';
import {Link} from "react-router-dom";
class Navbar extends Component {
  Logout = () => {
    localStorage.removeItem("Token");
    window.location = "/login_peracik"
  }
  render() {
    return (
      <div className="navbar navbar-expand-lg bg-dark navbar-dark">
        <button type="button" className="navbar-toggler navbar-toggler-right"
        data-toggle="collapse" data-target="#menu">
          <span className="navbar navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse" id="menu">
          <ul className="navbar-nav">
            {/*list menu */}
            <li className="navbar-item">
              <Link className="nav-link" to="/produk">Produk</Link>
            </li>
            <li className="navbar-item">
              <Link className="nav-link" to="/stok_bahan">Stok Bahan Baku</Link>
            </li>
            <li className="navbar-item">
              <Link className="nav-link" to="/pembeli">Pembeli</Link>
            </li>
            <li className="navbar-item">
              <Link className="nav-link" to="/pesanan">Data Pesanan</Link>
            </li>
            <li className="navbar-item">
              <a className="nav-link" onClick={this.Logout}>Logout</a>
            </li>

          </ul>
      </div>
    </div>
  );
  }
}

export default Navbar;
