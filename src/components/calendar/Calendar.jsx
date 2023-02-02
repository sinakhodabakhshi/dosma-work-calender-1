import React from "react";
import CalDatePicker from "./calDatePicker/CalDatePicker";
import CalHeader from "./CalHeader";

export default function Calendar() {

  return (
    <section >
      <CalHeader />
      <CalDatePicker />
    </section>
  );
}
