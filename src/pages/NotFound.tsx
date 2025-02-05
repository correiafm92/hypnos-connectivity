import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-accent/5 p-4">
      <div className="glass-panel p-8 max-w-md w-full space-y-6 animate-fade-in">
        <div className="flex flex-col items-center space-y-4">
          <AlertTriangle className="w-16 h-16 text-destructive animate-bounce" />
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-destructive">
            404
          </h1>
          <p className="text-xl text-muted-foreground text-center">
            Oops! A página que você procura não foi encontrada.
          </p>
          <Link
            to="/"
            className="glass-button inline-flex items-center gap-2 hover:text-primary transition-colors"
          >
            Voltar para Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;