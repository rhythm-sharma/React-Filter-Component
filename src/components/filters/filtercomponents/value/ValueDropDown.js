import React, { useMemo, useCallback } from "react";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  updateOnFilterValueChange,
  updateOnChildFilterValueChange,
} from "../../../../store/reducers/filter";
import Status from "./components/Status";
import Tag from "./components/Tag";
import Priority from "./components/Priority";
import Date from "./components/Date";
import User from "./components/User";
import Dependency from "./components/Dependency";
import Input from "./components/Input";
import Number from "./components/Number";
import { operationOptions, valueComponentType } from "../../../../utils/config";

const RenderValueComponent = ({
  operationValue,
  valueComponent,
  onChange,
  value,
}) => {
  if (!operationValue) {
    return null;
  }

  if (valueComponent === valueComponentType.STATUS) {
    return <Status onChange={onChange} value={value} />;
  }
  if (valueComponent === valueComponentType.TAG) {
    return <Tag onChange={onChange} value={value} />;
  }
  if (valueComponent === valueComponentType.DATE) {
    return <Date onChange={onChange} value={value} />;
  }
  if (valueComponent === valueComponentType.PRIORITY) {
    return <Priority onChange={onChange} value={value} />;
  }
  if (valueComponent === valueComponentType.USER) {
    return <User onChange={onChange} value={value} />;
  }
  if (valueComponent === valueComponentType.DEPENDENCY) {
    return <Dependency onChange={onChange} value={value} />;
  }
  if (valueComponent === valueComponentType.INPUT) {
    return <Input onChange={onChange} value={value} />;
  }
  if (valueComponent === valueComponentType.NUMBER) {
    return <Number onChange={onChange} value={value} />;
  }
};

const ValueDropDown = ({ index, childIndex, isGroupFilter = false }) => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter.filter);

  const value = useMemo(
    () =>
      isGroupFilter
        ? filter?.fields[index]?.fieldGroup[childIndex]?.values
        : filter?.fields[index]?.values,
    [filter?.fields, index, isGroupFilter, childIndex]
  );

  const operationValue = useMemo(
    () =>
      isGroupFilter
        ? filter?.fields[index]?.fieldGroup[childIndex]?.operation
        : filter?.fields[index]?.operation,
    [filter?.fields, index, isGroupFilter, childIndex]
  );

  const fieldValue = useMemo(
    () =>
      isGroupFilter
        ? filter?.fields[index]?.fieldGroup[childIndex]?.field
        : filter?.fields[index]?.field,
    [filter?.fields, index, isGroupFilter, childIndex]
  );

  const valueComponent = useMemo(() => {
    return (
      operationOptions[fieldValue]?.find(
        ({ label }) => label === operationValue
      )?.valueComponent ?? ""
    );
  }, [fieldValue, operationValue]);

  const onChange = useCallback(
    (newValue) => {
      isGroupFilter
        ? dispatch(
            updateOnChildFilterValueChange({
              index,
              childIndex,
              newValue: {
                values: newValue,
              },
            })
          )
        : dispatch(
            updateOnFilterValueChange({
              index,
              newValue: {
                values: newValue,
              },
            })
          );
    },
    [dispatch, index, childIndex, isGroupFilter]
  );

  if (
    !operationOptions[fieldValue] ||
    valueComponent === valueComponentType.NONE
  ) {
    return null;
  }

  return (
    <Box sx={{ width: "33.33%" }}>
      <RenderValueComponent
        valueComponent={valueComponent}
        onChange={onChange}
        operationValue={operationValue}
        value={value}
      />
    </Box>
  );
};

export default ValueDropDown;
