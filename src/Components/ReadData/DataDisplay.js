import CardTable from "../Cards/CardTable";
import CardView from "../Cards/CardView";
import React, { useState, useEffect } from "react";

function App() {
  const [view, setView] = useState(true);
  function changeView() {
    if (view) {
      setView(false);
    } else {
      setView(true);
    }
  }

  return (
    <div>
      <section
        id="Home"
        className="header relative pt-16 items-center flex h-screen max-h-860-px"
      >
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4 pb-20">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-blueGray-600">
                DevBros Assignment
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                Click the button below for a freash view
              </p>
              <div className="mt-12" onClick={() => changeView()}>
                <div
                  class="github-star shadow-sm ml-1 text-white font-bold px-6 py-4 rounded outline focus:outline-blueGray-700 mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                  target="_blank"
                  onClick={() => changeView()}
                  style={{ borderRadius: "10px" }}
                >
                  <div
                    onClick={() => changeView()}
                    style={{
                      borderRadius: "10px",
                      margin: "-10px",
                      marginLeft: "-18px",
                      marginRight: "-18px",
                    }}
                    class="get-started shadow-lg text-white font-bold px-6 py-4 rounded outline focus:outline-none shadow-lg bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                  >
                    <span onClick={() => changeView()}>Checkout</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <img
          className="absolute top-0 b-auto right-0 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860px"
          draggable="false"
          src="https://imagedelivery.net/TPSB6oBX8Ak5uPQaBY3C8A/3f950486-9c9a-4fc1-6935-71c9a8d8c000/public"
          alt="..."
        />
      </section>

      <section className="relative py-10 -mt-64 pb-64">
        <div className="mx-auto px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg ">
            <div className="px-6">
              <div className="text-center mt-12">
                <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                  Manage Data
                </h3>
                {view && (
                  <div className="flex flex-wrap mt-4">
                    <div className="w-full mb-12 px-4">
                      <CardTable />
                    </div>
                  </div>
                )}
                {view == false && (
                  <div className="flex flex-wrap mt-4">
                    <div className="w-full mb-12 px-4">
                      <CardView />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
