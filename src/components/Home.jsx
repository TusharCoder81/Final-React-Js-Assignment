import './Home.css';

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-heading">Welcome To React Final Assignment..!</h1>
        <h4 className="home-subheading">This website contains:</h4>
        <ul className="home-list">
          <li>- Authentication</li>
          <li>- Data Fetching</li>
          <li>- Pagination</li>
          <li>- CRUD Operation</li>
          <li>- Routing</li>
        </ul>
      </div>
    </div>
  );
}
