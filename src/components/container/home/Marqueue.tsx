import React from "react";

import Link from "next/link";

const Marqueue = () => {
  return (
    <div className="planning-section-title text-center pd-top-120 pd-bottom-110">
<div className="planning-section-title-left">
  <Link href="">Financial Consulting.</Link>
  <Link href="">Solicitory Services.</Link>
  <Link href="">Business Planning Solutions.</Link>
  <Link href="">Organizational Consulting.</Link>
  <Link href="">Financial Analysis.</Link>
  <Link href="">Legal Consultancy.</Link>
  <Link href="">Strategic Planning.</Link>
  <Link href="">Market Research.</Link>
</div>
<div className="planning-section-title-right">
  <Link href="">Business Strategy.</Link>
  <Link href="">Startup Consulting.</Link>
  <Link href="">Organizational Development.</Link>
  <Link href="">Human Resources Consulting.</Link>
  <Link href="">Best Practices.</Link>
  <Link href="">Digital Transformation.</Link>
  <Link href="">Financial Advisory.</Link>
  <Link href="">Risk Management.</Link>
</div>

    </div>
  );
};

export default Marqueue;
