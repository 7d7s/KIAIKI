import { FC } from 'react';
import { FaUserAlt, FaCalendarAlt, FaRegClipboard, FaMapMarkerAlt } from 'react-icons/fa';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';

interface ProjectInfoProps {
  client: string;
  date: string;
  category: string;
  location: string;
}

const ProjectInfo: FC<ProjectInfoProps> = ({ client, date, category, location }) => {
  const infoItems = [
    {
      icon: <FaUserAlt />,
      label: 'Clients',
      value: client,
    },
    {
      icon: <FaCalendarAlt />,
      label: 'Date',
      value: date,
    },
    {
      icon: <FaRegClipboard />,
      label: 'Category',
      value: category,
    },
    {
      icon: <FaMapMarkerAlt />,
      label: 'Location',
      value: location,
    },
  ];

  return (
    <div className="md:space-y-8 space-y-5 w-full max-w-sm mx-auto text-left">
      {infoItems.map((item, idx) => (
        <div key={idx} className="flex items-start gap-5">
          <div className="bg-primary-accent p-3 text-white text-xl">{item.icon}</div>
          <div>
            <h4 className="text-lg font-semibold text-gray-800">{item.label}</h4>
            <p className="text-sm text-gray-600">{item.value}</p>
          </div>
        </div>
      ))}

      <div className="mt-4">
        <h4 className="text-sm font-semibold text-gray-800 mb-2">Share It :</h4>
        <div className="flex justify-start gap-4">
          <a href="#" className="bg-emerald-900 text-white p-2 rounded-full">
            <FaFacebookF />
          </a>
          <a href="#" className="bg-emerald-900 text-white p-2 rounded-full">
            <FaTwitter />
          </a>
          <a href="#" className="bg-emerald-900 text-white p-2 rounded-full">
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
