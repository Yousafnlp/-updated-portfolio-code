
import { FaHome } from "react-icons/fa";
import { GrContactInfo } from "react-icons/gr";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { IoIosContact } from "react-icons/io";
import { FaProjectDiagram } from "react-icons/fa";


const menuItems = [
  { icon: FaHome, label: "HOME", href: "#home" },
  { icon: GiSkills, label: "SKILLS", href: "#skills" },
  { icon: GrContactInfo, label: "ABOUT", href: "#about" },
  {
    icon: MdOutlineMiscellaneousServices,
    label: "SERVICES",
    href: "#services",
  },
  { icon: FaProjectDiagram, label: "PROJECTS", href: "#projects" },
  { icon: IoIosContact, label: "CONTACT", href: "#contact" },
];

export default menuItems;
