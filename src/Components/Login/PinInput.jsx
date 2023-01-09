import { forwardRef } from "react";

const PinInput = forwardRef(
  (
    {
      perInputBox,
      handleChange,
      handleBackSpace,
      disabledBool,
      correctPassword,
    },
    ref
  ) => {
    const handleKeyUp = (e) => {
      if (e.keyCode === 8) {
        handleBackSpace(e);
      } else {
        handleChange(e);
      }
    };
    return (
      <input
        // autofocus
        className={correctPassword && "green"}
        id="pin-input"
        ref={ref}
        maxLength={perInputBox}
        onChange={handleChange}
        onKeyUp={handleKeyUp}

        // disabled={disabledBool}
      />
    );
  }
);

export default PinInput;
