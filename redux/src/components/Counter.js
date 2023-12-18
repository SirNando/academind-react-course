import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counter-slice";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(5));
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// If using class-based components, we use this syntax to return
/* class Counter extends Component {
  incrementHandler = () => {
    this.props.increment();
  };
  decrementHandler = () => {
    this.props.decrement();
  };
  toggleCounterHandler = () => {};

  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div>
          <button onClick={incrementHandler.bind(this)}>Increment</button>
          <button onClick={decrementHandler.bind(this)}>Decrement</button>
        </div>
        <button onClick={toggleCounterHandler}>Toggle Counter</button>
      </main>
    );
  }
}

// For class-based components, we use these functions in stead of useDispatch and useSelector
const mapStateToProps = (state) => {
  // Equivalent to useSelector
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  // Equivalent to useDispatch
  return {
    increment: () => dispatch({ type: "increment" }),
    decrement: () => dispatch({ type: "decrement" }),
  };
};

// connect() will return a function, which will then take "Counter" as an argument
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
 */
