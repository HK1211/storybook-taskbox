import React from "react";
import { connect } from "react-redux";

import TaskList from "../TaskList";

export function PureInboxScreen({ error }: { error: string | null }) {
  if (error) {
    return (
      <div className="page lists-show">
        <div className="wrapper-message">
          <span className="icon-face-sad" />
          <div className="title-message">Oh no!!(version update)</div>
          <div className="subtitle-message">Something went wrong</div>
        </div>
      </div>
    );
  }

  return (
    <div className="page lists-show">
      <nav>
        <h1 className="title-page">
          <span className="title-wrapper">Taskbox</span>
        </h1>
      </nav>
      <TaskList />
    </div>
  );
}

export default connect(({ error }: { error: string }) => ({ error }))(
  PureInboxScreen
);
