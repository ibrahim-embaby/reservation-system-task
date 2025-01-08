import Delete from "../../assets/icons/Delete";
import Pen from "../../assets/icons/Pen";
import SmAvatar from "../../assets/icons/SmAvatar";
import { useDispatch } from "react-redux";
import { deleteDoctor } from "../../redux/api/doctorApiActions";

function DoctorItem({ doctor, styles }) {
  const dispatch = useDispatch();

  function handleDeleteDoctor() {
    dispatch(deleteDoctor(doctor._id));
  }

  return (
    <div
      className={`bg-doctor-item-color flex flex-col md:flex-row items-center justify-between py-6 md:py-[40px] px-4 sm:px-6 lg:px-[71px] ${
        styles.firstItem && "rounded-tr-[30px] rounded-tl-[30px]"
      } ${styles.lastItem && "rounded-br-[30px] rounded-bl-[30px]"}`}
    >
      <div className="flex items-center gap-4 mb-4 md:mb-0">
        <SmAvatar />
        <p className="text-[#0F0F12] font-semibold text-xl md:text-2xl leading-[28px] md:leading-[36px]">
          Dr. {`${doctor.firstName} ${doctor.lastName}`}
        </p>
      </div>

      <div className="font-semibold text-[14px] flex sm:flex-row md:flex-col gap-4">
        <span className="flex items-center cursor-pointer">
          <Pen
            styles={{
              width: "15",
              height: "16",
              color: "#0F0F12",
              d: "M12.0625 6.07812L9.40625 3.45312L10.2812 2.57813C10.5208 2.33854 10.8152 2.21875 11.1644 2.21875C11.5135 2.21875 11.8077 2.33854 12.0469 2.57813L12.9219 3.45312C13.1615 3.69271 13.2865 3.98187 13.2969 4.32062C13.3073 4.65937 13.1927 4.94833 12.9531 5.1875L12.0625 6.07812ZM11.1562 7L4.53125 13.625H1.875V10.9688L8.5 4.34375L11.1562 7Z",
            }}
          />
          <span className="ml-2">Edit</span>
        </span>
        <span
          className="flex items-center cursor-pointer"
          onClick={handleDeleteDoctor}
        >
          <Delete />
          <span className="ml-2">Delete doctor</span>
        </span>
      </div>
    </div>
  );
}

export default DoctorItem;
