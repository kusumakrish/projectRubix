
const Header = () => {
    return(
        <div>
            <div className='header'>
            <img src='https://rubixe.com/assets/img/logo/white-rubixe-logo.png'/>
            <div className="nav">
            <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    {/* <a class="navbar-brand" href="#">Navbar</a> */}
    {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> */}
    <div  id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page"style={{color:"white"}} href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page"style={{color:"white"}} href="#">services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page"style={{color:"white"}} href="#">products</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page"style={{color:"white"}} href="#">Ai internship</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page"style={{color:"white"}} href="#">career</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page"style={{color:"white"}} href="#">Bolg</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page"style={{color:"white"}} href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page"style={{color:"white"}} href="#">Contact</a>
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