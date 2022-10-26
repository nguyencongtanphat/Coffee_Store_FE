import React from "react";

function AppButton({ icon, text, onClick }) {
  return (
    <button
      className="flex bg-orange border-none px-4 justify-center
                py-3 gap-3 rounded-xl"
      onClick={onClick}
    >
      <div className="text-white text-b7 "> {text}</div>
    </button>
  );
}

export default AppButton;
