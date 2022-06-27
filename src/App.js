import TableContainer from "./components/Table/TableContainer";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import MenuForm from "./components/MenuForm";
import {useEffect, useRef, useState} from "react";
import MyModal from "./components/UI/Modal/MyModal";
import MyButton from "./components/UI/MyButton/MyButton";

function App() {
    const [menuRows, setMenuRow] = useState([])
    const [modal, setModal] = useState(false)
    const cbRef = useRef(null)

    const onAddRow = (newMenuRow, callback) => {
        setMenuRow([...menuRows, newMenuRow]);
        cbRef.current = callback;
        setModal(false)
    }

    useEffect(() => {
        if (typeof cbRef.current === 'function') {
            cbRef.current(menuRows);
            cbRef.current = null;
        }
    }, [menuRows]);

  return (
    <div className="App">
        <MyButton onClick={() => setModal(true)}>
            Add
        </MyButton>
        <MyModal visible={modal} setVisible={setModal}>
            <MenuForm onAddRow={onAddRow}/>
        </MyModal>
        <DndProvider backend={HTML5Backend}>
            <TableContainer key={Math.floor(Math.random() * (1000000 - 1)) + 1} menuRows={menuRows} />
         </DndProvider>
    </div>
  );
}

export default App;
