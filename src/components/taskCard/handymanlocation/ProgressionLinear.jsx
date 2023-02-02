import LinearProgress from "@mui/material/LinearProgress";
import DirectionsRunRoundedIcon from "@mui/icons-material/DirectionsRunRounded";

export default function ProgressionLinear({progress}) {
  return (
    <div className="scale-x-[-1] space-y-2">
      <div className="flex items-center px-1">
        <DirectionsRunRoundedIcon fontSize="large" />
        <p className="scale-x-[-1]"> در مسیر رسیدن به محل</p>
      </div>
      <LinearProgress variant="determinate" value={progress} />
    </div>
  );
}
