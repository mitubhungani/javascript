const nav = () => {
  return `
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <link rel="stylesheet" href="../components/navbar.css">

  <nav id="main">
  <input type="checkbox" id="check">
  <label for="check" class="checkbtn">
      <i class="fas fa-bars"></i>
  </label>
  <label class="logo">DesignX</label>
  <ul>
      <li><a class="active" href="../html/index.html">New Arrivals</a></li>
      <li><a href="../html/men.html">Product</a></li>
      <li><a href="../html/signin.html">Sign in</a></li>
      <li id="search-main"><input class="search" placeholder="Search" type="search"><a href="#" class="no"><i id="search-btn" class="fa-solid fa-magnifying-glass fa-lg"></i></a></li>
      <li><a href="../html/cart.html"><i class="fa-solid fa-bag-shopping fa-lg"></i></a></li>
  </ul>
</nav>`;
};
export default nav;