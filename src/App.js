import './App.css';
import Profile from './components/social_profile/Profile';
import user from './components/social_profile/user.json';

import Statistics from './components/statistics/Statistics';
import statisticalData from './components/statistics/statistical-data.json';

import FriendList from './components/friend_list/Friends';
import friends from './components/friend_list/friends.json';

import TransactionHistory from './components/transaction_history/TransactionHistory';
import transactions from './components/transaction_history/transactions.json';

function App() {
  return (
    <div className="App">
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />;
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
  );
}

export default App;
