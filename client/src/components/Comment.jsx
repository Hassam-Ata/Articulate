import { format } from "timeago.js";
import Image from "./Image";
import { useAuth, useUser } from "@clerk/clerk-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import axios from "axios";

const Comment = ({ comment, postId }) => {
  const { user } = useUser();
  const { getToken } = useAuth();
  const role = user?.publicMetadata?.role;

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async () => {
      const token = await getToken();
      return axios.delete(
        `${import.meta.env.VITE_API_URL}/comments/${comment._id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments", postId] });
      toast.success("Comment deleted successfully");
    },
    onError: (error) => {
      toast.error(error.response.data);
    },
  });

  const isExternalImage = comment.user.img?.startsWith("http");

  return (
    <div className="p-4 bg-slate-50 rounded-xl mb-8">
      <div className="flex items-center gap-4">
        {comment.user.img &&
          (isExternalImage ? (
            <img
              src={comment.user.img}
              className="w-10 h-10 rounded-full object-cover"
              alt={`${comment.user.username}'s avatar`}
            />
          ) : (
            <Image
              src={comment.user.img}
              className="w-10 h-10 rounded-full object-cover"
              w="40"
              h="40"
              alt={`${comment.user.username}'s avatar`}
            />
          ))}
        <span className="font-medium text-black">{comment.user.username}</span>
        <span className="text-sm text-black">{format(comment.createdAt)}</span>
        {user &&
          (comment.user.username === user.username || role === "admin") && (
            <span
              className="text-xs text-red-300 hover:text-red-500 cursor-pointer"
              onClick={() => mutation.mutate()}
            >
              delete
              {mutation.isPending && <span>(in progress)</span>}
            </span>
          )}
      </div>
      <div className="mt-4 text-black">
        <p>{comment.desc}</p>
      </div>
    </div>
  );
};

export default Comment;
