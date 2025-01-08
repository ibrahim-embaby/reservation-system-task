const days = ["Sat", "Sun", "Mon", "Tues", "Wed", "Thurs", "Fri"];

function DayPicker({ selectedDays = [], setSelectedDays, disabledDays = [] }) {
  const toggleDaySelection = (day) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(
        selectedDays.filter((selectedDay) => selectedDay !== day)
      );
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  return (
    <div className="flex justify-center">
      {days.map((day, index) => (
        <span
          key={index}
          className={`px-5 py-[10px] border-y-[1.5px] border-r-[1.5px] border-[#2D3648] font-medium font-work-sans text-sm cursor-pointer ${
            index === 0 &&
            "border-l-[1.5px] rounded-tl-[66px] rounded-bl-[66px]"
          } ${
            index === days.length - 1 && "rounded-tr-[66px] rounded-br-[66px]"
          } ${
            selectedDays.includes(day)
              ? "bg-[#2D3648] text-white"
              : "text-[#2D3648]"
          }
          ${
            disabledDays.includes(day) && !selectedDays.includes(day)
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
          onClick={() => {
            if (!disabledDays.includes(day) || selectedDays.includes(day)) {
              toggleDaySelection(day);
            }
          }}
        >
          {day}
        </span>
      ))}
    </div>
  );
}

export default DayPicker;
