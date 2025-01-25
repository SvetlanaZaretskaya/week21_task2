import logo from './logo.svg';
import './App.css';
import { Chart } from "react-google-charts";

function App() {
  return (
    <div className="App">
      <Chart
      // Try different chart types by changing this property with one of: LineChart, BarChart, AreaChart...
      chartType="ScatterChart"
      data={[
        ["Age", "Weight"],
        [4, 16],
        [8, 25],
        [12, 40],
        [16, 55],
        [20, 70],
      ]}
      options={{
        title: "Average Weight by Age",
      }}
      legendToggle
    />
    </div>
  );
}

export default App;
