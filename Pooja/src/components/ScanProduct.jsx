import React from "react";
import { MdOutlineQrCodeScanner } from "react-icons/all";
import "../App.css";

function ScanProduct() {
  return (
    <>
      <div>
        <button className="scan-btn">
          Scan Product
          <MdOutlineQrCodeScanner className="scan" />
        </button>
      </div>
    </>
  );
}

export { ScanProduct };
