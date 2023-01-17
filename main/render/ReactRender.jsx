import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('subapp-container'));

/** 渲染子应用 */
function Render(props) {
  const { loading } = props;

  return (
    <>
      {loading && <h4 className="subapp-loading">Loading...</h4>}
      <div id="subapp-viewport" />
    </>
  );
}

export default function render({ loading }) {
  root.render(<Render loading={loading} />);
}
