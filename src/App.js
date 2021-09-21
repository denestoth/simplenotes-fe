import './App.css';
import TaskListComponent from './components/TaskListComponent';
import TaskCreateComponent from './components/TaskCreateComponents';
import TagListComponent from './components/TagListComponent';

function App() {
  return (
    <div className="App">
      <div class = 'container'>
        <div class = 'row'>
          <div class = 'col-1'>
            <h1 className = "text-center">Tags</h1>
            <TagListComponent />
          </div>
          <div class = 'container col 11'>
            <div class = 'row'>
              <h1 className = "text-center">Tasks</h1>
              <div class = 'col-7'>
                <TaskListComponent />
              </div>
              <div class = 'col-4'>
                <TaskCreateComponent />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
