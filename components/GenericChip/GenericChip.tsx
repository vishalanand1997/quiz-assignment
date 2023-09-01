import React from "react";
import style from "./GenericChip.module.css";
import { Chip } from "@mui/material";

interface IProps {
  label: string;
  colorName: "info" | "warning" | "secondary";
}
function GenericChip(props: IProps) {
  const { label, colorName } = props;
  return (
    <div className={style.chip__container}>
      <div className={style.chip_with_label}>
        <strong>Level:-</strong>
        <Chip label={label} color={`${colorName}`} />
      </div>
    </div>
  );
}

export default GenericChip;
