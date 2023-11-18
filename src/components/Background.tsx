import { cn } from "../lib/utils";

const Background = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(className)}>
      <div
        className="absolute  inset-x-0  -z-10 transform-gpu overflow-hidden blur-3xl"
        aria-hidden="true"
      >
        <div
          className="relative md:left-[calc(50%-11rem)]   top-0 aspect-[1155/678] 
    w-[124.1875rem] -translate-x-1/2 rotate-180 bg-gradient-to-tr
     from-[#40c4b5] to-[#c011fa] opacity-30 sm:left-[calc(50%-30rem)] 
     sm:w-[124.1875rem]"
          style={{
            clipPath:
              "polygon(77.1% 34.1%, 100% 71.6%, 78.5% 52.9%, 100.5% 75.1%, 32.5% 73.28%, 56.48% 67.48%, 95.18% 160.5%, 58.3% -200.8%, 39.5% 80.7%, 2% 72.5%, 27.5% 76.7%, 0.1% 64.98%, 12.9% 176%, 42.6% 95.8%, 89.1% 112.7%, 89.1% 56.1%)",
          }}
        />
      </div>
      {children}
    </div>
  );
};
export default Background;
