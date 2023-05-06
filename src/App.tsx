import './App.css'
import FileExplorer from "./features/fileExplorer";

function App() {


    // function test(str: string) {
    //
    //     const _strLength = str.length;
    //
    //     const leftStr = str.slice(0, _strLength / 2)
    //     const rightStr = str.slice(_strLength / 2)
    //
    //     console.log(leftStr, rightStr, rightStr === leftStr);
    // }
    //
    // test('abcabc');

    return (
        <div className="App">
            <FileExplorer/>
        </div>
    )
}

export default App
