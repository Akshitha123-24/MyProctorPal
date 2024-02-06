import React, { useState, useContext } from 'react';
import { GlobalStateContext } from './GlobalState';
import { useNavigate } from 'react-router-dom';
import Button from './components/Button';
import studentImage from './images/student.jpg';
import teacherImage from './images/teacher.jpg';
import './css/RoleSelection.css';
import './css/popup.css';

// Define the LoginRegisterPopup component
const LoginRegisterPopup = ({navigate , onClose, selectedRole }) => {
  return (
     <div className="popup">
       <div className="popup-inner">
         <h2>Choose your action</h2>
         <Button onClick={() => { navigate(`/login?role=${selectedRole}`); onClose(); }}>Login</Button>
         <Button onClick={() => { navigate('/register'); onClose(); }}>Register</Button>
       </div>
     </div>
  );
 };
 

const RoleSelection = () => {
 const { setSelectedRole } = useContext(GlobalStateContext);
 const navigate = useNavigate();
 const [selectedRoleLocal, setSelectedRoleLocal] = useState('');
 const [showPopup, setShowPopup] = useState(false);

 const handleRoleChange = (event) => {
 setSelectedRoleLocal(event.target.value);
 };

 const handleSaveClick = () => {
 setSelectedRole(selectedRoleLocal);
 setShowPopup(true);
 };

 const handleCloseClick = () => {
 setShowPopup(false);
 };

 return (
   <div className = "radio-container">
     <h1>Choose your role</h1>
     <p>What best describes you?</p>
     <div className="radio-container">
     <label>
         <input
           type="radio"
           id="student"
           name="role"
           value="student"
           checked={selectedRoleLocal === 'student'}
           onChange={handleRoleChange}
         />
         <div className="radio-box" onClick={() => document.getElementById("student").click()}>
           <img src={studentImage} alt="Student" />
           Examinee
         </div>
       </label>
       <label>
         <input
           type="radio"
           id="teacher"
           name="role"
           value="teacher"
           checked={selectedRoleLocal === 'teacher'}
           onChange={handleRoleChange}
         />
         <div className="radio-box" onClick={() => document.getElementById("teacher").click()}>
           <img src={teacherImage} alt="Teacher" />
           Examiner
         </div>
       </label>
     </div>
     <Button isDisabled={selectedRoleLocal === ''} onClick={handleSaveClick}>Save</Button>
     {showPopup && <LoginRegisterPopup navigate={navigate} onClose={handleCloseClick} selectedRole={selectedRoleLocal}/>}
   </div>
 );
};

export default RoleSelection;
