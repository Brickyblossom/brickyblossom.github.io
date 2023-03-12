class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <header>
            <div class="site-title">
                <h1><b>brickyblossom's blag</b></h1>
            </div>
            <div class="menus">
                <a class="btn btn-primary menu-item" href="/index.html">Home</a>
                <a class="btn btn-primary menu-item" href="/pages/posts.html">Posts</a>
                <div class="dropdown menu-item">
                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        About
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="/pages/information.html">Information</a></li>
                        <li><a class="dropdown-item" href="#">Contacts</a></li>
                    </ul>
                </div>
                
            </div>
        </header>
      `;
    }
  }
  
  customElements.define('header-component', Header);