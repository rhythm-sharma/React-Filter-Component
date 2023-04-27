import React, { useState, useMemo, useEffect, useCallback } from "react";
import { Box, Popper, ClickAwayListener, TextField } from "@mui/material";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import { getDateByFormat } from "../../../../../utils/config";

const DatePicker = ({ onChange }) => {
  const [isOpen, setIsOpen] = useState(null);

  const [state, setState] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const handleDateChange = useCallback(
    (date) => {
      const newState = JSON.parse(JSON.stringify(date));
      newState.startDate = JSON.stringify(date.startDate);
      newState.endDate = JSON.stringify(date.endDate);
      onChange(newState);
    },
    [onChange]
  );

  // onLoad set the date to filter object
  useEffect(() => {
    handleDateChange(state);
  }, [state, handleDateChange]);

  const dateValue = useMemo(
    () =>
      `${getDateByFormat(state.startDate)} - ${getDateByFormat(state.endDate)}`,
    [state.startDate, state.endDate]
  );

  const handleClick = (event) => {
    setIsOpen(event.currentTarget);
  };

  const handleClose = () => {
    handleDateChange(state);
    if (isOpen) {
      isOpen.focus();
    }
    setIsOpen(null);
  };

  return (
    <Box>
      <Box onClick={handleClick}>
        <TextField value={dateValue} size="small" sx={{ width: "100%" }} />
      </Box>
      <Popper open={Boolean(isOpen)} anchorEl={isOpen} placement="bottom-start">
        <ClickAwayListener onClickAway={handleClose}>
          <Box>
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setState(item.selection)}
              moveRangeOnFirstSelection={false}
              ranges={[state]}
            />
          </Box>
        </ClickAwayListener>
      </Popper>
    </Box>
  );
};

export default DatePicker;
