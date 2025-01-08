import React from "react";

function Pen({ styles = {} }) {
  return (
    <svg
      width={styles.width ?? "24"}
      height={styles.height ?? "24"}
      viewBox={`0 0 ${styles.width ?? "24"} ${styles.height ?? "24"}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={
          styles.d ??
          "M21.0911 8.24998L15.6961 2.9108L17.4733 1.13107C17.9599 0.643769 18.5578 0.400116 19.2669 0.400116C19.9761 0.400116 20.5736 0.643769 21.0594 1.13107L22.8366 2.9108C23.3232 3.39811 23.5771 3.98626 23.5982 4.67527C23.6194 5.36428 23.3866 5.95201 22.9 6.43847L21.0911 8.24998ZM19.2504 10.125L5.79458 23.6001H0.399536V18.1974L13.8554 4.72231L19.2504 10.125Z"
        }
        fill={styles.color ?? "white"}
      />
    </svg>
  );
}

export default Pen;
