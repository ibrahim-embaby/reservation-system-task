function SessionItem({ session, styles }) {
  return (
    <div
      className={`bg-doctor-item-color flex items-center justify-between py-[40px] px-[71px] ${
        styles.firstItem && "rounded-tr-[30px] rounded-tl-[30px]"
      } ${styles.lastItem && "rounded-br-[30px] rounded-bl-[30px]"} `}
    >
      <div className="flex gap-4 flex-col">
        <p className="text-[#0F0F12] font-semibold text-[24px] leading-[36px]">
          {session.sessionType} Session
        </p>
        <p className="text-xl leading-[25px] text-[#2A2A33]">
          Performed to Patient’s Name
        </p>
        <p className="text-xl leading-[25px] text-[#2A2A33]">
          {session.doctor}
        </p>
      </div>
      <div>
        <p className="mb-2 text-xl leading-[25px] text-[#2A2A33] text-right">
          {session.time}
        </p>
        <span className="flex items-center gap-2 font-semibold text-xl">
          <p>{session.price} LE</p>
          <button className="bg-secondary-text-color text-white py-3 px-5 rounded-md font-bold">
            Confirm Payment
          </button>
        </span>
      </div>
    </div>
  );
}

export default SessionItem;
