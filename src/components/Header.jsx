
const Header = () => {
    return(
        <div>
            <div className='header'>
            <img src='https://rubixe.com/assets/img/logo/white-rubixe-logo.png' alt="img"/>
            <div className="nav">
            <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    {/* <p class="navbar-brand">Navbar</p> */}
    {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> */}
    <div  id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <p class="nav-link active" aria-current="page"style={{color:"white"}}>Home</p>
        </li>
        <li class="nav-item">
          <p class="nav-link active" aria-current="page"style={{color:"white"}}>services</p>
        </li>
        <li class="nav-item">
          <p class="nav-link active" aria-current="page"style={{color:"white"}}>products</p>
        </li>
        <li class="nav-item">
          <p class="nav-link active" aria-current="page"style={{color:"white"}} >Ai internship</p>
        </li>
        <li class="nav-item">
          <p class="nav-link active" aria-current="page"style={{color:"white"}} >career</p>
        </li>
        <li class="nav-item">
          <p class="nav-link active" aria-current="page"style={{color:"white"}} >Bolg</p>
        </li>
        <li class="nav-item">
          <p class="nav-link active" aria-current="page"style={{color:"white"}}>About</p>
        </li>
        <li class="nav-item">
          <p class="nav-link active" aria-current="page"style={{color:"white"}}>Contact</p>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
</div>
        </div>
        <div className='section'>
            <div className='content'>
            <span>TECH</span><br/>
            <span style={{fontSize:"20px"}}>FOR</span>
            <span>TEENS</span>
            </div>
            <div className="belowcontent">
                <span>CRAVING FUTURE</span><br/>
                <span>TECHNOLOGY PROFESSIONALS</span><br/>
                <span>OUT OF YOUNG MINDS</span><br/>
            </div>
        </div>
        </div>
    )
}

export default Header;
