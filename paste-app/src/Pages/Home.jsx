import { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import {
  addPaste,
  updatePaste,
} from "../redux/pasteSlice";

import { v4 as uuid } from "uuid";

import toast from "react-hot-toast";

import {
  useNavigate,
  useSearchParams,
} from "react-router-dom";

const Home = () => {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [searchParams, setSearchParams] =
    useSearchParams();

  const pasteId = searchParams.get("pasteId");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const allPastes = useSelector(
    (state) => state.paste.pastes
  );

  useEffect(() => {

    if (pasteId) {

      const paste = allPastes.find(
        (p) => p.id === pasteId
      );

      setTitle(paste.title);
      setContent(paste.content);
    }

  }, [pasteId]);

  const createPaste = () => {

    if (!title || !content) {
      toast.error("Please fill all fields");
      return;
    }

    const paste = {
      id: pasteId || uuid(),
      title,
      content,
      createdAt: new Date().toLocaleDateString(),
    };

    if (pasteId) {

      dispatch(updatePaste(paste));

      toast.success("Paste Updated");

    } else {

      dispatch(addPaste(paste));

      toast.success("Paste Created");
    }

    setTitle("");
    setContent("");

    navigate("/pastes");
  };

  return (
    <div className="max-w-6xl mx-auto p-10">

      <button
        onClick={createPaste}
        className="bg-white text-black px-6 py-3 rounded-xl font-semibold mb-8"
      >
        {
          pasteId
            ? "Update Paste"
            : "Create Paste"
        }
      </button>

      <input
        type="text"
        placeholder="Enter title"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
        className="w-full bg-[#161b22] border border-gray-700 rounded-xl px-5 py-4 mb-8 outline-none"
      />

      <div className="bg-[#161b22] border border-gray-700 rounded-2xl overflow-hidden">

        <div className="bg-gray-700 p-4 flex gap-2">
          <div className="w-4 h-4 rounded-full bg-red-500"></div>
          <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
          <div className="w-4 h-4 rounded-full bg-green-500"></div>
        </div>

        <textarea
          rows="20"
          placeholder="Write your code or notes here..."
          value={content}
          onChange={(e) =>
            setContent(e.target.value)
          }
          className="w-full bg-[#0d1117] p-6 outline-none resize-none"
        ></textarea>

      </div>

    </div>
  );
};

export default Home;