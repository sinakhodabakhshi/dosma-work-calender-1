import RoomRoundedIcon from "@mui/icons-material/RoomRounded";

export default function UserLocation({address}) {
  return (
    <p className="flex flex-row-reverse text-sm text-end">
      <span className="pl-1">
        <RoomRoundedIcon fontSize="small" />
      </span>
      {address}
    </p>
  );
}
