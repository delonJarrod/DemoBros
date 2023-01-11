import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import TableDropdown from "../Cards/TableDropdown";

export default function CardView() {
  const [data, SetData] = useState(null);
  const [userTemp, SetUserTemp] = useState(null);
  const [search, setSearch] = useState();

  useEffect(() => {
    try {
      fetch(
        "https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/testing-skqpg/service/myProfileApi/incoming_webhook/api"
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          SetData(data);
          SetUserTemp(data);
          console.log(data);
        });
    } catch (error) {}
  }, []);

  function keyUpSearch(e) {
    var temp = e.target.value;
    var temp2;
    if (temp.length > 1) {
      temp2 = data.filter(
        (x) =>
          x.Description.toLowerCase().includes(temp.toLowerCase()) ||
          x.Terrain.toLowerCase().includes(temp.toLowerCase()) ||
          x.Displacement.$numberInt.toString().includes(temp) ||
          x.Year.$numberInt.toString().includes(temp) ||
          x.BikeID.$numberInt.toString().includes(temp) ||
          x.Price.$numberInt.toString().includes(temp)
      );
    } else {
      temp2 = userTemp;
    }
    SetData(temp2);
  }

  return (
    <>
      <div>
        {/* Form */}
        <form className="md:flex  flex-row flex-wrap items-center lg:ml-auto mr-3 min-w-500 md:min-w-350 pb-5">
          <div className="relative flex w-full flex-wrap items-stretch">
            <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
              <i className="fas fa-search"></i>
            </span>
            <input
              type="text"
              placeholder="Search here..."
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
              onKeyUp={keyUpSearch}
              value={search}
            />
          </div>
        </form>
      </div>
      <div className="flex flex-wrap">
        {data &&
          data.map((item) => (
            <div key={item._id.$oid}>
              <div
                key={item.ID}
                style={{ width: "450px" }}
                className="relative w-450 newmaxWith py-3 break-words px-2 mb-6 rounded hover:bg-dark-700"
              >
                <div
                  style={{ height: "450px" }}
                  className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg "
                >
                  <div className="flex flex-wrap p-3 w-full bg-white">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        className="bi bi-bug animate-bounce"
                        viewBox="0 0 16 16"
                        id="IconChangeColor"
                      >
                        <path
                          d="M4.355.522a.5.5 0 0 1 .623.333l.291.956A4.979 4.979 0 0 1 8 1c1.007 0 1.946.298 2.731.811l.29-.956a.5.5 0 1 1 .957.29l-.41 1.352A4.985 4.985 0 0 1 13 6h.5a.5.5 0 0 0 .5-.5V5a.5.5 0 0 1 1 0v.5A1.5 1.5 0 0 1 13.5 7H13v1h1.5a.5.5 0 0 1 0 1H13v1h.5a1.5 1.5 0 0 1 1.5 1.5v.5a.5.5 0 1 1-1 0v-.5a.5.5 0 0 0-.5-.5H13a5 5 0 0 1-10 0h-.5a.5.5 0 0 0-.5.5v.5a.5.5 0 1 1-1 0v-.5A1.5 1.5 0 0 1 2.5 10H3V9H1.5a.5.5 0 0 1 0-1H3V7h-.5A1.5 1.5 0 0 1 1 5.5V5a.5.5 0 0 1 1 0v.5a.5.5 0 0 0 .5.5H3c0-1.364.547-2.601 1.432-3.503l-.41-1.352a.5.5 0 0 1 .333-.623zM4 7v4a4 4 0 0 0 3.5 3.97V7H4zm4.5 0v7.97A4 4 0 0 0 12 11V7H8.5zM12 6a3.989 3.989 0 0 0-1.334-2.982A3.983 3.983 0 0 0 8 2a3.983 3.983 0 0 0-2.667 1.018A3.989 3.989 0 0 0 4 6h8z"
                          id="mainIconPathAttribute"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h1 className="text-2xl px-4">
                        Bike ID: #
                        {item.BikeID.$numberInt && item.BikeID.$numberInt}
                      </h1>
                    </div>
                  </div>

                  <div className="bg-white flex flex-row">
                    <div className="p-4 text-left">
                      <h5 className="text-md tracking-tight text-gray-900 bg-white rounded-lg">
                        Make: {item.Make && item.Make}
                      </h5>
                      <h5 className="text-md tracking-tight text-gray-900 bg-white rounded-lg">
                        Modal: {item.Model && item.Model}
                      </h5>
                    </div>

                    <div className="p-4 text-left">
                      <h5 className="text-md tracking-tight text-gray-900 bg-white rounded-lg">
                        Year: {item.Year.$numberInt && item.Year.$numberInt}
                      </h5>
                      <h5 className="text-md tracking-tight text-gray-900 bg-white rounded-lg">
                        Price: R{item.Price.$numberInt && item.Price.$numberInt}
                      </h5>
                    </div>
                  </div>
                  <div className="p-4 text-left">
                    <h5 className="text-md tracking-tight text-gray-900 bg-white rounded-lg">
                      {item.Terrain && item.Terrain}
                    </h5>
                  </div>

                  <div
                    className="p-4 text-left"
                    style={{ height: "150px", overflow: "auto" }}
                  >
                    <h5 className="text-xs tracking-tight text-gray-900 bg-white rounded-lg">
                      {item.Description && item.Description}
                    </h5>
                  </div>

                  <div className="bg-white" id="tasks">
                    <div
                      className="px-4 pb-4  rounded-lg md:p-8 bg-white"
                      id="about"
                      role="tabpanel"
                      aria-labelledby="about-tab"
                    >
                      <p className="mb-3 bg-white text-gray-500 dark:text-gray-400 truncate hover:text-clip">
                        {/* {item.description.substring(0, 50)} ... */}
                      </p>
                      <div className="bg-white flex flex-row">
                        <div className="">
                          <TableDropdown ID={item._id.$oid} SetData={SetData} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
