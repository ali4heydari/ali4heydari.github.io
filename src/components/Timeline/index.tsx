import Event from "./components/TimelineItem";
import { TimelineProps } from "./@types";

const Timeline = ({ wrapperClassName, events }: TimelineProps) => {
  return (
    <div className={wrapperClassName}>
      {events.map((event) => (
        <Event key={event.title} {...event} />
      ))}
    </div>
  );
};

export default Timeline;
