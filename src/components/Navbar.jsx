import React from 'react';
import { Input } from './form/Input';
function Navbar() {
	return (
		<>
			<nav className="navbar bg-primary">
				<div className="container-fluid">
					<a className="navbar-brand text-white fw-bold">Aplikasi Catatanku</a>
					<form className="d-flex" role="search">
						<Input type="search" placeholder="cari catatan ..." id="search" />
					</form>
				</div>
			</nav>
		</>
	)
}

export default Navbar;