import { user } from "./Login";
import './success.css';

export default function Success() {
  return (
    <div className="success-container">
      <h1 className="success-message">{user} logged in successfully!</h1>
    </div>
  );
}