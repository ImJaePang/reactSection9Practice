import { useState } from "react";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import ProjectsSidebar from "./components/ProjectsSidebar.jsx";
import SelectedProject from "./components/SelectedProject.jsx";

function App() {
    const [projectState, setProjectState] = useState({
        selectedProjectId: undefined,
        projects: [],
        tasks: [],
    });

    function handleAddTask(text) {
        setProjectState((prevState) => {
            const taskId = Math.random();

            const newTask = {
                text : text,
                projectId : prevState.selectedProjectId,
                id: taskId,
            };

            return {
                ...prevState,
                tasks : [newTask, ...prevState.tasks]
            };
        });
    }

    function handleDelteTask(id) {
        setProjectState((prevState) => {
            return {
                ...prevState,
                tasks: prevState.tasks.filter(
                    (task) => task.id !== id
                ),
            };
        });
    }

    function handleSelectProject(id) {
        setProjectState((prevState) => {
            return {
                ...prevState,
                selectedProjectId: id,
            };
        });
    }

    function handleStartAddProject() {
        setProjectState((prevState) => {
            return {
                ...prevState,
                selectedProjectId: null,
            };
        });
    }

    function handleCancelAddProject() {
        setProjectState((prevState) => {
            return {
                ...prevState,
                selectedProjectId: undefined,
            };
        });
    }

    function handleAddProject(projectData) {
        setProjectState((prevState) => {
            const projectId = Math.random();

            const newProject = {
                ...projectData,
                id: projectId,
            };

            return {
                ...prevState,
                selectedProjectId: undefined,
                projects: [...prevState.projects, newProject],
            };
        });
    }

    function handleDeleteProject() {
        setProjectState((prevState) => {
            return {
                ...prevState,
                selectedProjectId: undefined,
                projects: prevState.projects.filter(
                    (project) => project.id !== projectState.selectedProjectId
                ),
            };
        });
    }

    const selecctedProject = projectState.projects.find(
        (project) => project.id === projectState.selectedProjectId
    );

    const selctedTasks = projectState.tasks.filter(
        (taks) => taks.projectId === projectState.selectedProjectId
    );

    let content = (
        <SelectedProject
            project={selecctedProject}
            onDelete={handleDeleteProject}
            tasks={selctedTasks}
            onAddTask={handleAddTask}
            onDeleteTask={handleDelteTask}
        />
    );

    if (projectState.selectedProjectId === undefined) {
        content = (
            <NoProjectSelected onStartAddProject={handleStartAddProject} />
        );
    } else if (projectState.selectedProjectId === null) {
        content = (
            <NewProject
                onAdd={handleAddProject}
                onCancel={handleCancelAddProject}
            />
        );
    }

    return (
        <main className="h-screen my-8 flex gap-8">
            <ProjectsSidebar
                onStartAddProject={handleStartAddProject}
                projects={projectState.projects}
                onSelectProject={handleSelectProject}
                selectedProjectId={projectState.selectedProjectId}
            />

            {content}
        </main>
    );
}

export default App;
