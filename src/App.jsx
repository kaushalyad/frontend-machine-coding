import {
  useState,
  useContext,
  useMemo,
  useCallback,
  useReducer,
  useRef,
  lazy,
  Suspense,
  useEffect,
  useLayoutEffect,
} from "react";
import "./App.css";
import AutoComplete from "./components/AutoComplete";
import Form from "./components/Form";
import StarRating from "./components/StarRating";
import DropDown from "./components/DropDown";
import Home from "./pages/Home";
import ToggleButton from "./components/ToggleButton";
import { useTheme } from "./components/ThemeProvider";
import useFetch from "./components/useFetch";
import LargeListItems from "./components/LargeListItems";
import Parent from "./components/Parent";
import Child from "./components/Child";
import useCounter from "./components/useCounter";
import Size from "./components/Size";
import ViewInfiniteScroll from "./components/ViewInfiniteScroll";
import Debounce from "./components/Debounce";
import Throttle from "./components/Throttle";
import Css from "./components/Css.jsx";
const LazyHome = lazy(() => import("./pages/Home"));
import Modal from "./components/Modal.jsx";
import Accordian from "./components/Accordian.jsx";
import OneSecond from "./components/OneSecond.jsx";
import GridRemoval from "./components/GridRemoval.jsx";
import Carousel from "./components/Carousel.jsx";
import Navbar from "./components/Navbar.jsx";
import Pagination from "./components/Pagination.jsx";
import Input from "./components/Input.jsx";
import DarkMode from "./components/DarkMode.jsx";
import Weather from "./components/Weather.jsx";
import ProgressBar from "./components/ProgressBar.jsx";
import PopUp from "./components/PopUp.jsx";
import Like from "./components/Like.jsx";
import ToDo from "./components/ToDo.jsx";
import TicTacToe from "./components/TicTacToe.jsx";
import StopWatch from "./components/StopWatch.jsx";
import NestedComponent from "./components/NestedComponent.jsx";
import TestUseTimeOut from "./components/TestUseTimeOut.jsx";
import NestedCheckBox from "./components/NestedCheckBox.jsx";
import Render from "./components/Render.jsx";
import DigitalWatch from "./components/DigitalWatch.jsx";
import CustomSorting from "./components/CustomSorting.jsx";
import InlineBlock from "./components/InlineBlock.jsx";
import ProductList from "./components/productList.jsx";
import Toastify from "./components/Toastify.jsx";
import PollWidget from "./components/PollWidget.jsx";
import NestedFolder from "./components/NestedFolder.jsx";
import StyledComponent from "./components/StyledComponent.jsx";
import TrafficLight from "./components/TrafficLight.jsx";
import Position from "./components/Position.jsx";
import PaginationTable from "./components/PaginationTable.jsx";
import CalenderGenerator from "./components/CalenderGenerator.jsx";
import MemoryGame from "./components/MemoryGame.jsx";
import SelectableGrid from "./components/SelectableGrid.jsx";
import Tracker from "./components/Tracker.jsx";
import SubmitInfo from "./components/SubmitInfo.jsx";
function App() {
  // const { theme, toggleTheme } = useTheme();
  // console.log(theme + "theme");

  // const [count, setCount] = useState(0);
  // const [clickedButton, setClickedButton] = useState(0);
  // const { data, loading } = useFetch(
  //   "https://api.worldnewsapi.com/search-news?text=earth+quake&language=en&earliest-publish-date=2025-08-01"
  // );
  // if (!loading) console.log(data);
  // const initialStates = {
  //   val: 0,
  // };
  // const reducer = (state, action) => {
  //   switch (action.type) {
  //     case "increment":
  //       return { val: state.val + 1 };
  //     case "decrement":
  //       return { val: state.val - 1 };
  //     default:
  //       return state;
  //   }
  // };
  // const [state, dispatch] = useReducer(reducer, initialStates);
  // const increment = () => {
  //   setCount(count + 1);
  // };
  // const decrement = () => {
  //   setCount(count - 1);
  // };
  // const calculateTotalSum = (n) => {
  //   console.log(`you called me ${clickedButton}`);
  //   return (n * (n + 1)) / 2;
  // };
  // const sum = useCallback(() => calculateTotalSum(count), [count]);
  // const [counter, inc, dec] = useCounter();
  // console.log(sum());
  // const myRef = useRef(null);
  // const inputRef = useRef(null);
  // const audioRef = useRef(null);
  // const countRef = useRef(null);
  // const divData = () => {
  //   console.log(myRef.current);
  //   console.log(inputRef.current.focus());
  // };
  // const playAudio = () => {
  //   audioRef.current.play();
  // };
  // const stopAudio = () => {
  //   audioRef.current.pause();
  // };
  // console.log(
  //   "inside the parents",
  //   countRef?.current?.innerText || "not found"
  // );
  // useEffect(() => {
  //   console.log("use effect hook called");
  // });
  // console.log("app rendered");
  // useLayoutEffect(() => {
  //   console.log("use layout effect hook called");
  // });
  // const [total, setTotal] = useState([]);
  // const handleToastify = () => {
  //   const temp = [...total];
  //   temp.push(<Toastify stat={true} />);
  //   setTotal(temp);
  // }
  // console.log(total);
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      {/* <InfiniteScroll /> */}
      {/* <StarRating /> */}
      {/* <AutoComplete /> */}
      {/* <DarkMode /> */}
      {/* <button onClick={() => setCount((prev) => prev + 1)}>
        Increment Count
      </button>
      <Form name="kaushal" age={20} gender="male" count={count} />
      <DropDown /> */}
      {/* <ToggleButton onClick={toggleTheme} /> */}
      {/* <Home /> */}
      {/* <DropDown /> */}
      {/* <h1>count: {count}</h1>
      <div
        style={{
          display: "flex",
          gap: "6px",
          background: "yellow",
          width: "150px",
          justifyContent: "center",
          borderRadius: "10px",
        }}
      >
        <button onClick={decrement}>-</button>
        <div>counter</div>
        <button onClick={increment}>+</button>
      </div>
      </div>
      <span>{clickedButton}</span>
      <button onClick={() => setClickedButton(clickedButton + 1)}>
        Clicked Button
      </button>

      <h1>ReducerVal {state.val}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>
        Increase Reducer val
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>
        Decrease Reducer val{" "}
      </button>

      <p>useRef use</p>
      <div ref={myRef} onClick={divData}>
        useRef
      </div>
      <input ref={inputRef} onChange={divData}></input>
      <div>audio play</div>
      <audio controls ref={audioRef}>
        <source
          src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
          type="audio/mpeg"
        />
        Your browser does not support the audio element.
      </audio>
      <button onClick={playAudio}>play</button>
      <button onClick={stopAudio}>stop</button>
      <Suspense fallback=<div>Loading...</div>>
        <LazyHome />
      </Suspense> */}
      {/* <LargeListItems /> */}
      {/* <div>{`inside the parents ${
        countRef?.current?.innerText || "not found"
      }`}</div>
      <Parent />
      <Child ref={countRef} />
      <p>check that our counter works or not</p>
      <p>{counter}</p>
      <button onClick={inc}>inc</button>
      <button onClick={dec}>dec</button> */}
      {/* <Form /> */}
      {/* <Size /> */}
      {/* <ViewInfiniteScroll /> */}
      {/* <Debounce /> */}
      {/* <Throttle /> */}
      {/* <Css /> */}
      {/* <Accordian /> */}
      {/* <Modal /> */}
      {/* <OneSecond /> */}
      {/* <GridRemoval /> */}
      {/* <Carousel /> */}
      {/* <Navbar /> */}
      {/* <Pagination /> */}
      {/* <Input /> */}
      {/* <Weather /> */}
      {/* <ProgressBar /> */}
      {/* <PopUp /> */}
      {/* <Like /> */}
      {/* <ToDo /> */}
      {/* <TicTacToe /> */}
      {/* <StopWatch /> */}
      {/* <NestedComponent /> */}
      {/* <TestUseTimeOut /> */}
      {/* <NestedCheckBox /> */}
      {/* <Render /> */}
      {/* <DigitalWatch /> */}
      {/* <CustomSorting /> */}
      {/* <InlineBlock /> */}
      {/* <ProductList /> */}
      {/* <PollWidget /> */}
      {/* <NestedFolder /> */}
      {/* <StyledComponent /> */}
      {/* <TrafficLight /> */}
      {/* <Position /> */}
      {/* <PaginationTable rows={6} /> */}
      {/* {
        total.map((item, idx) => {
          return (item);
        })
      }
        
      <div onClick={handleToastify} style={{ backgroundColor: "green", color: "white", width: "150px", textAlign: "center", borderRadius: "5px", cursor: "pointer" }}>button Toastify</div> */}
      {/* <CalenderGenerator /> */}
      {/* <Toastify /> */}
      {/* <MemoryGame /> */}
      {/* <SelectableGrid /> */}
      <Tracker />
    </div>
  );
}

export default App;
