import { cn } from "@/lib/utils";


interface TitleHeaderProps {
  title: string;
  titleClassName?: string;
  description?: string;
  centered?: boolean;
  className?: string;
  descriptionClassName?: string;
}

const HeaderTitle= ({
  title,
  titleClassName,
  description,
  centered = false,
  className = "",

  descriptionClassName,
}:TitleHeaderProps) => {
  return (
    <div className={`w-full ${centered ? "text-center" : ""} ${className}`}>
      {/* Main Title */}
      <h1
        className={cn(
          "font-bold text-neutral-900 text-4xl leading-tight ",
          titleClassName,
          centered ? "mx-auto" : ""
        )}
        style={{
          maxWidth: "900px",
          ...(centered && { marginLeft: "auto", marginRight: "auto" }),
        }}
      >
        {title}
      </h1>

      {/* Description */}
      {description && (
        <p
          className={cn(
            "mt-4 text-gray-600 text-lg  max-w-[600px]",
            descriptionClassName,
            centered ? "mx-auto" : ""
          )}
          style={{
            ...(centered && { marginLeft: "auto", marginRight: "auto" }),
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default HeaderTitle;
