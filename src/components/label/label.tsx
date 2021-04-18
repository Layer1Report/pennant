import "./label.scss";

import * as React from "react";

import classNames from "classnames";
import { Intent } from "../../types";

export type LabelProps = {
  cells: {
    label: string;
    stroke?: boolean;
    fill?: boolean;
    onClick?: () => void;
  }[];
  intent: Intent;
};

export const Label = React.forwardRef<HTMLDivElement, LabelProps>(
  ({ cells, intent = "none" }, ref) => {
    return (
      <div ref={ref} className={`annotation intent-${intent}`}>
        {cells.map((cell, cellIndex) => (
          <div
            key={cellIndex}
            className={classNames(
              "cell",
              { fill: cell.fill },
              { stroke: cell.stroke }
            )}
          >
            {cell.onClick ? (
              <button className="action" onClick={cell.onClick}>
                {cell.label}
              </button>
            ) : (
              cell.label
            )}
          </div>
        ))}
      </div>
    );
  }
);