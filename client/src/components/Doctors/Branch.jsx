import DayPicker from "../Shared/DayPicker";
import { branches as branchOptions } from "../../dummyData";

const generateTimeOptions = () => {
  const times = [];
  let current = new Date("1970-01-01T08:00:00"); // Start at 8:00 AM
  const end = new Date("1970-01-01T20:00:00"); // End at 8:00 PM

  while (current <= end) {
    // Convert to 12-hour format with AM/PM
    const hours = current.getHours();
    const minutes = current.getMinutes();
    const period = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12; // Convert 0 to 12 for midnight
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    const formattedTime = `${formattedHours}:${formattedMinutes} ${period}`;
    times.push(formattedTime);

    // Increment by 30 minutes
    current.setMinutes(current.getMinutes() + 30);
  }

  return times;
};

const timeOptions = generateTimeOptions();

function Branch({ index, branchData, updateBranch, disabledDays }) {
  const handleChange = (field, value) => {
    updateBranch(index, { ...branchData, [field]: value });
  };

  const filteredEndingTimes = branchData.startingTime
    ? timeOptions.filter((time) => {
        // Parse Starting and Ending Times to compare correctly
        const [startHour, startMinute, startPeriod] = branchData.startingTime
          .split(/[: ]/)
          .map((val, i) => (i < 2 ? parseInt(val, 10) : val));

        const [endHour, endMinute, endPeriod] = time
          .split(/[: ]/)
          .map((val, i) => (i < 2 ? parseInt(val, 10) : val));

        // Convert to 24-hour format for comparison
        const start24Hour =
          (startHour % 12) + (startPeriod === "PM" ? 12 : 0) + startMinute / 60;
        const end24Hour =
          (endHour % 12) + (endPeriod === "PM" ? 12 : 0) + endMinute / 60;

        return end24Hour > start24Hour;
      })
    : timeOptions;

  return (
    <div className="flex flex-col  gap-[30px]">
      <div className="flex items-center gap-[30px]">
        <div className="flex flex-col gap-2 flex-[2]">
          <label htmlFor="" className="font-semibold">
            Branch
          </label>
          <select
            value={branchData.branch}
            onChange={(e) => handleChange("branch", e.target.value)}
            className="p-3 rounded-md border-2 border-[#CBD2E0]"
            required
          >
            <option value="">Select</option>
            {branchOptions.map((branch, index) => (
              <option key={branch.value} value={branch.value}>
                {branch.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-2 flex-[1]">
          <label htmlFor="" className="font-semibold">
            Starting time
          </label>
          <select
            value={branchData.startingTime}
            onChange={(e) => handleChange("startingTime", e.target.value)}
            className="p-3 rounded-md border-2 border-[#CBD2E0]"
            required
          >
            <option value="">Select</option>
            {timeOptions.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-2 flex-[1]">
          <label htmlFor="" className="font-semibold">
            Ending time
          </label>
          <select
            value={branchData.endingTime}
            onChange={(e) => handleChange("endingTime", e.target.value)}
            className="p-3 rounded-md border-2 border-[#CBD2E0]"
            required
          >
            <option value="">Select</option>
            {filteredEndingTimes.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="" className="font-semibold block mb-2">
          Select Working Weekdays
        </label>
        <DayPicker
          selectedDays={branchData.workingDays}
          setSelectedDays={(days) => handleChange("workingDays", days)}
          disabledDays={disabledDays}
        />
      </div>
    </div>
  );
}

export default Branch;
