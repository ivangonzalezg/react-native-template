/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext } from "react";
import constants from "../constants";

const {
  progress: { VISIBLE, HIDDEN },
} = constants;

const initialProgress = {
  visible: false,
  label: "",
  showProgressDialog: (label: string = "") => {},
  hideProgressDialog: () => {},
};

const ProgressContext = createContext(initialProgress);

const progressReducer = (prevState: any, action: any) => {
  switch (action.type) {
    case VISIBLE:
      return {
        ...prevState,
        visible: true,
        label: action.label,
      };
    case HIDDEN:
      return {
        label: "",
        visible: false,
      };
    default:
      return prevState;
  }
};

export { initialProgress, ProgressContext, progressReducer };
