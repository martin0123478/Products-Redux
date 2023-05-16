

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
        <div className="container">
            <h1>CRUD -  React,Redux, REST API & Axios</h1>
            <a className="btn btn-danger nuevo-post d-block d-block d-md-inline-block"
             href="/productos/nuevo">Agregar producto &#43;</a>
        </div>
    </nav>
  )
}

export default Header
