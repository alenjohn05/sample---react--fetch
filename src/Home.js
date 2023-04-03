import React, { useReducer, useEffect } from "react";

const initialState = { loading: false, responseData: null, error: null };

function reducer(state, action) {
  switch (action.type) {
    case "LOADING": //PENDING
      return { loading: true };
    case "SUCCESS": //rESOLVED sTATE
      return { loading: false, responseData: action.payload };
    case "ERROR": // Rejected
      return { loading: false, error: action.payload, responseData: null };
    default:
      return state;
  }
}

const Home = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getdata = async () => {
    dispatch({ type: "LOADING" });
    try {
      const response = await fetch("http://localhost:5000/blogs");
      const newData =await response.json();
      dispatch({ type: "SUCCESS", payload: newData.data });
    } catch (error) {
      dispatch({ type: "ERROR", payload: "Internal Server Error" });
    }
  };

  useEffect(() => {
    getdata();
  }, []);


  return (
    <>
      <div>Blog App</div>

      {state.loading ? (
        <div> <h1>loading....</h1></div>
      ) : (
        <>
        {console.log(state.responseData)}
          {state.responseData
            ? state.responseData?.map((each, index) => (
                <div key={index} className="card p-4">
                  {console.log(each)}
                  <div>
                    <h3>{each.title}</h3>
                  </div>
                  <div>
                    <p>Author:{each.author}</p>
                  </div>
                </div>
              ))
            : null}
        </>
      )}
      <hr />
    </>
  );
};

export default Home;
