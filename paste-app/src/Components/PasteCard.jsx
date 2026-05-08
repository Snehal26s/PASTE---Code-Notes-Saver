import {
  FaTrash,
  FaCopy,
  FaEye,
  FaEdit,
} from "react-icons/fa";

import { useDispatch } from "react-redux";

import { deletePaste } from "../redux/pasteSlice";

import toast from "react-hot-toast";

import { useNavigate } from "react-router-dom";

const PasteCard = ({ paste }) => {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const removePaste = () => {

    dispatch(deletePaste(paste.id));

    toast.success("Paste Deleted");
  };

  const copyPaste = () => {

    navigator.clipboard.writeText(
      paste.content
    );

    toast.success("Copied");
  };

  return (

    <div className="w-full bg-[#161b22] border border-gray-700 rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg">

      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">

        {/* Content Section */}

        <div className="flex-1 overflow-hidden">

          {/* Title */}

          <h1
            className="
              text-xl
              sm:text-2xl
              md:text-3xl
              font-bold
              mb-3
              break-words
            "
          >
            {paste.title}
          </h1>

          {/* Content */}

          <p
            className="
              text-gray-400
              text-sm
              sm:text-base
              leading-relaxed
              break-words
              mb-4
            "
          >
            {paste.content.slice(0, 180)}...
          </p>

          {/* Date */}

          <p
            className="
              text-gray-500
              text-xs
              sm:text-sm
            "
          >
            {paste.createdAt}
          </p>

        </div>

        {/* Buttons Section */}

        <div
          className="
            flex
            flex-wrap
            justify-start
            xl:justify-end
            gap-3
            sm:gap-4
          "
        >

          {/* View Button */}

          <button
            onClick={() =>
              navigate(`/paste/${paste.id}`)
            }
            className="
              bg-blue-500
              hover:bg-blue-600
              p-3
              sm:p-4
              rounded-xl
              transition
              duration-300
              text-white
              text-lg
            "
          >
            <FaEye />
          </button>

          {/* Copy Button */}

          <button
            onClick={copyPaste}
            className="
              bg-green-500
              hover:bg-green-600
              p-3
              sm:p-4
              rounded-xl
              transition
              duration-300
              text-white
              text-lg
            "
          >
            <FaCopy />
          </button>

          {/* Edit Button */}

          <button
            onClick={() =>
              navigate(`/?pasteId=${paste.id}`)
            }
            className="
              bg-yellow-500
              hover:bg-yellow-600
              p-3
              sm:p-4
              rounded-xl
              transition
              duration-300
              text-white
              text-lg
            "
          >
            <FaEdit />
          </button>

          {/* Delete Button */}

          <button
            onClick={removePaste}
            className="
              bg-red-500
              hover:bg-red-600
              p-3
              sm:p-4
              rounded-xl
              transition
              duration-300
              text-white
              text-lg
            "
          >
            <FaTrash />
          </button>

        </div>

      </div>

    </div>
  );
};

export default PasteCard;