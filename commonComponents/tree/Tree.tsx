import React from 'react'
import ReactDOM from 'react-dom'

const treeData = [
  {
    key: "0",
    label: "Documents",
    children: [
      {
        key: "0-0",
        label: "Document 1-1",
        children: [
          {
            key: "0-1-1",
            label: "Document-0-1.doc",
          },
          {
            key: "0-1-2",
            label: "Document-0-2.doc",
          },
        ],
      },
    ],
  },
  {
    key: "1",
    label: "Desktop",
    children: [
      {
        key: "1-0",
        label: "document1.doc",
      },
      {
        key: "0-0",
        label: "documennt-2.doc",
      },
    ],
  },
  {
    key: "2",
    label: "Downloads",
    children: [],
  },
];

function Tree({ treeData }) {
  return (
    <ul>
      {treeData?.map((node) => (
        <TreeNode node={node} key={node.key} />
      ))}
    </ul>
  );
}

function TreeNode({ node }) {
  console.log(node)
  const { children, label } = node;

  return (
    <>
      <div style={{ marginBottom: "10px" }}>
        <span>{label}</span>
      </div>
      <ul style={{ paddingLeft: "10px", borderLeft: "1px solid black" }}>
        {<Tree treeData={children} />}
      </ul>
    </>
  );
}

class App extends React.Component {
  render() {
    return (
      <>
      <h1>React Tree View</h1>
      <Tree treeData={treeData} />
      </>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('container')
);
