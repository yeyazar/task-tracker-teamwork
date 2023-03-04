import React, { useState } from "react";
import Header from "../components/Header";
import Dugme from "../components/Button";
import AddTask from "../components/AddTask";
import Tasks from "../components/Tasks";

const Home = () => {
  const [showAddTask, setShowAddTask] = useState(false);

  const showClose = () => {
    setShowAddTask(!showAddTask);
  };

  return (
    <div className="bg-warning text-center d-flex justify-content-center" >
      <div className="p-5 border border-primary bg-light d-flex flex-column m-4 w-50">
        <Header />
        <Dugme visible={showAddTask} onShow={showClose} />
        {showAddTask && <AddTask />}
        <Tasks />
      </div>
    </div>
  );
};

export default Home;
