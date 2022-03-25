import './App.css';
import Main from './views/Main';
import React from 'react';
import Friends from './views/Friends';
import Posts from './views/Posts';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';

import Header from './Components/Header';
import './Components/Header.css';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/friends">
            <Friends />
          </Route>
          <Route path="/posts">
            <Posts />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
// import React, { useEffect, useState } from 'react';
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
