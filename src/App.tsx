import React from "react";
import AddTodoItem from "./components/Todos/AddTodo";
import Layout from "./components/Layout/Layout";
import Panel from "./components/Layout/Panel";
import TodoTable from "./components/Todos/TodoTable";

const App = () => {
  return (
    <Layout>
      <>
        <Panel>
          <AddTodoItem />
        </Panel>
        <Panel>
          <TodoTable />
        </Panel>
      </>
    </Layout>
  );
};

export default App;
