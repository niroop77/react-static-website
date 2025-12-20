import Header_img from "./assets/Header.jpg";

function Banner(props){
    return(
        <>
        <div className="container-fluid px-0">
            <div
              className="banner-section d-flex align-items-center text-white"
              style={{
                backgroundImage: `url(${Header_img})`,
                height: "200px",
              }}
            >
              {/* Content Wrapper */}
              <div className="container text-start">
                <h1 className="mb-1">
                  {props.title}
                </h1>

                {/* Breadcrumbs */}
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                      <a
                        href="/"
                        className="text-white text-decoration-none"
                      >
                        Home
                      </a>
                    </li>
                    <li
                      className="breadcrumb-item active text-white"
                      aria-current="page"
                    >
                      {props.title}
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
        </div>
        </>
    )
}

export default Banner;
