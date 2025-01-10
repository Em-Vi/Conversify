import { TextField } from "@mui/material";

type Props = {
  name: string;
  type: string;
  label: string;
};

function CustomizedInput(props: Props) {
  return (
    <TextField
      margin="normal"
      slotProps={{
        inputLabel: { style: { color: "#E5E5E5" } },
        input: {
          style: {
            width: "400px",
            borderRadius: 10,
            fontSize: 20,
            color: "#A8A8A8",
          },
        },
      }}
      name={props.name}
      label={props.label}
      type={props.type}
    />
  );
}

export default CustomizedInput;
