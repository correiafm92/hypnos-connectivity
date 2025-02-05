import { LoginForm } from "@/components/auth/LoginForm";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-accent/5 p-4">
      <div className="glass-panel p-8 w-full max-w-md space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Welcome to Hypnos Minds</h1>
          <p className="text-muted-foreground">
            Sign in to connect with the community
          </p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;