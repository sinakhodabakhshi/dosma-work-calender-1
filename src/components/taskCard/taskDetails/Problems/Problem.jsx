import CheckIcon from "@mui/icons-material/Check";

export default function Problem({problem}) {
  return (
    <li className="text-[#737171] dark:text-[#AAAAAA]">
      {problem}&nbsp; <CheckIcon fontSize="" className="dark:text-white" />
    </li>
  );
}
