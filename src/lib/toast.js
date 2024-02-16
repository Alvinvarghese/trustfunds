import { toast } from "@/components/ui/use-toast";

export const toastError = (description, title) => {
  if (!title || title === "") title = "Error!";
  if (!description || description === "")
    description = "Something went wrong. Please try again later.";
  if (description === "Network Error")
    description = "Couldn't connect to server. Please try again later!";
  toast({
    variant: "destructive",
    title,
    description,
  });
};

export const toastSuccess = (description, title) => {
  if (!title || title === "") title = "Success!";
  if (!description || description === "")
    description = "Action completed successfully.";
  toast({
    variant: "default",
    title,
    description,
  });
};
