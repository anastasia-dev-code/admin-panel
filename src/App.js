import {TableContainer} from "./components/Table/TableContainer";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import MenuForm from "./components/MenuForm";
import {useState} from "react";

function App() {
    const [menuRow, setMenuRow] = useState([])

    const createMenuRow = (newMenuRow) => {
        setMenuRow([...menuRow, newMenuRow])
    }

  return (
    <div className="App">
      <MenuForm create={createMenuRow}/>
      <DndProvider backend={HTML5Backend}>
        <TableContainer />
      </DndProvider>
    </div>
  );
}

export default App;
