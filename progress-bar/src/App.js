import React from "react";
import "./styles.css";
import ProgressBar from "./components/progressBar";

export default function App() {
  const [value, setValue] = React.useState(1);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setValue((prevValue) => {
        if (prevValue >= 100) {
          clearInterval(timer);
          return prevValue;
        }
        return prevValue + 1;
      });
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const onComplete = () => {
    setLoading(false);
  };

  return (
    <div className="App">
      <div className="progressBar">
        <span>Progress Bar</span>
        <ProgressBar value={value} onComplete={onComplete} />
        <span>{loading ? "loading..." : "Complete"}</span>
      </div>
    </div>
  );
}
