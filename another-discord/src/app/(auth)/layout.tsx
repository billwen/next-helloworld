const AuthLayout = ({ children } : { children: React.ReactNode}) => {
  return (
    <div>
      <p>Default layout</p>
      <div>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;