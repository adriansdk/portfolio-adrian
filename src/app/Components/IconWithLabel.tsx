import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import Link from "next/link";

type IconWithLabelProps = {
  icon: IconDefinition;
  label: string;
  href: string;
  download?: string;
};

export default function IconWithLabel({
  icon,
  label,
  href,
  download,
}: IconWithLabelProps) {
  return (
    <div className="flex items-center flex-col h-20 w-20 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-green-300">
      <Link className="flex flex-col justify-center items-center"target="_blank" href={href} download={download}>
        <FontAwesomeIcon
          icon={icon}
          className="h-10 w-10"
        ></FontAwesomeIcon>
        <p className="h-full w-full text-center font-semibold">{label}</p>
      </Link>
    </div>
  );
}
