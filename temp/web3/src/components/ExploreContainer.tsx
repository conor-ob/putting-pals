import { greeting } from "@pkg/utils/greeting";

import "./ExploreContainer.css";

import { sum } from "@pkg/utils/math";

type ContainerProps = {
  name: string;
};

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  console.log(name);
  return (
    <div className="container">
      <div>
        {greeting((import.meta.env.GIT_COMMIT_SHA as string).slice(0, 7))}
      </div>
      <div className="text-red">Red</div>
      <div className="text-green">Green</div>
      <div className="text-blue">Blue</div>
      <div className="text-yellow">Yellow</div>
      <div className="text-cyan">Cyan</div>
      <div className="text-purple">Purple</div>
      <div>{`The answer to life ${sum(40, 2)}`}</div>
    </div>
  );
};

export default ExploreContainer;
