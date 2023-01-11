import React, { useState, useEffect, useRef } from "react";

export default function TableDropdown({ ID, SetData }) {
  const [showModal, setShowModal] = useState(false);
  const [make, setMake] = useState(null);
  const [modal, setModal] = useState(null);
  const [year, setYear] = useState(null);
  const [showEdit, setShowEdit] = useState(false);

  function changeMake(e) {
    setMake(e.target.value);
  }
  function changeModal(e) {
    setModal(e.target.value);
  }
  function changeYear(e) {
    setYear(e.target.value);
  }

  function changeViewUpdate() {
    setShowEdit(true);
  }
  function changeDelete() {
    var obj = {
      todo_id: ID,
    };

    //POST API options
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    };

    //fetch method to post data to mongodb
    fetch(
      "https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/testing-skqpg/service/myProfileApi/incoming_webhook/delete",
      options
    )
      .then((data) => {
        if (!data.ok) {
          throw Error(data.status);
        }
        return data.json();
      })
      .then((registered) => {
        console.log(registered);
      })
      .catch((e) => {
        console.log(e);
      });

    setShowModal(false);
  }

  function editDataSet() {
    var tempYear = parseInt(year);
    var obj = {
      todo_id: ID,
      Make: make,
      Model: modal,
      Year: tempYear,
    };
    if (!make) {
      obj = {
        todo_id: ID,
        Model: modal,
        Year: tempYear,
      };
    }
    if (!modal) {
      obj = {
        todo_id: ID,
        Make: make,
        Year: tempYear,
      };
    }
    if (!year) {
      obj = {
        todo_id: ID,
        Make: make,
        Model: modal,
      };
    }
    if (!make && !modal) {
      obj = {
        todo_id: ID,
        Year: tempYear,
      };
    }
    if (!modal && !year) {
      obj = {
        todo_id: ID,
        Make: make,
      };
    }
    if (!make && !year) {
      obj = {
        todo_id: ID,
        Model: modal,
      };
    }
    //POST API options
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    };
    //KTM
    //450 SMR
    //2021

    //fetch method to post data to mongodb
    fetch(
      "https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/testing-skqpg/service/myProfileApi/incoming_webhook/apiEdit",
      options
    )
      .then((data) => {
        if (!data.ok) {
          throw Error(data.status);
        }
        return data.json();
      })
      .then((registered) => {
        console.log(registered);
      })
      .catch((e) => {
        console.log(e);
      });

    try {
      fetch(
        "https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/testing-skqpg/service/myProfileApi/incoming_webhook/api"
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          debugger;
          SetData(data);
          console.log("Hit: ", data);
        });
    } catch (error) {}

    setYear("");
    setModal("");
    setMake("");

    setShowModal(false);
  }
  return (
    <>
      <button
        className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Options
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Options</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 ">
                  <div>
                    {showEdit == false && (
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => changeViewUpdate()}
                      >
                        Update
                      </button>
                    )}
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => changeDelete()}
                    >
                      Delete
                    </button>
                  </div>
                  {showEdit && (
                    <table>
                      <tr>
                        <th>Edit Make</th>
                        <th>Edit Modal</th>
                        <th>Edit Year</th>
                      </tr>
                      <tbody>
                        <tr>
                          <td>
                            <form className="md:flex flex-row flex-wrap lg:ml-auto mr-3">
                              <input
                                type="text"
                                placeholder="Edit Make here..."
                                onChange={changeMake}
                                value={make}
                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
                              />
                            </form>
                          </td>
                          <td>
                            <form className="md:flex flex-row flex-wrap lg:ml-auto mr-3">
                              <input
                                type="text"
                                placeholder="Edit Modal here..."
                                onChange={changeModal}
                                value={modal}
                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
                              />
                            </form>
                          </td>
                          <td>
                            <form className="md:flex  flex-row flex-wrap lg:ml-auto mr-3">
                              <input
                                type="text"
                                placeholder="Edit Year here..."
                                onChange={changeYear}
                                value={year}
                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
                              />
                            </form>
                          </td>

                          <td>
                            <button
                              className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="button"
                              onClick={() => editDataSet()}
                            >
                              Save Changes
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  )}
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
