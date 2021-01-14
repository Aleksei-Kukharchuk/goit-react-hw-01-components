import './App.css';
import User from './task_1/User';
import user from './task_1/user.json';
import Statistics from './task_2/Statistics';
import statisticalData from './task_2/statistical-data.json';
import FriendList from './task_3/FriendList';
import friends from './task_3/friends.json';
import transactions from './task_4/transactions.json';
import TransactionHistory from "./task_4/TransactionHistory";

export default function App() {
  return (
     
    <>
      <h1 className="task-number">Task 1</h1>
      <User
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <h1 className="task-number">Task 2</h1>
      <>
        <Statistics title="Upload stats" stats={statisticalData} />
        <Statistics stats={statisticalData} />
      </>
      <h1 className="task-number">Task 3</h1>
      <>
        <FriendList friends={friends}/>
      </>
      <h1 className="task-number">Task 4</h1>
      <>
        <TransactionHistory items={transactions} />
      </>
    </>
  )
}