import { CSSProperties } from "react";
import { size } from "../types/size-type";

export const getContainerFontSize = (size: size): CSSProperties => ({
    fontSize: `var(--input-font-size-${size})`,
  });