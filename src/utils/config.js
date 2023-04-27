import { format } from "date-fns";

const componentType = {
  TEXT: "text",
  DROPDOWN: "dropdown",
};

// status, tag, date, priority, user, dependency, input

const dateFormat = "dd-MM-yyyy";

const getDateByFormat = (date) => format(date, dateFormat);

const valueComponentType = {
  STATUS: "status",
  TAG: "tag",
  DATE: "date",
  PRIORITY: "priority",
  USER: "user",
  DEPENDENCY: "dependency",
  INPUT: "input",
  NUMBER: "number",
  NONE: "none",
};

const statusOptions = ["TO DO", "COMPLETED"];

const fieldOptions = [
  "Status",
  "Tags",
  "Due Date",
  "Priority",
  "Assignee",
  "Archived",
  "Assigned Comment",
  "Created By",
  "Date Closed",
  "Date Created",
  "Date Updated",
  "Date Done",
  "Dependency",
  "Recurring",
  "Start Date",
  "Status Is Closed",
  "Time Estimate",
  "Time Track",
  "Sprint Point",
  "Watcher",
  "Milestone",
];

const operationOptions = {
  Status: [
    { label: "is", valueComponent: "status" },
    { label: "is not", valueComponent: "status" },
  ],
  Tags: [
    { label: "is", valueComponent: "tag" },
    { label: "is not", valueComponent: "tag" },
    { label: "is set", valueComponent: "none" },
    { label: "is not set", valueComponent: "none" },
  ],
  "Due Date": [
    { label: "is", valueComponent: "date" },
    { label: "is not", valueComponent: "date" },
    { label: "is set", valueComponent: "none" },
    { label: "is not set", valueComponent: "none" },
  ],
  Priority: [
    { label: "is", valueComponent: "priority" },
    { label: "is not", valueComponent: "priority" },
    { label: "is set", valueComponent: "none" },
    { label: "is not set", valueComponent: "none" },
  ],
  Assignee: [
    { label: "is", valueComponent: "user" },
    { label: "is not", valueComponent: "user" },
    { label: "is set", valueComponent: "none" },
    { label: "is not set", valueComponent: "none" },
  ],
  Archived: [
    { label: "is archived", valueComponent: "none" },
    { label: "is not archived", valueComponent: "none" },
  ],
  "Assigned Comment": [
    { label: "Has assigned comment", valueComponent: "none" },
    { label: "Doesn't have assigned comment", valueComponent: "none" },
  ],
  "Created By": [
    { label: "is", valueComponent: "user" },
    { label: "is not", valueComponent: "user" },
  ],
  "Date Closed": [
    { label: "is", valueComponent: "date" },
    { label: "is not", valueComponent: "date" },
    { label: "is set", valueComponent: "none" },
    { label: "is not set", valueComponent: "none" },
  ],
  "Date Created": [
    { label: "is", valueComponent: "date" },
    { label: "is not", valueComponent: "date" },
  ],
  "Date Updated": [
    { label: "is", valueComponent: "date" },
    { label: "is not", valueComponent: "date" },
  ],
  "Date Done": [
    { label: "is", valueComponent: "date" },
    { label: "is not", valueComponent: "date" },
    { label: "is set", valueComponent: "none" },
    { label: "is not set", valueComponent: "none" },
  ],
  Dependency: [
    { label: "Has", valueComponent: "dependency" },
    { label: "Doesn't have", valueComponent: "dependency" },
  ],
  Recurring: [
    { label: "is recurring", valueComponent: "none" },
    { label: "is not recurring", valueComponent: "none" },
  ],
  "Start Date": [
    { label: "is", valueComponent: "date" },
    { label: "is not", valueComponent: "date" },
    { label: "is set", valueComponent: "none" },
    { label: "is not set", valueComponent: "none" },
  ],
  "Status Is Closed": null,
  "Time Estimate": [
    { label: "is set", valueComponent: "none" },
    { label: "is not set", valueComponent: "none" },
    { label: "Greater than", valueComponent: "input" },
    { label: "Less than", valueComponent: "input" },
    { label: "Equal to", valueComponent: "input" },
  ],
  "Time Track": [
    { label: "is set", valueComponent: "none" },
    { label: "is not set", valueComponent: "none" },
    { label: "Greater than", valueComponent: "input" },
    { label: "Less than", valueComponent: "input" },
    { label: "Equal to", valueComponent: "input" },
  ],
  "Sprint Point": [
    { label: "Equals", valueComponent: "number" },
    { label: "Not equal to", valueComponent: "number" },
    { label: "Greater than", valueComponent: "number" },
    { label: "Less than", valueComponent: "number" },
    { label: "Greater than or equal to", valueComponent: "number" },
    { label: "Less than or equal to", valueComponent: "number" },
    { label: "is set", valueComponent: "none" },
    { label: "is not set", valueComponent: "none" },
  ],
  Watcher: [
    { label: "is", valueComponent: "user" },
    { label: "is not", valueComponent: "user" },
    { label: "is set", valueComponent: "none" },
    { label: "is not set", valueComponent: "none" },
  ],
  Milestone: [
    { label: "is a milestone", valueComponent: "none" },
    { label: "is not a milestone", valueComponent: "none" },
  ],
};

const priorityOptions = ["Urgent", "High", "Normal", "Low", "No Priority"];

const dependencyOptions = ["Waiting on", "Blocking", "Link", "Any"];

const checkArraySanity = (array) => {
  return !!(array && Array.isArray(array) && array.length);
};

const checkObjectSanity = (object) => {
  if (
    typeof object !== "object" ||
    Array.isArray(object) ||
    object === null ||
    Object.keys(object).length === 0
  )
    return false;
  return true;
};

export {
  componentType,
  checkArraySanity,
  checkObjectSanity,
  valueComponentType,
  priorityOptions,
  dependencyOptions,
  operationOptions,
  dateFormat,
  getDateByFormat,
  fieldOptions,
  statusOptions,
};
