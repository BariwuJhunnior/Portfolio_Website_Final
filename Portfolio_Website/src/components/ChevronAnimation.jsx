import React from "react";
import { ChevronDown } from "lucide-react";

function ChevronAnimation() {
  return (
    <div className="animate-bounce mt-auto pb-8">
      <ChevronDown size={32} className="text-slate-500" />
    </div>
  );
}

export default ChevronAnimation;
