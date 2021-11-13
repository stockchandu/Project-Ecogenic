import React from "react";
import { MdOutlineQrCodeScanner } from "react-icons/all";
import "./homepage.css"

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
