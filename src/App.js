import './App.css';
import Main from './views/Main.js';
import React from 'react';
import Friends from './views/Friends';

function App() {
  return (
    <div className="App">
      <Main />
      <Friends />
    </div>
  );
}

export default App;
// import React, { useEffect, useState } from 'react';
// import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
// import getFriends from '../../services/Friends/Friends.js';

// export default function Main() {
//   const [friends, setFriends] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const resp = await getFriends();
//       setFriends(resp);
//     };
//     fetchData();
//   }, []);
//   return (
//     <BrowserRouter>
//       <div className="Main">
//         {friends.map((friend) => (
//           <p key={friend.id}>{friend.name}</p>
//         ))}
//       </div>
//     </BrowserRouter>
//   );
// }
