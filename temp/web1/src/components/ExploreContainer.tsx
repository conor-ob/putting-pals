import { sum } from "@pkg/utils/math";

import "./ExploreContainer.css";

type ContainerProps = {
  name: string;
};

const ExploreContainer: React.FC<ContainerProps> = ({
  name,
}: {
  name: string;
}) => {
  return (
    <div className="container">
      <strong>{name}</strong>
      <p>
        Explore{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://ionicframework.com/docs/components"
        >
          UI Components
        </a>
      </p>
      <div className="text-red-500">Red</div>
      <div className="text-green">Green</div>
      <div className="text-blue">Blue</div>
      <div className="text-yellow">Yellow</div>
      <div className="text-cyan">Cyan</div>
      <div className="text-purple">Purple</div>
      <div>{sum(1, 3)}</div>
    </div>
  );
};

export default ExploreContainer;
