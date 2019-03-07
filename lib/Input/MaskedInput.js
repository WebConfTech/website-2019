import * as R from 'ramda';
import React, { useState, useCallback, useLayoutEffect, useRef } from 'react';
import { Input } from './Input';

const findChangePosition = R.compose(
  R.findIndex(R.apply(R.complement(R.equals))),
  R.zip
);

export const MaskedInput = ({ mask, unmask, value, onChange, ...props }) => {
  // mask the value
  const maskedValue = mask(value);

  // state needed for handling the cursor position
  const inputRef = useRef(null);
  const [previousValue, setPreviousValue] = useState(maskedValue);
  const [cursorPosition, setCursorPosition] = useState(null);

  // change handler for the input
  const handleChange = useCallback(
    event => {
      // handle change
      const value = unmask(event.target.value);
      onChange(event, value);

      // handle cursor position
      setPreviousValue(event.target.value);
      setCursorPosition({
        start: inputRef.current.selectionStart,
        end: inputRef.current.selectionStart
      });
    },
    [inputRef, unmask, setPreviousValue, setCursorPosition, onChange]
  );

  // restore selection
  useLayoutEffect(() => {
    if (cursorPosition != null) {
      let start = cursorPosition.start;
      let end = cursorPosition.end;

      if (maskedValue.length !== previousValue.length) {
        // we need to calculate the new cursor position
        const changePosition = findChangePosition(previousValue, maskedValue);

        // modify the start and end position if necessary
        const inc = maskedValue.length > previousValue.length ? 1 : -1;

        if (changePosition !== -1 && changePosition <= start) {
          start += inc;
          end += inc;
        } else if (changePosition !== -1 && changePosition <= end) {
          end += inc;
        }
      }

      inputRef.current.setSelectionRange(start, end);
    }
  }, [maskedValue, inputRef, previousValue, cursorPosition]);

  return <Input onChange={handleChange} value={maskedValue} ref={inputRef} {...props} />;
};
