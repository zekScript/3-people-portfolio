type PrivacyProps = {
  children: React.ReactNode;
};

const PrivacyLayout: React.FC<PrivacyProps> = ({ children }) => {
  return (
    <div className="flex items-center justify-center min-h-screen flex-col w-[50%] m-auto border-2 border-gray-800">
      <div className="m-32">{children}</div>
    </div>
  );
};

export default PrivacyLayout;
