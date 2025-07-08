// components/MyModal.jsx
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

export const Modal = ({ dialogTrigger, title, subTitle, footer, children }) => {
  return (
    <Dialog>
      {dialogTrigger && <DialogTrigger asChild>{dialogTrigger}</DialogTrigger>}

      <DialogContent
        className="px-5 py-8 md:px-10 md:py-12  rounded-2xl bg-blue-100 dark:bg-neutral-900 gap-0"
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <DialogHeader className="text-left">
          {title && (
            <DialogTitle className="!text-preset-3 md:!text-preset-2 text-primary-text">
              {title}
            </DialogTitle>
          )}
          {subTitle && (
            <DialogDescription className="!text-preset-6 text-secondary-text">
              {subTitle}
            </DialogDescription>
          )}
        </DialogHeader>

        <div className="-mx-5 md:-mx-10">{children}</div>

        {footer && <DialogFooter>{footer}</DialogFooter>}
      </DialogContent>
    </Dialog>
  );
};
