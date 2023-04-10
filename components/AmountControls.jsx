import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import { increase, decrease, removeItem } from "@/features/cart/cartSlice";
import { useDispatch } from "react-redux";

export default function AmountControls({ id, amount }) {
  const dispatch = useDispatch();

  const handleControlsClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "& > *": {
          m: 1,
        },
      }}
    >
      <ButtonGroup
        variant="outlined"
        size="small"
        aria-label="outlined button group"
      >
        <Button
          onClick={(e) => {
            handleControlsClick(e);
            if (amount > 1) {
              dispatch(decrease({ id }));
            } else {
              dispatch(removeItem({ id }));
            }
          }}
        >
          -
        </Button>
        <Button disableRipple onClick={handleControlsClick}>
          {amount}
        </Button>
        <Button
          onClick={(e) => {
            handleControlsClick(e);
            dispatch(increase({ id }));
          }}
        >
          +
        </Button>
      </ButtonGroup>
    </Box>
  );
}
