import { useState } from "react";
import LeftSideBar from "./components/LeftSideBar.jsx";
import MakingProjectPage from "./components/MakingProjectPage.jsx";

function App() {
    const [statusAddProject, setStatusAddProject] = useState(false);

    function handleAddProjectBtn() {
        setStatusAddProject((preStatus) => !preStatus);
    }

    const [savedSts, setSavedSts] = useState([]);

    function handleSaveBtn() {
        let title = document.querySelector("input[name='title']").value;
        let descrption = document.querySelector(
            "input[name='descrption']"
        ).value;
        let dueDate = document.querySelector("input[name='dueDate']").value;

        if (title.trim() == "") {
            alert("타이틀 미입력");
            return false;
        }
        if (descrption.trim() == "") {
            alert("내용 미입력");
            return false;
        }
        if (dueDate.trim() == "") {
            alert("날짜 미입력");
            return false;
        }

        const currentSts = {
            title: title,
            descrption: descrption,
            dueDate: dueDate,
        };

        setSavedSts((prev) => {
            const returnSts = [...prev];
            returnSts.push(currentSts);
            return returnSts;
        });

    }

    return (
        <>
            <div className="flex">
                <div className="object-left mx-10">
                    <LeftSideBar handleAddProjectBtn={handleAddProjectBtn} />
                    {savedSts.map((savedItem)=><h1>{savedItem.title}</h1>)}

                </div>
                <div className="object-fill">
                    {statusAddProject && (
                        <MakingProjectPage
                            handleCancelBtn={handleAddProjectBtn}
                            handleSaveBtn={handleSaveBtn}
                        />
                    )}
                </div>
            </div>
            <h1 className="my-8 text-center text-5xl font-bold">Hello World</h1>
        </>
    );
}

export default App;
