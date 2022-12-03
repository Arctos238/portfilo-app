import "./Header.css";

const Header = (props) => {
  return (
    <header class="text-white bg-dark">
      <div class="container py-5">
        <div class="row">
          <div class="col-xs-3 col-lg-2 text-center">
            <img
              src="https://www.seekpng.com/png/detail/110-1100707_person-avatar-placeholder.png"
              alt="Person - Avatar Placeholder@seekpng.com"
              class="border border-5 rounded-circle img-fluid"
              style={{ width: "150px", height: "150px" }}
            />
          </div>
          <div class="col text-center text-lg-start">
            <h1>{props.name}</h1>

            <p class="lead">
              Software development student at SAIT (Southern Alberta Institute
              of Technology).
            </p>

            <ul class="list-inline">
              <li class="list-inline-item my-2">
                <a
                  href="https://www.linkedin.com/in/jacque-pointer-a41536208/"
                  class="fs-5 link-light text-decoration-none"
                >
                  <i class="bi bi-linkedin pe-1"></i>
                  LinkedIn
                </a>
              </li>
              <li class="list-inline-item my-2">
                <a
                  href="https://github.com/Arctos238"
                  class="fs-5 link-light text-decoration-none"
                >
                  <i class="bi bi-github pe-1"></i>
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
