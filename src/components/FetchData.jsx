import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./Fetch.css";
import Pagination from './Pagination';
import logo from '../assets/loader.webp'

function FetchData() {
   const [data, setData] = useState([]);
   const [currentPage, setCurrentPage] = useState(1);
   const postPerPage = 20;
   const [newTitle, setNewTitle] = useState('');
   const [editId, setEditId] = useState(null); 
   const [loading, setLoading] = useState(true); 
   const navigate = useNavigate(); 

   const lastPostIndex = currentPage * postPerPage;
   const firstPostIndex = lastPostIndex - postPerPage;
   const currentData = data.slice(firstPostIndex, lastPostIndex);

   useEffect(() => {
      axios.get("https://jsonplaceholder.typicode.com/albums/")
      .then(res => {
         setData(res.data);
         setLoading(false); 
      })
      .catch(err => console.log(err));
   }, []);

   useEffect(() => {
      window.onbeforeunload = () => navigate('/');
   }, [navigate]);

   function removeData(id) {
      axios.delete(`https://jsonplaceholder.typicode.com/albums/${id}`);
      const newData = data.filter(data => data.id !== id);
      setData(newData);
   }

   const addTitle = async () => {
      try {
         const response = await axios.post("https://jsonplaceholder.typicode.com/albums/", {  title: newTitle });
         setData([...data, response.data]);
         setNewTitle(''); 
      } catch (error) {
         console.error('Error adding : ', error);
      }
   };

   const updateTitle = async (id, newTitle) => {
      try {
         const response = await axios.put(`https://jsonplaceholder.typicode.com/albums/${id}`, {
            id,
            title: newTitle
         });
         const updatedPosts = data.map(user => (user.id === id ? response.data : user));
         setData(updatedPosts);
         setEditId(null); 
         setNewTitle(''); 
      } catch (error) {
         console.error('Error updating : ', error);
      }
   };

   const handleEditClick = (id, currentTitle) => {
      setEditId(id);
      setNewTitle(currentTitle);
   };

   return (
      <>
        <div className='bg'>
         <div className='root1'>
            <div>
               <input
                  type="text"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="Enter new title"
                  className="input" />
                  <br/>
               <button onClick={addTitle} className="add">Add Post</button>
            </div>

            <h1>Axios Fetching</h1>

            {loading ? ( 
               <p><img src={logo} alt="loading..." height='100' width='100' /></p>
            ) : (
               <table>
                  <thead>
                     <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Delete</th>
                        <th>Update</th>
                     </tr>
                  </thead>
                  <tbody>
                     {currentData.map((user,index) => (
                        <tr key={index}>
                           <td>{user.id}</td>
                           <td>{user.title}</td>
                           <td><button className='deletebtn' onClick={(event) => removeData(user.id)}>Delete</button></td>
                           <td>
                              {editId === user.id ? (
                                 <button onClick={() => updateTitle(user.id, newTitle)} className="savebtn">Save</button>
                              ) : (
                                 <button onClick={() => handleEditClick(user.id, user.title)} className="editbutton">Edit</button>
                              )}
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            )}

            <Pagination totalPosts={data.length} postPerPage={postPerPage} setCurrentPage={setCurrentPage} />
         </div>
         </div>
      </>
   );
}

export default FetchData;