import './components/Card.css';
import Movie from "./components/Card.js"


function App() {
	return (
		<div className="App">
			<header>
				<div className="container">
					<div>Logo</div>
					<ul>
						<a href=""><li>Home</li></a>
						<a href=""><li>Movies</li></a>
						<a href=""><li>Serials</li></a>
						<a href=""><li>Show</li></a>
						<a href=""><li>Cartoons</li></a>
					</ul>
				</div>
			</header>
			<div className="container">
				<div className="poster">
					<Movie name="Shrek" date="2006"
						   poster="https://thumbs.dfs.ivi.ru/storage6/contents/2/3/cc9fca1a2371d949c5f30fbc077adb.jpg"/>
					<Movie name="Jumanji" date="2017"
						   poster="https://i.pinimg.com/originals/66/35/bf/6635bf9c06d2ead4e9cd2ec68ce25fd1.jpg"/>
					<Movie name="Jaws" date="1975"
						   poster="https://images-na.ssl-images-amazon.com/images/I/81NA9YKJQRL.jpg"/>
					<Movie name="Mulan" date="2020"
						   poster="https://d1w8cc2yygc27j.cloudfront.net/3042716161325488705/-815271137920091243.jpg"/>
					<Movie name="Jumanji" date="2017"
						   poster="https://i.pinimg.com/originals/66/35/bf/6635bf9c06d2ead4e9cd2ec68ce25fd1.jpg"/>
					<Movie name="Jaws" date="1975"
						   poster="https://images-na.ssl-images-amazon.com/images/I/81NA9YKJQRL.jpg"/>
				</div>
			</div>
			<div className="footer">
				<div className="container">
					©Copyright
				</div>
			</div>
		</div>
	);
}

export default App;
