import Header from "@/components/Header";
import TimeScheduleContent from "@/components/TimeScheduleContent";

const TimeSchedule = () => {
  return (
    <>
      <Header />
      <div className="bg-gray-50">
        <TimeScheduleContent />
      </div>
    </>
  );
};

export default TimeSchedule;
