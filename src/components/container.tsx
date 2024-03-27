type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="flex flex-col mx-auto max-w-7xl bg-white/[4%] min-h-screen">
      {children}
    </div>
  );
};

export default Container;
