import React from "react";
import ReactDOM from "react-dom";
import "@testing-library/jest-dom/extend-expect";

import { WithPinnedTasks } from "./TaskList.stories"; //👈  Our story imported here(여기에서 가져온 우리의 이야기)

it("목록의 시작 부분에 고정된 작업을 렌더링", () => {
  const div = document.createElement("div");
  //👇 Story's args used with our test(테스트에 사용된 스토리의 인수)
  ReactDOM.render(
    <WithPinnedTasks
      loading={WithPinnedTasks.args?.loading as boolean}
      tasks={WithPinnedTasks.args?.tasks as []}
      onPinTask={WithPinnedTasks.args?.onPinTask}
      onArchiveTask={WithPinnedTasks.args?.onArchiveTask}
    />,
    div
  );

  // We expect the task titled "Task 6 (pinned)" to be rendered first, not at the end
  const lastTaskInput = div.querySelector(
    '.list-item:nth-child(1) input[value="Task 6 (pinned)"]'
  );
  expect(lastTaskInput).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
