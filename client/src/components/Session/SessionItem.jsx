function SessionItem({ session, styles }) {
  return (
    <div
      className={`bg-doctor-item-color flex flex-col sm:flex-row items-center justify-between py-6 sm:py-[40px] px-4 sm:px-8 lg:px-[71px] ${
        styles.firstItem && "rounded-tr-[30px] rounded-tl-[30px]"
      } ${styles.lastItem && "rounded-br-[30px] rounded-bl-[30px]"}`}
    >
      {/* Left Section */}
      <div className="flex flex-col gap-2 sm:gap-4 w-full sm:w-auto text-center sm:text-left">
        <p className="text-[#0F0F12] font-semibold text-lg sm:text-[24px] leading-[28px] sm:leading-[36px]">
          {session.sessionType} Session
        </p>
        <p className="text-base sm:text-xl leading-[20px] sm:leading-[25px] text-[#2A2A33]">
          Performed to Patient’s Name
        </p>
        <p className="text-base sm:text-xl leading-[20px] sm:leading-[25px] text-[#2A2A33]">
          {session.doctor}
        </p>
      </div>

      {/* Right Section */}
      <div className="mt-4 sm:mt-0 w-full sm:w-auto text-center sm:text-right">
        <p className="mb-2 text-base sm:text-xl leading-[20px] sm:leading-[25px] text-[#2A2A33]">
          {session.time}
        </p>
        <span className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 font-semibold text-base sm:text-xl">
          <p>{session.price} LE</p>
          <button className="bg-secondary-text-color text-white py-2 sm:py-3 px-4 sm:px-5 rounded-md font-bold w-full sm:w-auto">
            Confirm Payment
          </button>
        </span>
      </div>
    </div>
  );
}

export default SessionItem;
