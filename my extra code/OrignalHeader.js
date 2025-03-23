function Header() {
  return (
    <>
      <div name="Main div" className=" w-full h-16 bg-amber-100  ">
        <div
          name="container"
          className="flex h-full justify-center items-center"
        >
          <div className="h-1/2  w-1/2 flex justify-center items-center">
            <div className="w-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="c-cZuCZG c-cZuCZG-gtZKQU-size-large c-cZuCZG-dmsdwv-rotate-up c-cZuCZG-ilgongE-css"
              >
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  d="M14.1 5.99999H20M14.1 12H20M4 18H20M5.15 5.99999H8.73C9.36513 5.99999 9.88 6.51486 9.88 7.14999V10.79C9.88 11.4251 9.36513 11.94 8.73 11.94H5.15C4.51487 11.94 4 11.4251 4 10.79V7.14999C4 6.51486 4.51487 5.99999 5.15 5.99999Z"
                  stroke="#30363C"
                  stroke-width="1.4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
            <div className=" w-36">
              <img src="./public/images/logo-.svg" alt="" />
            </div>
          </div>
          {/**         <div className="h-1/2 w-1/3  bg-red-600 flex justify-center items-center">
            2
          </div> */}
          <div className="h-1/2 w-1/2  flex justify-end items-center gap-8 mr-2 ">
            <div className="h-full w-6 ">
              <img
                src="./public/images/wolframalpha-svgrepo-com.svg"
                alt="cart"
              />
            </div>
            <div className="h-full w-6 ">
              <img
                src="./public/images/cart-shopping-fast-svgrepo-com.svg"
                alt="cart"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
