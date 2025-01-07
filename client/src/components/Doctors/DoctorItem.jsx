function DoctorItem({ doctorName, styles }) {
  return (
    <div
      className={`bg-doctor-item-color flex items-center justify-between py-[40px] px-[71px] ${
        styles.firstItem && "rounded-tr-[30px] rounded-tl-[30px]"
      } ${styles.lastItem && "rounded-br-[30px] rounded-bl-[30px]"} `}
    >
      <div className="flex items-center gap-4">
        <svg
          width="82"
          height="82"
          viewBox="0 0 82 82"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1_966)">
            <circle
              cx="41"
              cy="41"
              r="40"
              fill="#EFEFF0"
              stroke="#AFB1B6"
              strokeWidth="2"
            />
            <path
              d="M55.375 32.4584C55.375 40.3975 48.9391 46.8334 41 46.8334C33.0609 46.8334 26.625 40.3975 26.625 32.4584C26.625 24.5193 33.0609 18.0834 41 18.0834C48.9391 18.0834 55.375 24.5193 55.375 32.4584Z"
              stroke="#AFB1B6"
              strokeWidth="2"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.58179 66.1049C15.663 57.1339 27.541 51.25 40.9995 51.25C54.4579 51.25 66.3359 57.1339 73.4171 66.1049C72.9962 66.6476 72.5619 67.1796 72.1148 67.7001C65.4856 59.0445 54.1209 53.25 40.9995 53.25C27.878 53.25 16.5133 59.0445 9.88414 67.7001C9.43702 67.1796 9.00274 66.6476 8.58179 66.1049Z"
              fill="#AFB1B6"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_966">
              <rect width="82" height="82" fill="white" />
            </clipPath>
          </defs>
        </svg>

        <p className="text-[#0F0F12] font-semibold text-[24px] leading-[36px]">
          {doctorName}
        </p>
      </div>
      <div className="font-semibold text-[14px]">
        <span className="flex items-center mb-4">
          <svg
            width="15"
            height="16"
            viewBox="0 0 15 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.0625 6.07812L9.40625 3.45312L10.2812 2.57813C10.5208 2.33854 10.8152 2.21875 11.1644 2.21875C11.5135 2.21875 11.8077 2.33854 12.0469 2.57813L12.9219 3.45312C13.1615 3.69271 13.2865 3.98187 13.2969 4.32062C13.3073 4.65937 13.1927 4.94833 12.9531 5.1875L12.0625 6.07812ZM11.1562 7L4.53125 13.625H1.875V10.9688L8.5 4.34375L11.1562 7Z"
              fill="#0F0F12"
            />
          </svg>
          Edit
        </span>
        <span className="flex items-center">
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.0625 13.5C3.68438 13.5 3.36056 13.3693 3.09106 13.108C2.82156 12.8467 2.68704 12.5329 2.6875 12.1667V3.5H2V2.16667H5.4375V1.5H9.5625V2.16667H13V3.5H12.3125V12.1667C12.3125 12.5333 12.1778 12.8473 11.9083 13.1087C11.6388 13.37 11.3152 13.5004 10.9375 13.5H4.0625ZM10.9375 3.5H4.0625V12.1667H10.9375V3.5ZM5.4375 10.8333H6.8125V4.83333H5.4375V10.8333ZM8.1875 10.8333H9.5625V4.83333H8.1875V10.8333Z"
              fill="#0F0F12"
            />
          </svg>
          Delete doctor
        </span>
      </div>
    </div>
  );
}

export default DoctorItem;
