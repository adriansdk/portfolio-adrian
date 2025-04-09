import IconWithLabel from "./Components/IconWithLabel";

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div className="flex h-screen w-screen items-center p-10 bg-midnight">
      <main className="flex h-full w-full flex-col gap-[72px] items-center justify-center">
        <div className="flex flex-col gap-[16px] items-center">
          <h1 className="text-5xl font-medium">Adrian Visnieski</h1>
          <h2>Software Engineer</h2>
        </div>
        <div className="flex flex-col gap-[48px] items-center">
          <p>
            I am currently updating my portfolio to better showcase my
            experience. In the meantime please check out my:
          </p>
          <div className="flex justify-center w-1/2 gap-[42px]">
            <IconWithLabel
              icon={faGithub}
              label="Github"
              href={"https://github.com/adriansdk"}
            ></IconWithLabel>
            <IconWithLabel
              icon={faLinkedin}
              label="LinkedIn"
              href={"https://www.linkedin.com/in/adrian-visnieski/"}
            ></IconWithLabel>
            <IconWithLabel
              icon={faDownload}
              label="Resume"
              href={"/AdrianVisnieski_Resume.pdf"}
            ></IconWithLabel>
          </div>
        </div>
      </main>
    </div>
  );
}
