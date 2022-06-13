import {TableContainer} from "./components/Table/TableContainer";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

function App() {
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <TableContainer />
      </DndProvider>
    </div>
  );
}

export default App;
