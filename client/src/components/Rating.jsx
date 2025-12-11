import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

export default function HalfRating({ defaultValue }) {
  return (
    <Stack spacing={1}>
      <Rating name="half-rating" defaultValue={defaultValue} precision={0.1} />
      {/* <Rating
        name="half-rating-read"
        defaultValue={2.5}
        precision={0.5}
        readOnly
      /> */}
    </Stack>
  );
}
