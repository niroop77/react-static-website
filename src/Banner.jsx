import Header_img from "./assets/Header.jpg";
function Banner(){
    return(
        <>
        <div className="container-fluid px-0">
                <img
                  src={Header_img}
                  alt="Header"
                  className="img-fluid w-100 header-image"
                />
              </div>
        </>
    )
}
export default Banner;