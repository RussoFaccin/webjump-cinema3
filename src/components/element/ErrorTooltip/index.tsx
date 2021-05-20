import React, { useCallback, useState } from "react";
import { Props } from "./types";
import { ErrorContainer, ErrorMessage, ErrorIcon } from "./styles";
import { Colors } from "shared/enums";

/**
 * Error Tooltip Component
 */
const ErrorTolltip = ({ isVisible, message }: Props) => {
  const [isMessageVisible, setMessageVisible] = useState(false);

  const handleShowMessage = useCallback(() => {
    setMessageVisible(!isMessageVisible);
  }, [isMessageVisible]);

  if (!isVisible) {
    return null;
  }

  return (
    <ErrorContainer>
      <ErrorMessage isVisible={isMessageVisible}>{message}</ErrorMessage>
      <ErrorIcon
        color={Colors.PRIMARY}
        onMouseEnter={handleShowMessage}
        onMouseLeave={handleShowMessage}
      />
    </ErrorContainer>
  );
};

export default ErrorTolltip;
