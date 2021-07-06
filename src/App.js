import logo from './logo.svg';
import './App.css';
import Main from './Compnents/Main/Main';
import Nav from './Compnents/Nav/Nav';
function App() {
  const appStyles = {
        width: "100%",
        minHeight:"100vh",
				backgroundColor: "black",
			};
  return (
    <div style={appStyles}>
      <Nav/>
			<Main/>
		</div>
	);
}

export default App;
