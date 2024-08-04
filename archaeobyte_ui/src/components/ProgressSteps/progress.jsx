import React from "react";
import {

  FaUserTie,

  FaRupeeSign,
} from "react-icons/fa";
import { PiGraduationCapBold } from "react-icons/pi";
import { GoProjectSymlink } from "react-icons/go";
import { HiOutlineClipboardDocumentCheck } from "react-icons/hi2";
import { SlEarphonesAlt } from "react-icons/sl";

import "./progress.css";

const ProgressSteps = () => {
  return (
    <div className="progress-container">
      <div className="progress-steps">
        <div className="step">
          <PiGraduationCapBold className="icon" />
          <p>Enhance your Experience with Internship program</p>
        </div>
        <div className="arrow">→</div>
        <div className="step">
          <GoProjectSymlink className="icon" />
          <p>Complete 3 Real time projects</p>
        </div>
        <div className="arrow">→</div>
        <div className="step">
          <FaUserTie className="icon" />
          <p>Build Your Linkedin Profile like a Pro</p>
        </div>
        <div className="arrow">→</div>
        <div className="step">
          <HiOutlineClipboardDocumentCheck className="icon" />
          <p>Create your ATS Friendly Resume</p>
        </div>
        <div className="arrow">→</div>
        <div className="step">
          <SlEarphonesAlt className="icon" />
          <p>Master the art of answering with Mock Interviews</p>
        </div>
        <div className="arrow">→</div>
        <div className="step">
          <FaRupeeSign className="icon" />
          <p>Land into Stipend Based Internship at MNC's</p>
        </div>
      </div>
      <div className="underline-innovate"></div>
    </div>
  );
};

export default ProgressSteps;
