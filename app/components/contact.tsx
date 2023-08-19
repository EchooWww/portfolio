import React from "react";
import { useSectionInView } from "../lib/hooks";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  return <section ref={ref} id="contact"></section>;
}
